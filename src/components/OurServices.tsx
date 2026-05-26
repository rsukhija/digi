import React, { useState } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Search, 
  MessageSquare, 
  Layers, 
  Clock, 
  Sparkles, 
  Check, 
  Zap, 
  Printer,
  Gift,
  Maximize2,
  FileText,
  Workflow,
  X
} from "lucide-react";
import { GENERAL_INFO } from "../data";

interface ServiceItem {
  name: string;
  badge?: string;
  isPopular?: boolean;
  size?: string;
  material?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorTheme: string;
  items: ServiceItem[];
  desc: string;
  duration: string;
}

export default function OurServices() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<ServiceCategory | null>(null);

  // Strictly maps to the User's requested 5 categories and specific items
  const CATEGORIES: ServiceCategory[] = [
    {
      id: "printing_services",
      title: "1. Printing Services",
      subtitle: "Corporate branding & premium mockups",
      icon: <Printer className="w-5 h-5 text-red-500" />,
      colorTheme: "from-red-650 to-red-800",
      duration: "Same-Day / 24 Hours",
      desc: "Top-tier custom printed publications on calibrated high-GSM executive paperboard.",
      items: [
        { name: "Business Cards", isPopular: true, size: "92x54mm", material: "350 GSM Matte/Gloss" },
        { name: "Flyers", badge: "Rush Hour", size: "A5 Standard", material: "130 GSM Art Paper" },
        { name: "Books / Hardbinding", size: "A4 / Letter", material: "Regal Leatherbound Skin" },
        { name: "Posters / Stamps", size: "Custom A3/A2", material: "Adhesive Vinyl Film" },
        { name: "Banners / Brochures", size: "Bi-Fold / Tri-Fold", material: "170 GSM Premium Glaze" },
        { name: "Billboards / Signage", size: "Large Format", material: "ACP / Backlit Panels" },
        { name: "Certificates", badge: "Pro", size: "A4 Deluxe", material: "300 GSM Textured Card" },
        { name: "Letterheads", size: "A4 Standard", material: "100 GSM Alabaster Bond" }
      ]
    },
    {
      id: "gifting_sublimation",
      title: "2. Gifting & Sublimation",
      subtitle: "Custom heat press & desktop tokens",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      colorTheme: "from-orange-500 to-amber-700",
      duration: "1 - 2 Days",
      desc: "Vibrant high-contrast thermal sublimation transfers embedded securely on gift memorabilia.",
      items: [
        { name: "Mug Printing", isPopular: true, size: "11 Oz Standard", material: "Glossy Ceramic Inner Coated" },
        { name: "T-Shirt Printing", badge: "Popular", size: "A4 Printed chest", material: "100% Cotton / Activewear" },
        { name: "Cushion Printing", size: "12x12 inches", material: "Velvet Satin Touch Sheet" },
        { name: "Mouse Pad Printing", size: "Standard Rectangle", material: "Anti-Slip Rubber Backing" },
        { name: "Personalized Diaries", size: "A5 Bound Planner", material: "Imitation Leather debossed" }
      ]
    },
    {
      id: "indoor_outdoor",
      title: "3. Indoor & Outdoor Work",
      subtitle: "Large format banners & rigid media installations",
      icon: <Maximize2 className="w-5 h-5 text-blue-500" />,
      colorTheme: "from-blue-600 to-indigo-800",
      duration: "Same-Day Dispatch",
      desc: "Heavy-duty waterproof billboards, shop signages, and large-format digital flex banner prints.",
      items: [
        { name: "Flex Printing", isPopular: true, size: "Custom sizing", material: "Heavy High-Gloss Flex" },
        { name: "Vinyl Printing", size: "Plotter sheets", material: "Satin Adhesive Roll" },
        { name: "Backlit Vinyl Banners", badge: "Best Seller", size: "Glow Frame Fitting", material: "Translucent Light-Diffuser" },
        { name: "Vinyl Pasting", size: "Shop window glass", material: "Bubble-free pasting film" },
        { name: "Canvas Prints / Hoardings", size: "Custom Large format", material: "Pristine Artist Canvas" },
        { name: "Poster Printing", size: "Custom high gauge", material: "Glossy 220 GSM Card" }
      ]
    },
    {
      id: "mounting_lamination",
      title: "4. Sunboard Mounting & Lamination",
      subtitle: "Sturdy PVC Foam cores & protective glazes",
      icon: <Layers className="w-5 h-5 text-yellow-500" />,
      colorTheme: "from-yellow-600 to-orange-600",
      duration: "24 - 48 Hours",
      desc: "Heavy duty sunboard mounts paired with protective anti-scratch matte or glossy lamination.",
      items: [
        { name: "Sunboard Mounts", isPopular: true, size: "5mm Thickness", material: "PVC Foam Board Panel" },
        { name: "Roll-Up Standees", badge: "Exhibit Kit", size: "3x6 ft retractable", material: "Non-tearable Synthetic film" },
        { name: "Custom Stickers / Posters", size: "Plotter cut", material: "Semi-gloss Adhesive Glue" },
        { name: "Sticky Wallpaper", size: "Custom walls", material: "Textured Wall adhesive" },
        { name: "One-Way Vision / Frosted", size: "Glass doors", material: "Micro-perforated film" },
        { name: "GSB / ACP Boards", size: "Main Store Sign", material: "Rust-free Metal Framed" },
        { name: "Canopy Tents & Calendars", badge: "Hot Promo", size: "4x4 ft Booth layout", material: "Flexible waterproof PVC" }
      ]
    },
    {
      id: "internet_documents",
      title: "5. Internet & Document Services",
      subtitle: "High speed photocopy & administrative files",
      icon: <FileText className="w-5 h-5 text-purple-500" />,
      colorTheme: "from-purple-600 to-pink-700",
      duration: "Instant In-Store Counter",
      desc: "Fast, precise, high-volume laser documents, spiral bindings, and government passport apply assistances.",
      items: [
        { name: "B/W Xerox / Colour Printout", isPopular: true, size: "A4 / Legal / FS", material: "75 GSM Alabaster sheet" },
        { name: "Scanning & Spiral Binding", size: "Multi-page bundle", material: "Acetate Glass + PVC Coils" },
        { name: "Passport Photo", badge: "5 Mins", size: "3.5 x 4.5 cm", material: "Ultra HD Glossy paper" },
        { name: "Lamination / DTP English", size: "A4 / FS Max size", material: "Rigid 125 Microns heat seal" },
        { name: "CD & DVD Writing", size: "Standard Data Disc", material: "Silver Jewel case write" },
        { name: "Aadhaar Correction / PAN Apply", badge: "Assisted", size: "Govt Registration", material: "Biometric Form submission" },
        { name: "Passport Apply Assistance", size: "Online Appointment", material: "Official Interview dispatch" }
      ]
    }
  ];

  // Search filter
  const filteredCategories = CATEGORIES.map((cat) => {
    const matchedItems = cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matchedItems.length > 0
    ) {
      return {
        ...cat,
        items: matchedItems.length > 0 ? matchedItems : cat.items
      };
    }
    return null;
  }).filter((x): x is ServiceCategory => x !== null);

  const handleWhatsAppQuote = (categoryTitle: string, itemName: string) => {
    const textMsg = encodeURIComponent(
      `Hi DIGIMAX PRINTING! I am looking for a quote on: *${itemName}* within the *${categoryTitle}* column. Please send rate estimation sheets.`
    );
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${textMsg}`, "_blank");
  };



  return (
    <section id="services" className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      {/* Precision grid visual markings */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-800 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-800 pointer-events-none" />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="mx-auto flex items-center space-x-2 px-3.5 py-1 bg-red-950/40 border border-red-500/20 rounded-none w-fit">
            <span className="w-2 h-2 bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-red-500 uppercase font-black">
              LIVE DIGITAL SERVICES SYSTEM
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Services Catalog</span>
          </h2>
          
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Fully updated index of luxury digital printing, high-impact branding structures, sub-surface heat sublimation, and instant office document access.
          </p>
        </div>

        {/* Real-time search engine container */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. 'Stickers', 'Wedding Cards', 'Banner')..."
              className="w-full bg-zinc-900 border border-zinc-800 px-12 py-3.5 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-red-600 font-mono tracking-wide transition-all shadow-md rounded-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono hover:text-red-500 text-zinc-400 font-black"
              >
                CLEAR
              </button>
            )}
          </div>
          <div className="absolute -bottom-6 left-2.5 text-[8.5px] font-mono text-zinc-500 uppercase tracking-widest">
            Showing {filteredCategories.length} divisions matching criteria
          </div>
        </div>

        {/* Categories grid containing BOLD headings and clickable items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                onClick={() => setSelectedServiceCategory(item)}
                className="bg-zinc-900/90 border border-zinc-850 hover:border-red-650 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-sm hover:shadow-[0_0_25px_rgba(220,38,38,0.1)] rounded-none group cursor-pointer"
                title="Click anywhere on this card to open specified product popup"
              >
                {/* Calibration borders */}
                <div className="absolute top-0.5 right-0.5 w-6 h-6 border-t border-r border-dashed border-zinc-800 pointer-events-none group-hover:border-red-500/30" />
                <span className="absolute top-1 left-2.5 text-[7px] font-mono text-zinc-650 font-bold uppercase pointer-events-none">
                  DIV // 0{index + 1}
                </span>

                <div className="space-y-6">
                  {/* Big bold heading with styled custom colored tag */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 flex items-center justify-center bg-zinc-950 text-red-500 border border-zinc-800 rounded-none group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300 shadow-inner">
                        {item.icon}
                      </div>
                      <h3 className="text-sm sm:text-base font-display font-black uppercase tracking-wide text-white group-hover:text-red-500 transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-[10px] text-zinc-400 leading-normal font-mono uppercase tracking-wide min-h-[30px] font-semibold">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* List of services */}
                  <div className="space-y-2 border-t border-zinc-800 pt-4">
                    {item.items.slice(0, 4).map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center justify-between py-1.5 px-2 bg-zinc-950 border border-zinc-850 transition-all rounded-none"
                      >
                        <div className="flex items-center space-x-1.5">
                          <Check className="w-3 h-3 text-red-500 flex-shrink-0" />
                          <span className="text-[11px] font-sans font-medium text-zinc-300 tracking-wide">
                            {sub.name}
                          </span>
                        </div>
                      </div>
                    ))}
                    {item.items.length > 4 && (
                      <div className="text-[9.5px] font-mono text-medium text-red-500 mt-2 text-right group-hover:underline">
                        + {item.items.length - 4} more services included. Click to expand.
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action visual handle */}
                <div className="mt-6 pt-4 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-450 uppercase group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1">
                    <Workflow className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-500 group-hover:animate-spin" />
                    Open Spec Column
                  </span>
                  <span className="text-zinc-650 group-hover:text-red-500">→</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* POPUP MODAL SHOWING ALL SERVICES IN CLICKED CATEGORY */}
      <AnimatePresence>
        {selectedServiceCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceCategory(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-40"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-zinc-900 border-2 border-red-600 w-full max-w-2xl shadow-[0_15px_50px_rgba(220,38,38,0.25)] rounded-none z-50 overflow-hidden relative max-h-[85vh] flex flex-col font-sans text-white"
            >
              {/* Engineering layout labels */}
              <div className="absolute top-1.5 right-3 text-[7px] font-mono text-zinc-550 select-none font-bold text-zinc-500">
                [DM_SERVICE_CAT_MATRIX_v4]
              </div>

              {/* Graphic design Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 space-y-1.5 sticky top-0 z-10 border-b border-red-500/20">
                <button
                  type="button"
                  onClick={() => setSelectedServiceCategory(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer p-1 bg-zinc-950/20 border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  {selectedServiceCategory.icon}
                  <span className="text-[10px] font-mono tracking-widest text-[#ffffff] uppercase font-black bg-red-950/50 px-2 py-0.5 border border-red-500/20">
                    Category specs sheet
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight uppercase leading-tight text-white mt-2">
                  {selectedServiceCategory.title}
                </h3>
                <p className="text-xs text-red-100 font-mono">
                  {selectedServiceCategory.subtitle}
                </p>
              </div>

              {/* Modal scroll area */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-black text-red-500 uppercase tracking-widest border-b border-zinc-800 pb-1 flex items-center justify-between">
                    <span>📐 CLASSIFIED SUB-SERVICES MATRIX</span>
                    <span className="text-zinc-500 text-[9px] font-mono">Malviya Nagar South Delhi Workshop</span>
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {selectedServiceCategory.desc}
                  </p>
                </div>

                {/* Sub-services tables */}
                <div className="space-y-2.5">
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedServiceCategory.items.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="bg-zinc-950 border border-zinc-850 p-3 sm:p-4 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-red-500/45 transition-colors group/row"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                            <span className="text-xs font-bold text-white uppercase group-hover/row:text-red-400 transition-colors">
                              {sub.name}
                            </span>
                            {sub.isPopular && (
                              <span className="px-1.5 py-0.5 bg-red-950 text-red-400 text-[7.5px] font-mono font-black rounded-none border border-red-900 uppercase">
                                POPULAR
                              </span>
                            )}
                            {sub.badge && (
                              <span className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[7px] font-mono text-zinc-405 text-zinc-400 font-bold uppercase rounded-none">
                                {sub.badge}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2 text-[9px] font-mono text-zinc-500">
                            {sub.size && <span>Standard Dim: <strong className="text-zinc-400">{sub.size}</strong></span>}
                            {sub.material && <span>Substrate: <strong className="text-zinc-405 text-zinc-400">{sub.material}</strong></span>}
                          </div>
                        </div>

                        {/* Order & Ask Specs buttons */}
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <button
                            onClick={() => handleWhatsAppQuote(selectedServiceCategory.title, sub.name)}
                            className="px-3 py-1.5 bg-red-950 hover:bg-red-900 border border-red-900/40 text-red-400 hover:text-white rounded-none font-mono text-[9px] font-black uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <MessageSquare className="w-3 h-3 fill-current " />
                            Get Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal footer actions */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-850 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-500" />
                  <span>DUE DURATION: {selectedServiceCategory.duration}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedServiceCategory(null)}
                  className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  ✕ Close Services Panel
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
