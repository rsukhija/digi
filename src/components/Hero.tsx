import React from "react";
import { GENERAL_INFO } from "../data";
import { CheckCircle2, ArrowRight, Printer, Sparkles, PhoneCall } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const USP_ITEMS = [
    "Fast Same-Day Turnaround",
    "Premium 2400 DPI Japanese Plotters",
    "Highly Affordable Wholesale Rates",
    "Calibrated Pre-Press Standard Outlines"
  ];

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello! I am viewing your Digimax Printing website and want to discuss an urgent custom order.");
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-[#040101] border-b border-zinc-950 text-white"
    >
      {/* Decorative subtle background overlay to highlight the active grid */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(239,68,68,0.06),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Grid Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
        
        {/* Left Side: Editorial Typography Column (col-span-12 to col-span-5) */}
        <div className="lg:col-span-5 py-12 lg:py-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-900 pr-0 lg:pr-10">
          
          <div className="flex items-center space-x-3 mb-6">
            <Logo showText={false} className="w-12 h-12" />
            <div className="inline-block px-3.5 py-1.5 bg-red-950/40 border border-red-500/20 text-red-500 text-[10px] font-mono font-bold uppercase tracking-[0.25em] rounded-none">
              PROFESSIONAL DIGITAL PRESS
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter mb-6 uppercase text-white">
            FAST. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 font-extrabold">
              PREMIUM.
            </span>{" "}
            <br />
            AFFORDABLE.
          </h1>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-md font-light">
            High-speed custom layout plotting for shopkeepers, students, and corporate teams based in Malviya Nagar & Saket. Experience premium quality same-day service.
          </p>

          {/* Quick specs outline list */}
          <div className="space-y-2 mb-8 font-mono">
            {USP_ITEMS.map((item, id) => (
              <div key={id} className="flex items-center space-x-2.5 text-xs text-zinc-300">
                <span className="text-red-500 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Core Action buttons with zero-border-radius */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gradient-to-r from-red-650 to-red-800 text-white text-xs font-bold uppercase tracking-widest text-center transition-all cursor-pointer rounded-none flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(220,38,38,0.25)] hover:shadow-none"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#services"
              className="px-6 py-3.5 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300 text-center hover:bg-zinc-950 transition-colors cursor-pointer rounded-none"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Side: Geometric Block Canvas row & col summaries */}
        <div className="lg:col-span-7 bg-zinc-950/20 flex flex-col justify-between">
          
          {/* Top Half: Premium Workspace Digital Plotter Display */}
          <div className="relative h-64 sm:h-auto sm:flex-1 min-h-[300px] border-b border-zinc-900 overflow-hidden group">
            {/* The actual high-resolution printer image */}
            <img
              src="https://images.unsplash.com/photo-1615627186415-ee48cbfd1b1d?auto=format&fit=crop&w=1200&q=80"
              alt="Digimax Premium Printing Press Unit"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-in-out"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
            
            {/* Tech tag floating labels */}
            <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-850 text-[8px] sm:text-[9px] font-mono font-semibold tracking-wider text-red-500 uppercase">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span>DIGITAL PLOT OFFICE UNIT</span>
            </div>
            
            <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-500">
              PRESS_UNIT // JP_PLOT_X1
            </div>

            {/* Bottom floating details inside the image */}
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5 z-10">
              <div className="flex flex-wrap gap-1.5 mb-1.5">
                <span className="text-[9px] bg-red-950/80 text-red-400 border border-red-900/40 px-2 py-0.5 font-mono font-bold">CMYK AUTO-CALIBRATED</span>
                <span className="text-[9px] bg-blue-950/80 text-blue-400 border border-blue-900/40 px-2 py-0.5 font-mono font-bold">2400 DPI HIGH GLOSS</span>
              </div>
              <h3 className="font-display font-extrabold uppercase text-white text-base sm:text-lg tracking-tight">
                High-Speed Japanese Plotters
              </h3>
              <p className="text-zinc-300 text-xs font-light max-w-sm leading-relaxed">
                Printers running heavy duty media formats, visiting cards, banner substrates & customized adhesive label materials.
              </p>
            </div>
          </div>

          {/* Bottom Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 h-full sm:h-1/2">
            
            {/* Box B1: Rating Summary */}
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-900 flex flex-col justify-between">
              <div>
                <div className="text-red-500 font-black text-2xl mb-1 flex items-center gap-1">
                  <span>★</span> 5.0 Rating
                </div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono font-bold">
                  LOCAL CLIENT DIRECTORY
                </div>
              </div>
              <p className="text-[11px] italic text-zinc-400 font-light leading-snug mt-4">
                "Pristine print resolutions. Best shop near Saket area."
              </p>
              <p className="text-[9px] font-bold mt-2 text-zinc-300 font-mono uppercase">
                — AMAN GUPTA / DELHI
              </p>
            </div>

            {/* Box B2: Inline service points */}
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-900 bg-red-950/20">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-red-500 font-mono">
                CORE MEDIA SERVICES
              </h4>
              <ul className="text-[11px] space-y-2 text-zinc-300 font-mono font-bold">
                <li>• Business Cards</li>
                <li>• Star Flex Banners</li>
                <li>• Document Printouts</li>
                <li>• Custom Vinyl Layouts</li>
              </ul>
            </div>

            {/* Box B3: Direct Phone Link panel */}
            <div className="p-6 flex flex-col justify-center items-center text-center bg-zinc-950/60">
              <div className="text-[9px] font-mono tracking-widest font-bold text-zinc-500 mb-1">
                IN-SHOP LINE
              </div>
              <a
                href={`tel:${GENERAL_INFO.phone}`}
                className="text-lg font-mono font-black text-red-500 hover:text-red-400 hover:underline transition-colors block"
              >
                {GENERAL_INFO.phone}
              </a>
              <div className="w-10 h-[1px] bg-zinc-800 my-3" />
              <div className="text-[9px] text-zinc-400 leading-snug font-mono">
                F2, Malviya Nagar,
                <br />
                South Delhi – 110017
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Features Static Ribbon (Strip representation) */}
      <div className="bg-[#080707] border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        <div className="flex items-center px-8 py-5 gap-4 border-b sm:border-b-0 border-r border-zinc-900">
          <div className="text-2xl font-black text-zinc-800 font-mono">01</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">
            PREMIUM PRINT<br />
            <span className="text-zinc-500 font-normal">QUALITY CONTROL</span>
          </div>
        </div>

        <div className="flex items-center px-8 py-5 gap-4 border-b sm:border-b-0 border-r border-zinc-900">
          <div className="text-2xl font-black text-zinc-800 font-mono">02</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">
            LATEST MACHINERY<br />
            <span className="text-zinc-500 font-normal">HIGH OUTPUT EPS/CDR</span>
          </div>
        </div>

        <div className="flex items-center px-8 py-5 gap-4 border-r border-zinc-900">
          <div className="text-2xl font-black text-zinc-800 font-mono">03</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-200">
            LOCAL DELHI OUTLET<br />
            <span className="text-zinc-500 font-normal">MALVIYA NAGAR STAGE</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-950 via-zinc-950 to-blue-950 flex flex-col justify-center px-8 py-5">
          <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-red-400 mb-1">
            Operating Hours
          </div>
          <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            MON — SUN | 09:00 — 21:00
          </div>
          <div className="text-[9px] mt-0.5 text-zinc-400 font-mono">
            {GENERAL_INFO.email}
          </div>
        </div>

      </div>
    </section>
  );
}
