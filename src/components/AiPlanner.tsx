import React, { useState, useEffect, useRef } from "react";
import { AiPlanResult } from "../types";
import { GENERAL_INFO } from "../data";
import { Sparkles, Printer, FileText, Send, Copy, Check, MessageSquare, Loader2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AiPlannerProps {
  preselectedService: string;
  onClearPreselect: () => void;
}

export default function AiPlanner({ preselectedService, onClearPreselect }: AiPlannerProps) {
  const [serviceType, setServiceType] = useState<string>("visiting_card");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [result, setResult] = useState<AiPlanResult | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const steps = [
    "Analyzing your core branding requirements...",
    "Selecting ideal paper substrates and card GSM density...",
    "Drafting high-conversion copies & slogans...",
    "Pre-compiling vector safezone bleeding outlines..."
  ];

  // Pre-fill fields if user clicked a service card above
  useEffect(() => {
    if (preselectedService) {
      // map string label to select options
      const sLower = preselectedService.toLowerCase();
      if (sLower.includes("card") || sLower.includes("visiting")) {
        setServiceType("visiting_card");
      } else if (sLower.includes("flex") || sLower.includes("banner") || sLower.includes("poster")) {
        setServiceType("flex_banner");
      } else if (sLower.includes("doc") || sLower.includes("paper") || sLower.includes("spiral")) {
        setServiceType("document");
      }
      
      setDescription(`Please design a professional customized layout for: ${preselectedService}. Target audience is local South Delhi area.`);
      
      // Auto scroll down to the planner section
      const plannerSection = document.getElementById("ai-planner");
      if (plannerSection) {
        plannerSection.scrollIntoView({ behavior: "smooth" });
      }

      onClearPreselect();
    }
  }, [preselectedService]);

  // Loading animation step timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/plan-print", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceType, userDescription: description })
      });

      if (!response.ok) {
        throw new Error("Server printing calculation returned an error");
      }

      const data = await response.json();
      setResult(data);
      
      // Scroll to result once generated
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 550);
    } catch (err) {
      console.error("AI Planning service failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleWhatsAppShare = () => {
    if (!result) return;
    const bulletSlogans = result.slogans.map((s) => `• "${s}"`).join("\n");
    const compiled = `*--- COPIED PRINT ORDER BRIEF FROM DIGIMAX ---*
*Project Title:* ${result.title}
*Service Selected:* ${serviceType.toUpperCase()}
*Recommended Materials:* ${result.paperType}
*Digital Finishes:* ${result.finishType}
*Canvas Dimensions:* ${result.dimensions}
*Aesthetic Design Vibe:* ${result.aestheticVibe}
*Designer Execution Brief:* ${result.designBrief}
*Custom Copy Slogans drafted:*
${bulletSlogans}`;

    const text = encodeURIComponent(compiled);
    window.open(`https://wa.me/918287875040?text=${text}`, "_blank");
  };  return (
    <section id="ai-planner" className="py-24 bg-[#FAF9F6] border-b border-zinc-250/80 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="mx-auto flex items-center space-x-2 px-3.5 py-1 bg-red-50 border border-red-200 rounded-none w-fit">
            <Sparkles className="w-3.5 h-3.5 text-red-650" />
            <span className="text-xs font-mono tracking-[0.25em] text-red-650 uppercase font-bold">
              INTELLIGENT PRE-PRESS ENGINE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 leading-none">
            AI Printing <span className="text-red-500">Media Assistant</span>
          </h2>
          <p className="text-xs text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
            Plan your layout files intelligently. Describe your industry, concept, or company name to autocompute optimal materials, GSM, canvas bleeds, and draft promotional slogans instantly.
          </p>
        </div>

        {/* Input Control Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Prompt Console Input - Sharp & Flat */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-none p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-none bg-red-50 border border-red-200 flex items-center justify-center">
                <Printer className="w-4 h-4 text-red-605 text-red-600" />
              </div>
              <h3 className="font-display font-bold text-zinc-900 text-base sm:text-lg uppercase tracking-tight">AI Planning console</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type Dropdown */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest block">
                  1. SELECT MEDIA STYLE
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-white border border-zinc-250 px-4 py-3.5 text-xs text-zinc-800 focus:outline-none focus:border-red-600 font-mono"
                >
                  <option value="visiting_card">Visiting Card (Executive 350 GSM)</option>
                  <option value="flex_banner">Flex Banner (Premium Non-Tearable)</option>
                  <option value="document">Report Sheet / Presentation Bonding (A4/Bond)</option>
                </select>
              </div>

              {/* Requirement prompt */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-mono text-zinc-550 text-zinc-500 font-bold uppercase tracking-widest block">
                    2. DESCRIBE YOUR CONCEPT
                  </label>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase">Vivid prompt is best</span>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  required
                  placeholder="Example: SLEEK SLATE BANNER for my Malviya Nagar showroom. Need bold red lettering on a background saying 'Same-day Quality'."
                  className="w-full bg-white border border-zinc-250 p-4 text-xs text-zinc-805 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-600 resize-none leading-relaxed font-mono"
                />
              </div>

              {/* Buttons with pure sharp edges */}
              <button
                type="submit"
                disabled={loading || !description.trim()}
                className="w-full flex items-center justify-center space-x-2.5 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Specs...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    <span>COMPUTE PRINT ORDER BRIEF</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Prompt Console Response View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-zinc-200 rounded-none p-10 min-h-[350px] flex flex-col justify-center items-center text-center space-y-6 shadow-sm"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-none border border-zinc-200 border-t-red-600 animate-spin" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <p className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest">
                      {steps[loadingStep]}
                    </p>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-wide">
                      PROCESSING ACCORDING TO CMYK DELIMITED RULES...
                    </p>
                  </div>
                </motion.div>
              )}

              {!loading && !result && (
                <div className="bg-[#FAF9F6] border border-dashed border-zinc-300 rounded-none p-10 min-h-[380px] flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
                  <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center border border-zinc-200 text-zinc-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-zinc-700">Media Brief blueprint</h3>
                    <p className="text-[11px] text-zinc-600 leading-relaxed font-light">
                      Your technical specification layout sheet will load here. Pre-flight parameters, bleeding spaces, and sample copywriting will render safely.
                    </p>
                  </div>
                </div>
              )}               {!loading && result && (
                <motion.div
                  ref={resultRef}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-zinc-200 rounded-none overflow-hidden p-6 sm:p-8 shadow-md space-y-6 relative"
                >
                  {/* Title Bar */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200 pb-4 gap-3">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-red-655 font-bold uppercase text-red-600">
                        COMPILED MEDIA DRAFT SETUP
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-zinc-950 mt-0.5">
                        {result.title}
                      </h4>
                    </div>
                    {result.isDemo && (
                      <span className="px-2.5 py-0.5 bg-zinc-50 border border-zinc-200 text-[9px] font-mono text-zinc-605 text-zinc-600 font-bold rounded-none uppercase">
                        LOCAL FAST MODE
                      </span>
                    )}
                  </div>

                  {/* Core specifications grid */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Material stock */}
                    <div className="bg-[#FAF9F6] p-4 border border-zinc-200 rounded-none space-y-1">
                      <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase block">RECOMMENDED SUBSTRATE SHEET</span>
                      <p className="text-xs font-bold text-zinc-800 uppercase font-mono">{result.paperType}</p>
                    </div>

                    {/* Finish selection */}
                    <div className="bg-[#FAF9F6] p-4 border border-zinc-200 rounded-none space-y-1">
                      <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase block">IDEAL FINISHING SELECTION</span>
                      <p className="text-xs font-bold text-zinc-800 uppercase font-mono">{result.finishType}</p>
                    </div>

                    {/* Sizing Layout */}
                    <div className="bg-[#FAF9F6] p-4 border border-zinc-200 rounded-none space-y-1">
                      <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase block">PRE-PRESS BLEED DIMENSIONS</span>
                      <p className="text-xs font-bold text-zinc-100 text-zinc-800 uppercase font-mono">{result.dimensions}</p>
                    </div>

                    {/* Colors & Fonts vibe */}
                    <div className="bg-[#FAF9F6] p-4 border border-zinc-200 rounded-none space-y-1">
                      <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase block">VISUAL THEME DIRECTION</span>
                      <p className="text-xs font-bold text-zinc-100 text-zinc-800 uppercase font-mono">{result.aestheticVibe}</p>
                    </div>

                  </div>                  {/* Copywriting Headlines generator */}
                  <div className="relative z-10 space-y-2.5">
                    <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase block">
                      3. DRAFTED HEADLINES & SLOGANS (Click to Copy)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {result.slogans.map((slog, sIdx) => {
                        const uniqueId = `slog-${sIdx}`;
                        const isCopied = copiedText === uniqueId;
                        return (
                          <div
                            key={sIdx}
                            onClick={() => handleCopyToClipboard(slog, uniqueId)}
                            className="bg-[#FAF9F6] hover:bg-zinc-100 border border-zinc-200 p-3 rounded-none flex items-center justify-between text-xs text-zinc-700 font-medium cursor-pointer transition-colors group animate-fade-in"
                          >
                            <span className="italic">"{slog}"</span>
                            <button className="text-zinc-400 group-hover:text-zinc-700 p-1">
                              {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pre-production design Briefing */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 font-mono tracking-wider uppercase">
                      <span>4. PRINT-SHOP DESIGNER CMYK DIRECTIVE</span>
                      <button
                        onClick={() => handleCopyToClipboard(result.designBrief, "brief")}
                        className="flex items-center space-x-1.5 hover:text-zinc-950 bg-[#FAF9F6] px-2.5 py-1 border border-zinc-200 rounded-none text-zinc-600 transition-colors"
                      >
                        {copiedText === "brief" ? (
                          <>
                            <Check className="w-3 h-3 text-green-500" />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY SPECIAL DIRECTIVE</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-[#FAF9F6] border border-zinc-200 rounded-none p-4 font-mono text-[10px] text-zinc-650 select-text leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {result.designBrief}
                    </div>
                  </div>

                  {/* CTA Submissions */}
                  <div className="relative z-10 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsAppShare}
                      className="flex-1 flex items-center justify-center space-x-2.5 py-3.5 bg-gradient-to-r from-red-650 to-red-800 text-white rounded-none text-xs font-bold uppercase tracking-widest cursor-pointer hover:shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white text-red-700" />
                      <span>Submit Specs to WhatsApp Manager</span>
                    </button>
                    <button
                      onClick={() => {
                        setResult(null);
                        setDescription("");
                      }}
                      className="px-5 py-3.5 bg-white border border-zinc-250 hover:bg-zinc-105 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 text-xs font-bold uppercase tracking-widest rounded-none transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset Form</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
