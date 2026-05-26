import React, { useState } from "react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";
import { Search, Eye, Layers, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InteractiveGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: "all", label: "Show All" },
    { key: "printing", label: "Printing" },
    { key: "gifting", label: "Gifting & Sublimation" },
    { key: "outdoor", label: "Indoor/Outdoor" },
    { key: "documents", label: "Document Services" }
  ];

  const filteredItems = filter === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0a0606] border-b border-zinc-800/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-650" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              PORTFOLIO SHOWCASE
            </span>
            <span className="h-px w-6 bg-red-650" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Gallery</span>
          </h2>
          <p className="text-xs text-zinc-300 max-w-xl mx-auto leading-relaxed font-light">
            Browse through real sample layouts, high-fidelity printing outputs, and custom corporate packages executed right here in South Delhi.
          </p>
        </div>

        {/* Filter Category Row - Premium Glassmorphism */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto bg-zinc-950/60 p-2 border border-zinc-800/80 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-none border border-zinc-900 flex-1 min-w-[140px] text-center ${
                filter === cat.key
                  ? "bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.25)]"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900 border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer bg-zinc-950 border border-zinc-800 hover:border-red-500/50 rounded-none overflow-hidden aspect-[4/3] shadow-2xl transition-all duration-300 flex flex-col justify-end p-5"
              >
                {/* Background high-contrast print photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                
                {/* Dark Vignette Overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Technical safety anchors (mimicking draft sheet) */}
                <span className="absolute top-3 right-4 text-[9px] font-mono text-zinc-300 tracking-wider bg-zinc-900 px-2 py-0.5 rounded-none border border-zinc-800 shadow-sm z-20">
                  {item.badge || "DIGIMAX QUALITY"}
                </span>

                {/* Content Overlay */}
                <div className="relative z-10 space-y-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-250">
                  <h3 className="font-display font-black text-white text-base sm:text-lg uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Detailed specs pill */}
                  {item.techSpecs && (
                    <div className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-wider bg-red-950/35 border border-red-500/20 px-2 py-1 w-fit">
                      SPECIFICATION: {item.techSpecs}
                    </div>
                  )}

                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-light">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-[10px] text-red-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-1 font-mono">
                    <span>VIEW PLOTTING BLUEPRINT</span>
                    <Eye className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay to view item in detail */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-zinc-950 border border-zinc-800 max-w-2xl w-full rounded-none overflow-hidden shadow-2xl relative text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Large visual header representation */}
                <div
                  className="h-64 sm:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${activeItem.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <button
                    onClick={() => setActiveItem(null)}
                    className="absolute top-4 right-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 w-9 h-9 rounded-none flex items-center justify-center font-bold text-lg cursor-pointer"
                  >
                    ×
                  </button>
                </div>

                {/* Technical Information panel */}
                <div className="p-6 sm:p-8 space-y-4 font-sans">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-red-500 uppercase font-bold">
                      {activeItem.category.replace("_", " ")} Blueprint Spec
                    </span>
                    <h3 className="font-display font-black text-white text-xl uppercase mt-0.5">
                      {activeItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {activeItem.description}
                  </p>

                  <div className="bg-zinc-900 p-4 rounded-none border border-zinc-800 text-[10px] font-mono text-zinc-300 space-y-2 mt-4">
                    <p className="font-bold text-white tracking-wider uppercase border-b border-zinc-800 pb-1.5 flex items-center space-x-1">
                      <Layers className="w-4 h-4 text-red-500" />
                      <span>PRE-PRESS MATERIAL SPECIFICATION RECORD</span>
                    </p>
                    <p><span className="text-red-500 font-bold uppercase">Substrate Stock:</span> {activeItem.techSpecs || "Custom stock tailored under instructions"}</p>
                    <p><span className="text-red-500 font-bold uppercase">Color Profile:</span> Balanced 100% CMYK Vector Safezone Bounds</p>
                    <p><span className="text-red-500 font-bold uppercase">Cutting Bleed:</span> Japanese Plotter Calibrated 2.5mm surrounding bleed margins</p>
                  </div>

                  <div className="flex pt-4">
                    <button
                      onClick={() => setActiveItem(null)}
                      className="w-full py-3.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors cursor-pointer rounded-none"
                    >
                      Dismiss Spec Sheet
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

