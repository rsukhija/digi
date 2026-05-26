import React from "react";
import { REVIEWS_DATA } from "../data";
import { Quote, Star } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-655 bg-red-650" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              LOCAL TESTIMONIALS
            </span>
            <span className="h-px w-6 bg-red-655 bg-red-650" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Clients Say</span>
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Read positive feedback from local shopkeepers, students, and tech professionals in Malviya Nagar who trust us with critical visual orders.
          </p>
        </div>

        {/* Reviews Grid Cards - Pure Geometry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-none bg-zinc-900 border border-zinc-850 hover:border-red-600/40 shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.05)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Giant background quote icon */}
              <Quote className="absolute -top-3 -right-3 w-16 h-16 text-zinc-850 pointer-events-none group-hover:text-red-500/10 transition-colors duration-300" />

              <div className="space-y-4 relative z-10">
                {/* Star rating row */}
                <div className="flex items-center space-x-1 text-red-500">
                  {Array.from({ length: rev.stars }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  ))}
                </div>

                {/* Review main quotation */}
                <p className="text-zinc-300 text-xs leading-relaxed italic font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="pt-6 mt-6 border-t border-zinc-850 flex items-center space-x-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-none bg-zinc-950 border border-zinc-800 text-red-500 font-bold text-sm select-none shadow-inner">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wide">
                    {rev.name}
                  </h4>
                  {rev.role && (
                    <p className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase mt-0.5">
                      {rev.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
