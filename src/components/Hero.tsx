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
      className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-[#FAF9F6] border-b border-zinc-200"
    >
      {/* Decorative subtle background overlay to highlight the active grid */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(185,28,28,0.02),transparent)] pointer-events-none" />

      {/* Main Hero Grid Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Side: Editorial Typography Column (col-span-12 to col-span-5) */}
        <div className="lg:col-span-5 py-12 lg:py-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-200/80 pr-0 lg:pr-10">
          
          <div className="flex items-center space-x-3 mb-6">
            <Logo showText={false} className="w-12 h-12" />
            <div className="inline-block px-3.5 py-1.5 bg-red-50 border border-red-200 text-red-650 text-[10px] font-mono font-bold uppercase tracking-[0.25em] rounded-none">
              PROFESSIONAL DIGITAL PRESS
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter mb-6 uppercase text-zinc-950">
            FAST. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-550">
              PREMIUM.
            </span>{" "}
            <br />
            AFFORDABLE.
          </h1>

          <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-md font-light">
            High-speed custom layout plotting for shopkeepers, students, and corporate teams based in Malviya Nagar & Saket. Experience premium quality same-day service.
          </p>

          {/* Quick specs outline list */}
          <div className="space-y-2 mb-8 font-mono">
            {USP_ITEMS.map((item, id) => (
              <div key={id} className="flex items-center space-x-2.5 text-xs text-zinc-800">
                <span className="text-red-500 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Core Action buttons with zero-border-radius */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#ai-planner"
              className="px-6 py-3.5 bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest text-center transition-colors hover:bg-zinc-800 cursor-pointer rounded-none flex items-center justify-center space-x-2"
            >
              <span>Build AI Draft</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#services"
              className="px-6 py-3.5 border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-850 text-center hover:bg-zinc-50 transition-colors cursor-pointer rounded-none"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Side: Geometric Block Canvas row & col summaries */}
        <div className="lg:col-span-7 bg-white/40 flex flex-col justify-between">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full sm:h-1/2 border-b border-zinc-200/80">
            
            {/* Box A1: Digital Hub focus */}
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-zinc-200/80 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-650/5 to-transparent opacity-40" />
              <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-400">SPEC_01 / RESOLUTION</div>
              
              <h3 className="text-lg font-bold tracking-tight text-zinc-950 mb-2 relative z-10 transition-colors group-hover:text-red-650 uppercase">
                Digital Hub
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed relative z-10 font-light">
                Calibrated multi-ink heads resolving business cards, glowing backlit signages, and synthetic adhesive labels.
              </p>
            </div>

            {/* Box A2: Same-day delivery highlights */}
            <div className="p-8 flex flex-col justify-end bg-zinc-50 relative">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-red-600 font-semibold">SPEED_02 / LIVE</div>
              <div className="flex gap-1 mb-4">
                <div className="w-3.5 h-3.5 bg-red-605 bg-red-600" />
                <div className="w-3.5 h-3.5 bg-red-500" />
                <div className="w-3.5 h-3.5 bg-red-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-zinc-950 mb-2 uppercase">
                Fast Turnaround
              </h3>
              <p className="text-xs text-zinc-650 leading-relaxed font-light">
                Ready to plotting your vector outlines. Direct same-day deliveries across critical South Delhi locations.
              </p>
            </div>

          </div>

          {/* Bottom Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 h-full sm:h-1/2">
            
            {/* Box B1: Rating Summary */}
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-200/80 flex flex-col justify-between">
              <div>
                <div className="text-red-600 font-black text-2xl mb-1 flex items-center gap-1">
                  <span>★</span> 5.0 Rating
                </div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono font-bold">
                  LOCAL CLIENT DIRECTORY
                </div>
              </div>
              <p className="text-[11px] italic text-zinc-650 font-light leading-snug mt-4">
                "Pristine print resolutions. Best shop near Saket area."
              </p>
              <p className="text-[9px] font-bold mt-2 text-zinc-900 font-mono uppercase">
                — AMAN GUPTA / DELHI
              </p>
            </div>

            {/* Box B2: Inline service points */}
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-zinc-200/80 bg-red-50/35">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-red-650 font-mono">
                CORE MEDIA SERVICES
              </h4>
              <ul className="text-[11px] space-y-2 text-zinc-700 font-mono font-bold">
                <li>• Business Cards</li>
                <li>• Star Flex Banners</li>
                <li>• Document Printouts</li>
                <li>• Custom Vinyl Layouts</li>
              </ul>
            </div>

            {/* Box B3: Direct Phone Link panel */}
            <div className="p-6 flex flex-col justify-center items-center text-center bg-zinc-50/50">
              <div className="text-[9px] font-mono tracking-widest font-bold text-zinc-400 mb-1">
                IN-SHOP LINE
              </div>
              <a
                href={`tel:${GENERAL_INFO.phone}`}
                className="text-lg font-mono font-black text-red-600 hover:text-red-750 hover:underline transition-colors block"
              >
                {GENERAL_INFO.phone}
              </a>
              <div className="w-10 h-[1px] bg-zinc-200/80 my-3" />
              <div className="text-[9px] text-zinc-600 leading-snug font-mono">
                F2, Malviya Nagar,
                <br />
                South Delhi – 110017
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Features Static Ribbon (Strip representation) */}
      <div className="bg-white border-t border-zinc-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        <div className="flex items-center px-8 py-5 gap-4 border-b sm:border-b-0 border-r border-zinc-200/80">
          <div className="text-2xl font-black text-zinc-250 font-mono">01</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-850">
            PREMIUM PRINT<br />
            <span className="text-zinc-500 font-normal">QUALITY CONTROL</span>
          </div>
        </div>

        <div className="flex items-center px-8 py-5 gap-4 border-b sm:border-b-0 border-r border-zinc-200/80">
          <div className="text-2xl font-black text-zinc-250 font-mono">02</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-850">
            LATEST MACHINERY<br />
            <span className="text-zinc-500 font-normal">HIGH OUTPUT EPS/CDR</span>
          </div>
        </div>

        <div className="flex items-center px-8 py-5 gap-4 border-r border-zinc-200/80">
          <div className="text-2xl font-black text-zinc-250 font-mono">03</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-850">
            LOCAL DELHI OUTLET<br />
            <span className="text-zinc-500 font-normal">MALVIYA NAGAR STAGE</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-800 to-red-955 flex flex-col justify-center px-8 py-5">
          <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-red-200 opacity-80 mb-1">
            Operating Hours
          </div>
          <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
            MON — SUN | 09:00 — 21:00
          </div>
          <div className="text-[9px] mt-0.5 text-white/80 font-mono">
            {GENERAL_INFO.email}
          </div>
        </div>

      </div>
    </section>
  );
}
