import React, { useState, useRef } from "react";
import { Sparkles, Download, Check, MessageSquare, RefreshCw, Layers, Phone, MapPin, Mail, User, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import html2canvas from "html2canvas";
import { GENERAL_INFO } from "../data";

// Type definitions for business card templates
interface ThemeTemplate {
  id: string;
  name: string;
  bgColor: string;
  accentBg: string;
  textColor: string;
  accentColor: string;
  vibe: string;
  badge: string;
  customStyle?: React.CSSProperties;
}

const TEMPLATES: ThemeTemplate[] = [
  {
    id: "golden_foil",
    name: "Golden Foil",
    bgColor: "bg-[#09090b]",
    accentBg: "bg-neutral-900 border-amber-600/30",
    textColor: "text-amber-100",
    accentColor: "text-amber-400 font-extrabold",
    vibe: "Laser Metallic Gold Foil • 350 GSM Black Cotton Wood",
    badge: "Most Luxurious",
    customStyle: {
      background: "radial-gradient(circle at 15% 15%, #181c1a 0%, #08080a 90%)",
      borderColor: "#d97706",
      boxShadow: "0 0 25px rgba(217, 119, 6, 0.25)"
    }
  },
  {
    id: "matte_finish",
    name: "Matte Finish",
    bgColor: "bg-zinc-900",
    accentBg: "bg-zinc-800",
    textColor: "text-zinc-100",
    accentColor: "text-blue-400",
    vibe: "Sleek Zero-Glare Matte • 400 GSM Rigid Silk Stock",
    badge: "Corporate Elite",
    customStyle: {
      background: "#18181b",
      borderColor: "#27272a",
      boxShadow: "none"
    }
  },
  {
    id: "velvet_finish",
    name: "Velvet Finish",
    bgColor: "bg-[#120e2e]",
    accentBg: "bg-indigo-950/40",
    textColor: "text-indigo-100",
    accentColor: "text-rose-400",
    vibe: "Premium Soft-Touch Velvet • Fingerprint Proof Guard",
    badge: "Tactile Luxury",
    customStyle: {
      background: "linear-gradient(135deg, #100b2b 0%, #030112 100%)",
      borderColor: "#312e81"
    }
  },
  {
    id: "glossy_finish",
    name: "Glossy Card",
    bgColor: "bg-zinc-950",
    accentBg: "bg-zinc-900",
    textColor: "text-white",
    accentColor: "text-cyan-400",
    vibe: "High-Gloss Glaze Protective Overlay • Dynamic Reflection",
    badge: "Premium Shine",
    customStyle: {
      background: "linear-gradient(135deg, #090d16 0%, #030712 100%)",
      borderColor: "#0891b2",
      boxShadow: "inset 0 0 40px rgba(8, 145, 178, 0.1)"
    }
  },
  {
    id: "spot_uv",
    name: "Spot UV",
    bgColor: "bg-neutral-950",
    accentBg: "bg-neutral-900/50",
    textColor: "text-zinc-200",
    accentColor: "text-red-505 text-red-500 font-bold",
    vibe: "Matte Base + Raised Gloss Highlights on Company Logo",
    badge: "Modern Contrast",
    customStyle: {
      background: "radial-gradient(circle at 80% 20%, #0a0a0c 0%, #020203 100%)",
      borderColor: "rgba(220, 38, 38, 0.4)",
      boxShadow: "0 0 15px rgba(220, 38, 38, 0.15)"
    }
  },
  {
    id: "round_corner",
    name: "Round Corner",
    bgColor: "bg-[#171717]",
    accentBg: "bg-neutral-800",
    textColor: "text-neutral-100",
    accentColor: "text-emerald-400",
    vibe: "Precision Die-Cut Curved Edges • Sleek Modern Style",
    badge: "Modern Form",
    customStyle: {
      background: "#171717",
      borderColor: "#262626",
      borderRadius: "20px"
    }
  },
  {
    id: "luxury_black",
    name: "Luxury Black",
    bgColor: "bg-black",
    accentBg: "bg-zinc-950",
    textColor: "text-zinc-100",
    accentColor: "text-zinc-400",
    vibe: "Pure Stealth Black Card • Chrome Silver Lettering",
    badge: "Stealth Luxury",
    customStyle: {
      background: "linear-gradient(135deg, #050505 0%, #000000 100%)",
      borderColor: "#3f3f46",
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
    }
  },
  {
    id: "embossed",
    name: "Embossed",
    bgColor: "bg-stone-50",
    accentBg: "bg-stone-100",
    textColor: "text-stone-900",
    accentColor: "text-rose-700 font-bold",
    vibe: "Raised Letterpress Embossing • Heavy Cotton Textures",
    badge: "Classic Fine-Art",
    customStyle: {
      background: "#fafaf9",
      borderColor: "#e7e5e4",
      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.02)"
    }
  },
  {
    id: "transparent",
    name: "Transparent",
    bgColor: "bg-neutral-900/30",
    accentBg: "bg-white/5",
    textColor: "text-white",
    accentColor: "text-blue-400 font-black",
    vibe: "Laser-cut Translucent Frosted Acrylic Board",
    badge: "Futuristic View",
    customStyle: {
      background: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
      color: "#ffffff"
    }
  },
  {
    id: "textured_card",
    name: "Textured",
    bgColor: "bg-[#fcfbf9]",
    accentBg: "bg-[#f4f2ee]",
    textColor: "text-[#2e2b27]",
    accentColor: "text-[#b27e45] font-bold",
    vibe: "Woven Linen Cross-Hatch Pattern • Heavy Warm Feeling",
    badge: "Traditional Texture",
    customStyle: {
      background: "linear-gradient(135deg, #fdfdfb 0%, #f7f5f0 100%)",
      borderColor: "#e8e5dc",
      backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1.5px, transparent 3px)"
    }
  }
];

export default function BusinessCardMockup() {
  const [name, setName] = useState<string>("Vikram Aditya");
  const [designation, setDesignation] = useState<string>("Principal Brand Strategist");
  const [company, setCompany] = useState<string>("Alpha Media Holdings");
  const [mobile, setMobile] = useState<string>("+91 98108 51040");
  const [email, setEmail] = useState<string>("aditya@alphaholdings.in");
  const [address, setAddress] = useState<string>("A3, Malviya Nagar Main Highway, South Delhi 110017");
  const [slogan, setSlogan] = useState<string>("Tailoring Visual Architecture");
  const [logoStyle, setLogoStyle] = useState<string>("classic"); // classic, minimal, geometric
  const [logoPosition, setLogoPosition] = useState<"top-left" | "center">("top-left");
  const [logoShape, setLogoShape] = useState<"square" | "round">("square");
  const [logoImage, setLogoImage] = useState<string | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper to render the custom defined logo cleanly
  const renderCardLogo = (sizeCls: string = "w-8 h-8") => {
    const frameRoundedClass = logoShape === "round" ? "rounded-full" : "rounded-none";
    const borderStyles = activeTemplate.id === "golden_foil" 
      ? "border-amber-500/30" 
      : activeTemplate.id === "transparent" 
      ? "border-white/20 bg-white/10" 
      : "border-zinc-200/45";

    if (logoImage) {
      return (
        <div className={`${sizeCls} ${frameRoundedClass} overflow-hidden border bg-white flex items-center justify-center p-0.5 shadow-sm ${borderStyles}`}>
          <img
            src={logoImage}
            alt="Banda Custom Emblem"
            className={`w-full h-full object-contain ${logoShape === "round" ? "rounded-full" : "rounded-none"}`}
            crossOrigin="anonymous"
          />
        </div>
      );
    }

    // Default stylized emblem blocks
    switch (logoStyle) {
      case "classic":
        return (
          <div className={`${sizeCls} ${frameRoundedClass} border flex items-center justify-center font-serif font-black text-xs relative overflow-hidden bg-zinc-900 border-zinc-700/65 shadow-sm`}>
            <span className={activeTemplate.accentColor}>{company.charAt(0) || "M"}</span>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-600 rotate-45" />
          </div>
        );
      case "minimal":
        return (
          <div className={`${sizeCls} ${frameRoundedClass} flex items-center justify-center relative bg-gradient-to-br from-red-650 to-red-800 shadow-sm`}>
            <span className="font-sans font-bold text-xs text-white">X</span>
            <div className="absolute top-0 right-1 w-1 h-1 bg-zinc-50 rounded-full" />
          </div>
        );
      case "geometric":
      default:
        return (
          <div className={`${sizeCls} border border-red-500/50 ${frameRoundedClass} flex items-center justify-center border-dashed p-0.5 shadow-sm`}>
            <div className={`w-full h-full ${frameRoundedClass} bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-white`}>
              {company.substring(0, 2).toUpperCase() || "DX"}
            </div>
          </div>
        );
    }
  };
  
  const [activeTemplate, setActiveTemplate] = useState<ThemeTemplate>(TEMPLATES[0]);
  const [viewSide, setViewSide] = useState<"front" | "back">("front");
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [aiTip, setAiTip] = useState<string>("");
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const mockupRef = useRef<HTMLDivElement>(null);

  // AI helper: synthesizes smart slogans and layouts based on details
  const handleAiPerfectDetails = async () => {
    setAiGenerating(true);
    setAiTip("");
    try {
      // Prompt query with fallback logic in case server-side Gemini key isn't provided/ready
      // Note: We use process.env or direct fetch
      const promptDescription = `Design business card copy. Name: "${name}", Designation: "${designation}", Company: "${company}". Create an extremely sleek professional sloganning corporate motto aligned for their printing cards.`;
      
      const response = await fetch("/api/plan-print", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "visiting_card",
          userDescription: promptDescription
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.slogans && data.slogans.length > 0) {
          // Select one slogan at random
          const suggestedSlogan = data.slogans[0].replace(/"/g, "");
          setSlogan(suggestedSlogan);
          if (data.aestheticVibe) {
            setAiTip(`Gemini AI Suggested Visual Guideline: ${data.aestheticVibe}`);
          }
        }
      } else {
        throw new Error("Local fallback triggered");
      }
    } catch (err) {
      // Local smart mock helper generators with top level business mottos
      const mottos = [
        "Synchronizing Precision with Creativity",
        "Pioneering Sustainable Business Frameworks",
        "Redefining Digital Commerce Solutions",
        "Architecting Premium Local Enterprises",
        "Empowering Visual Narrative Growth"
      ];
      const randomMotto = mottos[Math.floor(Math.random() * mottos.length)];
      setSlogan(randomMotto);
      setAiTip("AI Fallback Engaged: Drafted professional corporate copy.");
    } finally {
      setAiGenerating(false);
    }
  };

  // Uses html2canvas to take the card container element and download as a high definition PNG
  const handleDownloadMockup = async () => {
    if (!mockupRef.current) return;
    setIsDownloading(true);
    try {
      // Temporarily remove standard tilt effect calculations or bounds to print flawlessly
      const canvas = await html2canvas(mockupRef.current, {
        useCORS: true,
        scale: 2.5, // Crisp HD rendering
        backgroundColor: null,
        logging: false
      });
      
      const imageURL = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imageURL;
      downloadLink.download = `${company.replace(/\s+/g, "_")}_BusinessCard_Mockup.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Exporting card image failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  // Generates neat WhatsApp messages compiling design specs and fields
  const handleSendToDigimax = () => {
    const messageText = `*-- NEW CUSTOMER BUSINESS CARD MOCKUP DESIGN --*
*Business Name:* ${company}
*Customer Name:* ${name}
*Job Designation:* ${designation}
*Active Mobile:* ${mobile}
*E-mail Address:* ${email}
*Postal Address:* ${address}
*Suggested Slogan:* "${slogan}"
*Chosen Print Board Template:* ${activeTemplate.name}
*Format Orientation:* Front & Back standard vectors

Please verify safe-margins bleed and prepare layout for direct Japanese Plotter print. Thank you!`;

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${encoded}`, "_blank");
  };

  const handleResetForm = () => {
    setName("Vikram Aditya");
    setDesignation("Principal Brand Strategist");
    setCompany("Alpha Media Holdings");
    setMobile("+91 98108 51040");
    setEmail("aditya@alphaholdings.in");
    setAddress("A3, Malviya Nagar Main Highway, South Delhi 110017");
    setSlogan("Tailoring Visual Architecture");
    setLogoStyle("classic");
    setAiTip("");
  };

  return (
    <section id="mockup-studio" className="py-24 bg-[#050202] border-b border-zinc-900 relative overflow-hidden">
      
      {/* Absolute visual radial flare */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-650/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="mx-auto flex items-center space-x-2 px-3 py-1 bg-red-950/40 border border-red-500/20 rounded-none w-fit">
            <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-red-500 uppercase font-bold">
              BESPOKE INTERACTIVE DESIGN LAB
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Business Card <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Mockup Studio</span>
          </h2>
          <p className="text-xs text-zinc-300 max-w-xl mx-auto leading-relaxed font-light">
            No design files ready? Fill in your name, contact fields, choose active substrates, and render a high definition mock print in seconds. Adjust layouts using artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left panel: Form Input Fields */}
          <div className="lg:col-span-5 bg-zinc-950/50 border border-zinc-800/80 p-6 sm:p-8 rounded-none shadow-2xl backdrop-blur-md space-y-6">
            
            <div className="flex items-center space-x-3 pb-3 border-b border-zinc-800">
              <span className="w-2.5 h-2.5 bg-red-650" />
              <h3 className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider">
                CARD CONTENT ENTRY
              </h3>
            </div>

            <div className="space-y-4 font-mono text-xs">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <User className="w-3 h-3 text-red-500" />
                  <span>Your Full Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Aditya"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium"
                />
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <Layers className="w-3 h-3 text-red-500" />
                  <span>Company Name</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Alpha Media Holdings"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium"
                />
              </div>

              {/* Designation */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-red-500" />
                  <span>Job Designation</span>
                </label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g. Principal Brand Consultant"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium"
                />
              </div>

              {/* Slogan */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-red-500" />
                    <span>Business Slogan / Motto</span>
                  </label>
                  
                  <button
                    type="button"
                    onClick={handleAiPerfectDetails}
                    disabled={aiGenerating}
                    className="text-[9px] text-red-500 font-bold uppercase tracking-wider cursor-pointer hover:underline flex items-center space-x-1"
                  >
                    <span>{aiGenerating ? "Generating..." : "⚡ AI Auto Slogan"}</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  placeholder="e.g. Tailoring Visual Architecture"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium"
                />
              </div>

              {/* Contact phone */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-red-500" />
                  <span>Mobile Line</span>
                </label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="e.g. +91 98108 51040"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-mono font-bold"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <Mail className="w-3 h-3 text-red-500" />
                  <span>Work E-mail</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. aditya@alphaholdings.in"
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium"
                />
              </div>

              {/* Office Address */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  <span>Business Address</span>
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  placeholder="Saket Area, New Delhi"
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-red-600 font-sans font-medium resize-none leading-relaxed"
                />
              </div>

              {/* Custom logo properties block */}
              <div className="space-y-4 pt-3 border-t border-dashed border-zinc-800">
                <p className="text-[10px] text-red-500 font-black uppercase tracking-widest block">
                  🛡️ ADVANCED EMBLEM CONTROLS
                </p>
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    Logo Placement
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setLogoPosition("top-left")}
                      className={`py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none cursor-pointer transition-colors text-center ${
                        logoPosition === "top-left"
                          ? "bg-red-600 border-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      📐 Standard Left
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogoPosition("center")}
                      className={`py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none cursor-pointer transition-colors text-center ${
                        logoPosition === "center"
                          ? "bg-red-600 border-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      🎯 Centered Logo
                    </button>
                  </div>
                </div>

                {/* Logo frame shape controls (Round or Square) */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    Frame Border Shape
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setLogoShape("square")}
                      className={`py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none cursor-pointer transition-colors text-center ${
                        logoShape === "square"
                          ? "bg-red-600 border-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      🔳 Square Frame
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogoShape("round")}
                      className={`py-2 text-[10px] font-bold uppercase tracking-widest border rounded-none cursor-pointer transition-colors text-center ${
                        logoShape === "round"
                          ? "bg-red-600 border-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                          : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      🔴 Round Circle
                    </button>
                  </div>
                </div>

                {/* Logo Preset styling types */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    Emblem Style Preset
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { style: "classic", label: "Classic Seal" },
                      { style: "minimal", label: "Sleek Hexa" },
                      { style: "geometric", label: "Helix Grid" }
                    ].map((x) => (
                      <button
                        key={x.style}
                        type="button"
                        onClick={() => setLogoStyle(x.style)}
                        className={`py-2 text-[9px] font-bold uppercase tracking-wider border rounded-none cursor-pointer transition-colors text-center ${
                          logoStyle === x.style
                            ? "bg-red-600 border-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                            : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400"
                        }`}
                      >
                        {x.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Emblem Logo File Upload */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    Upload Custom Emblem Logo
                  </span>
                  <div className="flex items-center space-x-2">
                    <label className="flex-1 border-2 border-dashed border-zinc-800 hover:border-red-650 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 cursor-pointer p-2 text-center text-[10px] font-mono uppercase tracking-wide transition-all select-none">
                      <span>{logoImage ? "✅ Custom Emblem Loaded" : "📁 Choose PNG/JPG Logo"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                    </label>
                    {logoImage && (
                      <button
                        type="button"
                        onClick={() => setLogoImage(null)}
                        className="px-3 py-2 border border-red-900 bg-red-950/40 text-red-400 text-[10px] font-bold hover:bg-red-900 rounded-none cursor-pointer select-none"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Micro AI generated note */}
            {aiTip && (
              <div className="p-3.5 bg-red-950/20 border border-red-900/60 text-[10px] text-red-400 leading-normal font-mono uppercase">
                {aiTip}
              </div>
            )}

            <div className="pt-2 border-t border-zinc-800 flex gap-2">
              <button
                onClick={handleResetForm}
                className="px-4 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-none flex items-center justify-center cursor-pointer transition-colors"
                title="Reset Content Fields"
              >
                <RefreshCw className="w-4 h-4 text-zinc-400" />
              </button>

              <button
                onClick={handleSendToDigimax}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-none flex items-center justify-center space-x-2.5 cursor-pointer shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white text-red-900" />
                <span>Submit Design to WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right panel: Live Card Mockup Rendering */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center justify-center w-full">
            
            {/* Template Card Theme Buttons Row */}
            <div className="w-full flex flex-col space-y-3">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold block text-center lg:text-left">
                SELECT CORE SUBSTRATE THEME
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full">
                {TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTemplate(t)}
                    className={`p-2.5 text-left border rounded-none flex flex-col justify-between cursor-pointer transition-all ${
                      activeTemplate.id === t.id
                        ? "border-red-600 bg-red-950/30 ring-1 ring-red-600 shadow-[0_0_15px_rgba(220,38,38,0.25)]"
                        : "border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-100"
                    }`}
                  >
                    <div>
                      <p className={`text-xs font-bold uppercase line-clamp-1 ${activeTemplate.id === t.id ? 'text-white' : 'text-zinc-300'}`}>{t.name}</p>
                      <p className="text-[8px] font-mono text-zinc-500 uppercase mt-0.5">{t.badge}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Rotative side selector buttons */}
            <div className="flex border border-zinc-800 bg-zinc-950 p-1 rounded-none w-fit shadow-md">
              <button
                onClick={() => setViewSide("front")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer transition-all ${
                  viewSide === "front"
                    ? "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Front Print side
              </button>
              <button
                onClick={() => setViewSide("back")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer transition-all ${
                  viewSide === "back"
                    ? "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Back Print side
              </button>
            </div>

            {/* Realistic Mockup Render Window */}
            <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#0e0c0c] to-[#040101] border border-zinc-900 py-12 px-4 sm:px-8 flex items-center justify-center shadow-inner min-h-[380px] group">
              
              {/* Perspective background grids */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
              
              {/* Corner decor bounds */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                Safe Margin Active [CMYK Match]
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                DIGIMAX CALIBRATED MOCK
              </div>

              {/* The Actual Card frame (html2canvas will capture this) */}
              <div
                ref={mockupRef}
                style={activeTemplate.customStyle}
                className={`w-full max-w-[500px] h-[280px] p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl border transition-all duration-300 pointer-events-auto ${activeTemplate.bgColor} ${activeTemplate.textColor}`}
              >
                
                {/* Visual Bleed Guideline overlays - hidden on download but visible in mockup for expert touch */}
                <div className="absolute inset-0.5 border border-dashed border-red-600/10 pointer-events-none z-10" />
                <span className="absolute top-1 left-1.5 text-[6px] font-mono text-red-600/30 font-bold uppercase pointer-events-none tracking-widest select-none">
                  2.5mm Bleed Margin
                </span>

                <AnimatePresence mode="wait">
                  {viewSide === "front" ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="h-full flex flex-col justify-between w-full"
                    >
                      
                      {/* Top Banner Row */}
                      <div className="flex items-start justify-between">
                        
                        {/* Dynamic Custom Logo Placement */}
                        <div className="flex items-center space-x-2.5">
                          {logoPosition === "top-left" && renderCardLogo("w-8 h-8")}
                          
                          <div>
                            <p className="text-xs sm:text-sm font-display font-black uppercase tracking-wider leading-none">
                              {company || "ALPHA DESIGN GROUP"}
                            </p>
                            <p className="text-[8px] font-mono leading-none tracking-widest text-[#93c5fd] mt-1 line-clamp-1 opacity-90 uppercase">
                              {slogan || "SHARK BLUEPRINTS"}
                            </p>
                          </div>
                        </div>

                        {/* Top corner scanning QR code with real-time update matching form number */}
                        <div className="flex flex-col items-center flex-shrink-0 relative group z-20">
                          <div className="w-11 h-11 bg-white p-0.5 rounded-none border border-zinc-250 shadow-sm flex items-center justify-center">
                            <img
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=050505&data=${encodeURIComponent(`https://wa.me/91${mobile.replace(/[+\s-]/g, "")}`)}`}
                              alt="Scan on WhatsApp"
                              className="w-full h-full object-contain"
                              crossOrigin="anonymous"
                            />
                          </div>
                          <span className="text-[5.5px] font-mono tracking-tighter opacity-80 uppercase mt-0.5 scale-90 text-zinc-400">
                            WA SCAN
                          </span>
                        </div>

                      </div>

                      {/* Central elements based on user alignment settings */}
                      {logoPosition === "center" ? (
                        <div className="flex-1 flex flex-col items-center justify-center space-y-2 z-10 py-1">
                          {renderCardLogo("w-12 h-12")}
                          <div className="text-center">
                            <h4 className="font-display font-bold text-sm sm:text-base leading-none uppercase tracking-wider">
                              {name || "SHREYA MALHOTRA"}
                            </h4>
                            <p className={`text-[8px] font-mono tracking-widest uppercase font-bold mt-1 ${activeTemplate.accentColor}`}>
                              {designation || "Executive Brand Partner"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* Middle layout: Standard Name and title positioning */
                        <div className="py-2.5">
                          <h4 className="font-display font-bold text-base sm:text-lg leading-none uppercase tracking-wide">
                            {name || "SHREYA MALHOTRA"}
                          </h4>
                          <p className={`text-[9px] font-mono tracking-widest uppercase font-semibold mt-1 flex items-center space-x-1.5 ${activeTemplate.accentColor}`}>
                            <span>•</span>
                            <span>{designation || "Executive Brand Partner"}</span>
                          </p>
                        </div>
                      )}

                      {/* Bottom row: Dynamic metadata */}
                      <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[8px] sm:text-[9.5px] leading-relaxed font-mono mt-auto select-text">
                        <div className="space-y-0.5">
                          <p className="flex items-center space-x-1">
                            <Phone className="w-2.5 h-2.5 text-zinc-400" />
                            <span className="font-bold">{mobile || "+91 82878 75040"}</span>
                          </p>
                          <p className="flex items-center space-x-1">
                            <Mail className="w-2.5 h-2.5 text-zinc-400" />
                            <span className="lowercase">{email || "consult@alphamedia.com"}</span>
                          </p>
                        </div>
                        
                        <p className="flex items-start space-x-1 line-clamp-2 leading-tight">
                          <MapPin className="w-2.5 h-2.5 text-zinc-400 mt-0.5 flex-shrink-0" />
                          <span>{address || "Malviya Nagar, Delhi"}</span>
                        </p>
                      </div>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4 w-full"
                    >
                      {/* Geometric card back artwork */}
                      <div className="relative p-1">
                        <div className="w-14 h-14 border border-red-600 rounded-none flex items-center justify-center font-bold text-lg relative uppercase font-display select-none">
                          <span className={activeTemplate.accentColor}>{company.substring(0, 2).toUpperCase() || "AL"}</span>
                          <div className="absolute top-0 left-0 w-2 h-2 bg-red-600" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-600" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display font-black text-sm uppercase tracking-[0.2em] leading-normal">
                          {company || "ALPHA DESIGN GROUP"}
                        </h3>
                        {slogan && (
                          <div className="flex items-center justify-center space-x-2 text-[8px] font-mono tracking-widest uppercase text-zinc-450 opacity-80 mt-1">
                            <span className="h-px w-3 bg-red-650" />
                            <span>{slogan}</span>
                            <span className="h-px w-3 bg-red-650" />
                          </div>
                        )}
                      </div>

                      <p className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">
                        SOUTH DELHI DIGITAL PRINTING OUTLET
                      </p>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

            {/* Downloader triggers */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleDownloadMockup}
                disabled={isDownloading}
                className="flex-1 py-3.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2.5 shadow-md active:scale-99 hover:shadow-red-950/20"
              >
                <Download className="w-4 h-4 text-white" />
                <span>{isDownloading ? "EVALUATING SVG..." : "Download High-Res Mockup PNG"}</span>
              </button>
              
              <div className="p-3 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-600 rounded-none flex items-center justify-center space-x-2.5 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="uppercase font-bold text-zinc-900">{activeTemplate.vibe}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
