import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GenAI client lazily to avoid startup crashes if key is omitted initially
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required for Gemini services");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Full API endpoint for print planning & copywriting assistant
app.post("/api/plan-print", async (req, res) => {
  try {
    const { serviceType, userDescription } = req.body;
    if (!serviceType || !userDescription) {
      res.status(400).json({ error: "Missing required fields: serviceType and userDescription" });
      return;
    }

    try {
      const ai = getGenAI();
      const prompt = `You are an expert printing consultant, media layout specialist, and copywriter for "DIGIMAX PRINTING" in Malviya Nagar, South Delhi.
Analyze the user's specific printing project request:
- Print Type/Service: "${serviceType}"
- User Description details: "${userDescription}"

Based on this, suggest full customized print layout specifications, standard sizing, suggested materials (GMS or Substrate), finishing options, catchy headlining copy, and a technical briefing message for their graphic designer. Keep specifications highly practical and expert. Do not include price numbers/rates.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Suggested project title" },
              slogans: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "3 highly relevant headlines, body text ideas, or marketing slogans tailored exactly to this custom order" 
              },
              paperType: { type: Type.STRING, description: "Recommended optimal paper stock, GSM thickness, card format, or vinyl density" },
              finishType: { type: Type.STRING, description: "Recommended finishing selection (e.g., velvet soft matte lamination, spot UV glazes, metallic foils, metal loops, folding style)" },
              dimensions: { type: Type.STRING, description: "Standard industrial printing size along with safe-margin bleed guidance in mm/inches" },
              aestheticVibe: { type: Type.STRING, description: "Color palette theme recommendation, logo layout and font weights styling guidance (e.g., Space Grotesk, JetBrains Mono)" },
              designBrief: { type: Type.STRING, description: "Clear step-by-step graphic guidelines and outline margins brief for the pre-production designer" }
            },
            required: ["title", "slogans", "paperType", "finishType", "dimensions", "aestheticVibe", "designBrief"]
          }
        }
      });

      const responseText = response.text || "{}";
      res.json(JSON.parse(responseText));
    } catch (aiError: any) {
      // Graceful local backup engine to ensure seamless user experience even if API key is not present or loaded
      console.warn("AI service fallback initiated:", aiError?.message);
      
      const textMap: Record<string, any> = {
        visiting_card: {
          title: "Premium Executive Visiting Cards",
          slogans: [
            "Crafting Impressions that Last",
            "Where Professional Meets Luxury",
            "Connecting Dreams with Design"
          ],
          paperType: "350 GSM Premium Imported Royal Art Card",
          finishType: "Double Sided Velvet Soft-Touch Matte Lamination + Custom Spot UV Highlights",
          dimensions: "Standard Business Card Size: 92mm x 54mm (including 1mm cutting bleed margins)",
          aestheticVibe: "Deep obsidian background with bold geometric curves and bold crimson-red typography highlights.",
          designBrief: "Organize using a neat hierarchical grid. Place the primary corporate icon on the top-left section. Keep contact text set elegantly in sans-serif font sizes at 7.5pt for supreme legibility. Keep a 3mm safe border frame."
        },
        flex_banner: {
          title: "Vibrant Large Format Flex Banner",
          slogans: [
            "Be Bigger, Be Bolder",
            "Promotional Display That commands Attention",
            "Irresistible Outdoor Dominance"
          ],
          paperType: "Heavy-Duty Premium Star Flex Media Substrate (340 GSM)",
          finishType: "Reinforced heat-melted hems on all borders, fitted with heavy-duty brass grommet hooks every 1.5 feet",
          dimensions: "Popular Outdoor Banner Format: 6ft x 3ft or 8ft x 4ft active landscape",
          aestheticVibe: "High contrast primary banners, glowing red gradient background grids with stark white messaging.",
          designBrief: "Strictly avoid thin lightweight fonts. Use high impact block typography (e.g., Montserrat/Outfit) for headline headers. Highlight telephone inquiries and primary location in clear wide spacing."
        },
        document: {
          title: "Elite Corporate Document Set",
          slogans: [
            "Detailing Professional Excellence",
            "Flawless Print Clarity for Offices",
            "Executive Grade Spiral & Hard Bindings"
          ],
          paperType: "85 GSM Premium Alabaster Executive Bond Paper",
          finishType: "Transparent front protective acetate sheet with thick sturdy textured solid board backing in midnight black",
          dimensions: "A4 International Document Standard (210mm x 297mm)",
          aestheticVibe: "Clean professional alignments, deep charcoal headings, pristine high-resolution black text outputs.",
          designBrief: "Apply consistent outer page numbering. Set formatting grids so that multi-page layouts leave a balanced 15mm inner page margin, ensuring spiral punch holes do not cut deep into technical charts or diagrams."
        }
      };

      const fallback = textMap[serviceType] || textMap["visiting_card"];
      res.json({
        ...fallback,
        title: fallback.title + " (Local Engine Spec)",
        isDemo: true
      });
    }
  } catch (err: any) {
    res.status(500).json({ error: "Failed to process requesting brief: " + err.message });
  }
});

// App server setup with Vite middleware supporting direct entry ports
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DIGIMAX PRINTING server active on host 0.0.0.0 and port ${PORT}`);
  });
}

startServer();
