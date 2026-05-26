import React from "react";
import { GENERAL_INFO } from "../data";
import { Sparkles, Printer, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export default function AboutUs() {
  const STATS = [
    { label: "DELIVERED ORDERS", value: "15,000+", icon: <Printer className="w-3.5 h-3.5 text-red-500" /> },
    { label: "PLOT DPI VALUE", value: "2400 DPI", icon: <Award className="w-3.5 h-3.5 text-red-500" /> },
    { label: "TURNAROUND SPEED", value: "Same-Day", icon: <Sparkles className="w-3.5 h-3.5 text-red-500" /> },
    { label: "ACTIVE CLIENTS", value: "2,500+", icon: <HeartHandshake className="w-3.5 h-3.5 text-red-500" /> }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] border-b border-zinc-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Geometric Grid representation */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1 */}
            <div className="p-6 rounded-none bg-white border border-zinc-200 flex flex-col space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-red-50 border border-red-200 w-fit rounded-none">
                <Printer className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="font-display font-bold text-zinc-950 text-sm uppercase tracking-wide">Modern Press Tech</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Utilizing state-of-the-art Japanese plotters and laser cutters for flawless dimensions.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-none bg-white border border-zinc-200 flex flex-col space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-red-50 border border-red-200 w-fit rounded-none">
                <ShieldCheck className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="font-display font-bold text-zinc-950 text-sm uppercase tracking-wide">Quality Shield</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Every sheet is certified for deep colors, paper thickness, and laminated borders.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-none bg-white border border-zinc-200 flex flex-col space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-red-50 border border-red-200 w-fit rounded-none">
                <Sparkles className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="font-display font-bold text-zinc-950 text-sm uppercase tracking-wide">Creative Minds</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                In-house graphic vector visualizers to correct layouts, bleed margins, and alignments.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-none bg-white border border-zinc-200 flex flex-col space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-red-50 border border-red-200 w-fit rounded-none">
                <HeartHandshake className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="font-display font-bold text-zinc-950 text-sm uppercase tracking-wide">Local trust</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                A dependable digital printing partner for businesses across Malviya Nagar & South Delhi.
              </p>
            </div>

          </div>

          {/* Right Block - Description & Vision */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Header tags */}
            <div className="flex items-center space-x-2">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-600 font-bold">
                WHO WE ARE
              </span>
            </div>

            {/* Title Statement */}
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-zinc-950 tracking-tight leading-tight">
              Welcome to <span className="text-red-600">DIGIMAX PRINTING</span>
            </h2>

            {/* Introductory text */}
            <div className="space-y-4 text-zinc-650 leading-relaxed text-xs sm:text-sm font-light">
              <p>
                <strong className="text-zinc-900 font-bold">DIGIMAX PRINTING</strong> is Delhi’s leading digital plotting agency. We translate digital artboards into flawless physical prints with color-accurate CMYK calibration.
              </p>
              <p>
                From executive visiting cards to large scale backlit media boards, we utilize heavy-duty Japanese presses to deliver premium results on schedule.
              </p>
            </div>

            {/* Corporate Location Focus */}
            <div className="p-4 bg-white border border-zinc-200 rounded-none flex items-center space-x-4 max-w-lg shadow-sm">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-none bg-red-50 border border-red-200 font-mono text-sm">
                📍
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">South Delhi Service Unit</p>
                <p className="text-[11px] text-zinc-650 mt-1 leading-normal font-light">Conveniently located at F2, Malviya Nagar, near Saket Area, South Delhi – 110017.</p>
              </div>
            </div>

            {/* Quick stats board */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-200">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col border-l border-zinc-250 pl-4 py-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-display text-xl sm:text-2xl font-black text-zinc-900 tracking-tighter font-mono">{stat.value}</span>
                  </div>
                  <span className="text-[10px] text-zinc-450 font-mono tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
