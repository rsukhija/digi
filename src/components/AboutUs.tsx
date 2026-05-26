import React from "react";
import { GENERAL_INFO } from "../data";
import { Sparkles, Printer, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export default function AboutUs() {
  const STATS = [
    { label: "DELIVERED ORDERS", value: "15,000+", icon: <Printer className="w-3.5 h-3.5 text-red-500" /> },
    { label: "PLOT DPI VALUE", value: "2400 DPI", icon: <Award className="w-3.5 h-3.5 text-blue-500" /> },
    { label: "TURNAROUND SPEED", value: "Same-Day", icon: <Sparkles className="w-3.5 h-3.5 text-orange-500" /> },
    { label: "ACTIVE CLIENTS", value: "2,500+", icon: <HeartHandshake className="w-3.5 h-3.5 text-red-500" /> }
  ];

  return (
    <section id="about" className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[250px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Geometric Grid representation with glassmorphism */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1 */}
            <div className="p-6 rounded-none bg-zinc-900/80 border border-zinc-850 hover:border-red-600/40 flex flex-col space-y-3 shadow-xl transition-all duration-300 group">
              <div className="p-2 bg-zinc-950 border border-zinc-850 w-fit rounded-none group-hover:bg-red-950/40 group-hover:border-red-600/30 transition-colors">
                <Printer className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-display font-black text-white text-xs uppercase tracking-wider">Modern Press Tech</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Utilizing state-of-the-art Japanese plotters and laser cutters for flawless dimensions.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-none bg-zinc-900/80 border border-zinc-850 hover:border-blue-600/40 flex flex-col space-y-3 shadow-xl transition-all duration-300 group">
              <div className="p-2 bg-zinc-950 border border-zinc-850 w-fit rounded-none group-hover:bg-blue-950/40 group-hover:border-blue-600/30 transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="font-display font-black text-white text-xs uppercase tracking-wider">Quality Shield</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Every sheet is certified for deep colors, paper thickness, and laminated borders.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-none bg-zinc-900/80 border border-zinc-850 hover:border-orange-600/40 flex flex-col space-y-3 shadow-xl transition-all duration-300 group">
              <div className="p-2 bg-zinc-950 border border-zinc-850 w-fit rounded-none group-hover:bg-orange-950/40 group-hover:border-orange-600/30 transition-colors">
                <Sparkles className="w-4 h-4 text-orange-400" />
              </div>
              <h3 className="font-display font-black text-white text-xs uppercase tracking-wider">Creative Minds</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                In-house graphic vector visualizers to correct layouts, bleed margins, and alignments.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-none bg-zinc-900/80 border border-zinc-850 hover:border-red-650/40 flex flex-col space-y-3 shadow-xl transition-all duration-300 group">
              <div className="p-2 bg-zinc-950 border border-zinc-850 w-fit rounded-none group-hover:bg-red-950/40 group-hover:border-red-500/30 transition-colors">
                <HeartHandshake className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-display font-black text-white text-xs uppercase tracking-wider">Local trust</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                A dependable digital printing partner for businesses across Malviya Nagar & South Delhi.
              </p>
            </div>

          </div>

          {/* Right Block - Description & Vision */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Header tags */}
            <div className="flex items-center space-x-2">
              <span className="h-px w-8 bg-red-650" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
                WHO WE ARE
              </span>
            </div>

            {/* Title Statement */}
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-none">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">DIGIMAX PRINTING</span>
            </h2>

            {/* Introductory text */}
            <div className="space-y-4 text-zinc-300 leading-relaxed text-xs sm:text-sm font-light">
              <p>
                <strong className="text-white font-bold">DIGIMAX PRINTING</strong> is Delhi’s leading digital plotting agency. We translate digital artboards into flawless physical prints with color-accurate CMYK calibration.
              </p>
              <p>
                From executive visiting cards to large scale backlit media boards, we utilize heavy-duty Japanese presses to deliver premium results on schedule.
              </p>
            </div>

            {/* Corporate Location Focus with rich dark styling */}
            <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-none flex items-center space-x-4 max-w-lg shadow-md">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-none bg-zinc-950 border border-zinc-800 font-mono text-sm shadow-inner">
                📍
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">South Delhi Service Unit</p>
                <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-light">Conveniently located at F2, Malviya Nagar, near Saket Area, South Delhi – 110017.</p>
              </div>
            </div>

            {/* Quick stats board */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-850">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col border-l border-zinc-800 pl-4 py-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-display text-xl sm:text-2xl font-black text-white tracking-tighter font-mono">{stat.value}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
