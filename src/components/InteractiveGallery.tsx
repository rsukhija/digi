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
    { key: "visiting_cards", label: "Visiting Cards" },
    { key: "flex_banner", label: "Flex Banners" },
    { key: "posters", label: "Posters" },
    { key: "stickers", label: "Stickers & Vinyl" },
    { key: "standee", label: "Standees" },
    { key: "machinery", label: "Machinery & Press" },
    { key: "document", label: "Stationary & Docs" }
  ];

  const filteredItems = filter === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6] border-b border-zinc-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-600 font-bold">
              PORTFOLIO SHOWCASE
            </span>
            <span className="h-px w-6 bg-red-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 leading-none">
            Our Work <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-xs text-zinc-650 max-w-xl mx-auto leading-relaxed font-light">
            Browse through real sample layouts, printing machine outputs, and custom corporate packages executed right here in South Delhi.
          </p>
        </div>

        {/* Filter Category Row - Sharp Blocks */}
        <div className="flex flex-wrap justify-center items-center gap-0 mb-12 max-w-4xl mx-auto border border-zinc-200 bg-white shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-none border-r border-zinc-200 last:border-0 flex-1 min-w-[120px] text-center ${
                filter === cat.key
                  ? "bg-red-600 text-white"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
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
                className="group relative cursor-pointer bg-white border border-zinc-200 rounded-none overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-end p-5"
              >
                {/* Background high-contrast print photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                
                {/* Dark Vignette Overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                {/* Technical safety anchors (mimicking draft sheet) */}
                <span className="absolute top-3 right-4 text-[9px] font-mono text-zinc-650 tracking-wider bg-white/95 px-2 py-0.5 rounded-none border border-zinc-200 shadow-sm z-20">
                  {item.badge || "DIGIMAX QUALITY"}
                </span>

                {/* Content Overlay */}
                <div className="relative z-10 space-y-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-205">
                  <h3 className="font-display font-black text-white text-base sm:text-lg uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Detailed specs pill */}
                  {item.techSpecs && (
                    <div className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
                      SPECIFICATION: {item.techSpecs}
                    </div>
                  )}

                  <p className="text-xs text-zinc-350 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-light">
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
                className="bg-white border border-zinc-205 max-w-2xl w-full rounded-none overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Large visual header representation */}
                <div
                  className="h-64 sm:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${activeItem.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  <button
                    onClick={() => setActiveItem(null)}
                    className="absolute top-4 right-4 bg-white hover:bg-zinc-100 text-zinc-950 border border-zinc-250 w-9 h-9 rounded-none flex items-center justify-center font-bold text-lg cursor-pointer"
                  >
                    ×
                  </button>
                </div>

                {/* Technical Information panel */}
                <div className="p-6 sm:p-8 space-y-4 font-sans">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase font-bold">
                      {activeItem.category.replace("_", " ")} Blueprint Spec
                    </span>
                    <h3 className="font-display font-black text-zinc-950 text-xl uppercase mt-0.5">
                      {activeItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-650 leading-relaxed font-light">
                    {activeItem.description}
                  </p>

                  <div className="bg-[#FAF9F6] p-4 rounded-none border border-zinc-200 text-[10px] font-mono text-zinc-600 space-y-2 mt-4">
                    <p className="font-bold text-zinc-900 tracking-wider uppercase border-b border-zinc-200 pb-1.5 flex items-center space-x-1">
                      <Layers className="w-4 h-4 text-red-600" />
                      <span>PRE-PRESS MATERIAL SPECIFICATION RECORD</span>
                    </p>
                    <p><span className="text-red-600 font-bold uppercase">Substrate Stock:</span> {activeItem.techSpecs || "Custom stock tailored under instructions"}</p>
                    <p><span className="text-red-600 font-bold uppercase">Color Profile:</span> Balanced 100% CMYK Vector Safezone Bounds</p>
                    <p><span className="text-red-600 font-bold uppercase">Cutting Bleed:</span> Japanese Plotter Calibrated 2.5mm surrounding bleed margins</p>
                  </div>

                  <div className="flex pt-4">
                    <button
                      onClick={() => setActiveItem(null)}
                      className="w-full py-3.5 bg-white border border-zinc-250 hover:bg-zinc-50 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer rounded-none"
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
