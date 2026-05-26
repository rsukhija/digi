import React, { useState } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Search, 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  Clock, 
  Sparkles, 
  Check, 
  Zap, 
  ExternalLink,
  Printer,
  BookOpen,
  Image,
  Award,
  BookMarked,
  Layout,
  Gift,
  Heart,
  Maximize2,
  Package,
  FileText,
  Workflow,
  Sparkle
} from "lucide-react";
import { GENERAL_INFO } from "../data";

interface ServiceItem {
  name: string;
  badge?: string;
  isPopular?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorTheme: string; // Tailwind bg/text color combos
  items: ServiceItem[];
}

interface OurServicesProps {
  onSelectProduct?: (serviceName: string) => void;
}

export default function OurServices({ onSelectProduct }: OurServicesProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<{
    categoryTitle: string;
    itemName: string;
    badge?: string;
    isPopular?: boolean;
  } | null>(null);

  // Grouped exactly according to user specifications with professional tagging
  const CATEGORIES: ServiceCategory[] = [
    {
      id: "visiting_cards",
      title: "Visiting Card Printing",
      subtitle: "Bespoke executive corporate business card structures",
      icon: <Award className="w-5 h-5" />,
      colorTheme: "from-amber-600 to-red-600 text-red-650",
      items: [
        { name: "Matte / Glossy Cards", isPopular: true },
        { name: "Spot UV Cards", badge: "Premium" },
        { name: "Premium Texture Cards" },
        { name: "QR Code Business Cards" }
      ]
    },
    {
      id: "flex_banners",
      title: "Flex & Banner Printing",
      subtitle: "Heavy-duty outdoor and commercial display backdrops",
      icon: <Maximize2 className="w-5 h-5" />,
      colorTheme: "from-red-600 to-rose-800 text-red-650",
      items: [
        { name: "Vinyl Flex Printing" },
        { name: "Star Flex Printing", isPopular: true },
        { name: "Outdoor Advertising Banners" },
        { name: "Event Backdrops" },
        { name: "lex Banner", badge: "Budget" } // literal user input "lex Banner"
      ]
    },
    {
      id: "stickers",
      title: "Sticker Printing",
      subtitle: "Custom die-cut adhesive marks & product overlays",
      icon: <Sparkles className="w-5 h-5" />,
      colorTheme: "from-cyan-600 to-sky-700 text-[#06b6d4]",
      items: [
        { name: "Product Labels", badge: "Bulk Sale" },
        { name: "Waterproof Stickers", isPopular: true },
        { name: "Transparent Stickers" },
        { name: "Custom Die-Cut Stickers" },
        { name: "Stickers", badge: "Fast" }
      ]
    },
    {
      id: "brochures",
      title: "Brochure & Flyer Printing",
      subtitle: "Double sided glaze promotional layouts",
      icon: <BookMarked className="w-5 h-5" />,
      colorTheme: "from-[#dc2626] to-[#cf1b1b] text-red-650",
      items: [
        { name: "Promotional Flyers" },
        { name: "Restaurant Menu Cards", isPopular: true },
        { name: "Company Brochures", badge: "Multi-Fold" },
        { name: "Pamphlet Printing" }
      ]
    },
    {
      id: "photo_prints",
      title: "Photo Printing & Frames",
      subtitle: "High definition pigmented canvas and bounding modules",
      icon: <Image className="w-5 h-5" />,
      colorTheme: "from-pink-600 to-rose-700 text-pink-600",
      items: [
        { name: "HD Photo Prints", isPopular: true },
        { name: "Passport Size Photos", badge: "Same-Day" },
        { name: "Canvas Photo Frames" },
        { name: "Photo Albums" }
      ]
    },
    {
      id: "t_shirts",
      title: "T-Shirt Printing",
      subtitle: "High intensity textile vector sublimation",
      icon: <Layers className="w-5 h-5" />,
      colorTheme: "from-red-600 to-amber-700 text-red-650",
      items: [
        { name: "Custom T-Shirts", isPopular: true },
        { name: "Corporate T-Shirts", badge: "Bulk Discount" },
        { name: "Event Printing" },
        { name: "DTF / Sublimation Printing" }
      ]
    },
    {
      id: "mugs_gifts",
      title: "Mug & Gift Printing",
      subtitle: "Personalized ceramic cups & customized desktop memorabilia",
      icon: <Gift className="w-5 h-5" />,
      colorTheme: "from-purple-600 to-indigo-700 text-purple-600",
      items: [
        { name: "Photo Mugs" },
        { name: "Customized Gifts", isPopular: true },
        { name: "Keychains" },
        { name: "Mobile Cover Printing", badge: "Trending" }
      ]
    },
    {
      id: "wedding",
      title: "Wedding Printing Studio",
      subtitle: "Premium textured greetings and welcome modules",
      icon: <Heart className="w-5 h-5" />,
      colorTheme: "from-rose-600 to-red-800 text-rose-700",
      items: [
        { name: "Wedding Cards", isPopular: true },
        { name: "Invitation Cards", badge: "Royal Texture" },
        { name: "Welcome Boards" },
        { name: "Return Gift Tags" }
      ]
    },
    {
      id: "large_format",
      title: "Large Format & Signboard",
      subtitle: "Outdoor backlit glowing frameworks and ACP panels",
      icon: <Maximize2 className="w-5 h-5" />,
      colorTheme: "from-amber-600 to-red-700 text-orange-600",
      items: [
        { name: "Hoardings" },
        { name: "Glow Sign Boards", isPopular: true },
        { name: "ACP Signage", badge: "Heavy Duty" },
        { name: "Roll-Up Standee" },
        { name: "Flex Printing" },
        { name: "Banner Printing" },
        { name: "Posters" },
        { name: "Vinyl Printing" }
      ]
    },
    {
      id: "packaging",
      title: "Packaging Printing",
      subtitle: "Product branding bags, envelopes and barcoding labels",
      icon: <Package className="w-5 h-5" />,
      colorTheme: "from-emerald-600 to-teal-700 text-emerald-600",
      items: [
        { name: "Paper Bags" },
        { name: "Product Boxes", badge: "Rigid Board" },
        { name: "Custom Packaging Labels", isPopular: true },
        { name: "Barcode Labels" }
      ]
    },
    {
      id: "accounting",
      title: "Bill Books & ID Cards",
      subtitle: "NCR carbonless receipts and corporate id credentials",
      icon: <FileText className="w-5 h-5" />,
      colorTheme: "from-blue-600 to-sky-700 text-blue-600",
      items: [
        { name: "Bill Books", isPopular: true },
        { name: "ID Cards", badge: "ISO Size" }
      ]
    },
    {
      id: "doc_services",
      title: "Document Services",
      subtitle: "High speed photocopy, binding and hardcovers",
      icon: <Printer className="w-5 h-5" />,
      colorTheme: "from-zinc-700 to-zinc-900 text-zinc-800",
      items: [
        { name: "Photocopy" },
        { name: "Color Printing", isPopular: true },
        { name: "Scanning" },
        { name: "Lamination", badge: "Water Safe" },
        { name: "Spiral Binding" }
      ]
    },
    {
      id: "creative_design",
      title: "Creative Design Suite",
      subtitle: "Custom vector creation and bespoke graphics",
      icon: <Workflow className="w-5 h-5" />,
      colorTheme: "from-pink-600 to-violet-700 text-violet-600",
      items: [
        { name: "Graphic Designing" },
        { name: "Logo Design", isPopular: true },
        { name: "Social Media Posters", badge: "24hr Turn" },
        { name: "Invitation Cards" },
        { name: "Poster Designs" }
      ]
    },
    {
      id: "gallery_section",
      title: "Samples Gallery Highlights",
      subtitle: "Take a look at actual raw stock sample products in South Delhi",
      icon: <BookOpen className="w-5 h-5" />,
      colorTheme: "from-slate-600 to-zinc-800 text-slate-700",
      items: [
        { name: "Visiting Card Samples" },
        { name: "Banner Samples" },
        { name: "T-Shirt Printing Samples" },
        { name: "Wedding Card Designs" },
        { name: "Sticker Samples" },
        { name: "Printing Machines", badge: "Heavy Plotter" },
        { name: "Customer Orders" },
        { name: "Shop Interior" }
      ]
    },
    {
      id: "seo_ideas",
      title: "Frequently Searched Ideas",
      subtitle: "Explore high performance digital plotting requests",
      icon: <Sparkle className="w-5 h-5" />,
      colorTheme: "from-amber-600 to-red-600 text-red-600",
      items: [
        { name: "Digital Printing Near Me" },
        { name: "Flex Printing Services" },
        { name: "Visiting Card Printing" },
        { name: "Sticker Printing Shop" },
        { name: "Custom T-Shirt Printing" },
        { name: "Wedding Card Printing" },
        { name: "Banner Printing Delhi" },
        { name: "Digital Print Shop", badge: "Recommended" }
      ]
    }
  ];

  const handleCopySpec = (categoryName: string, itemName: string) => {
    const formattedText = `DIGIMAX PRINTING Service: ${categoryName} -> ${itemName}`;
    navigator.clipboard.writeText(formattedText);
    setCopiedItem(itemName);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const handleWhatsAppQuote = (categoryTitle: string, itemName: string) => {
    const customMessage = encodeURIComponent(
      `Hello DIGIMAX Printing! I am interested in your services under "${categoryTitle}". Could you please provide quotation rates for: "${itemName}"? Thank you!`
    );
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${customMessage}`, "_blank");
  };

  const handleSelectToPlanner = (categoryTitle: string, itemName: string) => {
    if (onSelectProduct) {
      onSelectProduct(`${categoryTitle} - ${itemName}`);
      
      // Auto-scroll to AI Planner section
      const plannerSection = document.getElementById("ai-planner");
      if (plannerSection) {
        plannerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Filters categories & sub-items based on real-time typing query
  const filteredCategories = CATEGORIES.map(category => {
    // If the category title matches, include all items
    const catMatches = category.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       category.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Otherwise filter sub-items
    const matchedItems = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (catMatches) {
      return category;
    } else if (matchedItems.length > 0) {
      return { ...category, items: matchedItems };
    }
    return null;
  }).filter((x): x is ServiceCategory => x !== null);

  return (
    <section id="services" className="py-24 bg-white border-b border-zinc-200/80 relative overflow-hidden">
      {/* Visual drafting borders to keep true geometric print aesthetic */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-200/80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-200/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-200/80 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-200/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="mx-auto flex items-center space-x-2 px-3.5 py-1 bg-red-50 border border-red-200 rounded-none w-fit">
            <span className="w-2 h-2 bg-red-600 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-red-650 uppercase font-bold">
              AUTHORIZED OUTLET PORTFOLIO
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-[#0a0505]">
            Our <span className="text-red-600">Services Catalog</span>
          </h2>
          
          <p className="text-xs text-zinc-650 max-w-xl mx-auto leading-relaxed font-light">
            Browse our complete array of digital, flex, star-lit banner, and customized corporate gift media options. Filter requests in real time to secure custom order blueprints instantly.
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
              className="w-full bg-[#FAF9F6] border border-zinc-250 px-12 py-3.5 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-red-600 font-sans tracking-wide transition-all shadow-sm rounded-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono hover:text-red-650 text-zinc-500 font-black"
              >
                CLEAR
              </button>
            )}
          </div>
          <div className="absolute -bottom-6 left-2.5 text-[8.5px] font-mono text-zinc-450 uppercase tracking-widest">
            Showing {filteredCategories.length} divisions matching criteria
          </div>
        </div>

        {/* Categories grid containing BOLD headings and small detailed items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="bg-white border border-zinc-250 hover:border-red-600/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-350 relative shadow-sm hover:shadow-md rounded-none group"
              >
                
                {/* Style accents representing printing calibration bounds */}
                <div className="absolute top-0.5 right-0.5 w-6 h-6 border-t border-r border-dashed border-red-600/10 pointer-events-none" />
                <span className="absolute top-1 left-2.5 text-[7px] font-mono text-zinc-300 font-bold uppercase pointer-events-none">
                  SEC // {item.id.toUpperCase()}
                </span>

                <div className="space-y-6">
                  {/* Big bold heading with styled custom colored tag */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-600 border border-red-100 rounded-none group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-black uppercase tracking-wide text-zinc-950 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-[10px] text-zinc-500 leading-normal font-mono uppercase tracking-wide min-h-[30px]">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* List of services in smaller sizes to respect physical outline */}
                  <div className="space-y-2 border-t border-zinc-100 pt-4">
                    {item.items.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        onClick={() => setSelectedService({ categoryTitle: item.title, itemName: sub.name, badge: sub.badge, isPopular: sub.isPopular })}
                        className="flex items-center justify-between py-2 px-2.5 bg-[#FAF9F6] border border-zinc-200/50 hover:border-red-650 hover:bg-red-50/20 transition-all rounded-none cursor-pointer group/item"
                        title={`Click to view instant rates and full specification for ${sub.name}`}
                      >
                        <div className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-red-650 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-[11.5px] font-sans font-semibold text-zinc-800 tracking-wide group-hover/item:text-red-700 transition-colors">
                            {sub.name}
                          </span>
                          {sub.isPopular && (
                            <span className="px-1.5 py-0.5 bg-red-50 text-[7.5px] font-mono text-red-600 font-bold border border-red-200 uppercase rounded-none tracking-wider scale-95 origin-left">
                              POPULAR
                            </span>
                          )}
                          {sub.badge && (
                            <span className="px-1.5 py-0.5 bg-zinc-900 text-[7px] font-mono text-white font-bold uppercase rounded-none tracking-wider scale-95 origin-left">
                              {sub.badge}
                            </span>
                          )}
                        </div>

                        {/* Dropdown Quick tools */}
                        <div className="flex items-center space-x-1.5 opacity-80 hover:opacity-100">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopySpec(item.title, sub.name);
                            }}
                            title="Copy specifications to system"
                            className="p-1 hover:bg-zinc-200 bg-white border border-zinc-200 text-zinc-600 transition-colors rounded-none cursor-pointer text-[8px] font-mono uppercase"
                          >
                            {copiedItem === sub.name ? "Copied" : "Copy"}
                          </button>
                          
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectToPlanner(item.title, sub.name);
                            }}
                            title="Feed directly into AI Media Planner"
                            className="p-1.5 bg-white border border-zinc-200 text-red-650 hover:border-red-600 transition-all rounded-none cursor-pointer flex items-center justify-center"
                          >
                            <Zap className="w-2.5 h-2.5 text-red-600 focus:animate-spin" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppQuote(item.title, sub.name);
                            }}
                            title="Chat rates for this item direct"
                            className="p-1.5 bg-white border border-zinc-200 text-green-600 hover:border-green-650 hover:bg-green-50 transition-all rounded-none cursor-pointer flex items-center justify-center"
                          >
                            <MessageSquare className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom structural controls */}
                <div className="pt-6 mt-6 border-t border-zinc-120 border-zinc-100 flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-[#050505]">
                  <button
                    type="button"
                    onClick={() => {
                      // Grab first item as default for quick quotes
                      const firstItem = item.items[0]?.name || item.title;
                      handleWhatsAppQuote(item.title, firstItem);
                    }}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-all cursor-pointer group-hover:underline"
                  >
                    <span>GET INSTANT RATES</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <span className="text-[8px] text-zinc-400">
                    DIGIMAX PLOT
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Promotional Outliner */}
        <div className="mt-16 bg-[#FAF9F6] border border-dashed border-zinc-300 p-8 sm:p-12 text-center relative rounded-none max-w-3xl mx-auto shadow-sm">
          <div className="absolute top-1 left-2 text-[6px] font-mono text-zinc-350 tracking-widest uppercase">
            ESTIMATE // CALCULATION ENGINE
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1.5 max-w-md">
              <h4 className="text-sm font-display font-black uppercase text-zinc-950 tracking-wider">
                💡 Need customized rates or custom specifications?
              </h4>
              <p className="text-[11.5px] font-sans text-zinc-600 font-light leading-relaxed">
                Feed any specific product selection right into our AI Plotting Spec Assembler below to outline raw sizing, bleed lines, material weight constraints, and estimated delivery frames!
              </p>
            </div>
            <button
              onClick={() => {
                const plannerSection = document.getElementById("ai-planner");
                if (plannerSection) {
                  plannerSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="py-3 px-6 bg-zinc-950 text-white hover:bg-red-600 transition-all font-mono font-bold text-[10px] uppercase tracking-widest flex items-center space-x-2 rounded-none cursor-pointer flex-shrink-0"
            >
              <span>GO TO SPEC ASSEMBLY</span>
              <Zap className="w-3.5 h-3.5 fill-white text-[#FAF9F6]" />
            </button>
          </div>
        </div>

      </div>

      {/* Animated Custom Service Specifications Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-zinc-950/75 backdrop-blur-sm"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-white border-2 border-red-650 w-full max-w-lg shadow-[0_10px_50px_rgba(185,28,28,0.2)] rounded-none z-10 overflow-hidden relative"
            >
              {/* Calibration crosshairs aesthetics */}
              <div className="absolute top-1.5 right-2 text-[7px] font-mono text-zinc-400 select-none font-bold">
                [CMYK CAL_SPEC ENGINE]
              </div>
              
              {/* Visual Header */}
              <div className="bg-gradient-to-r from-red-650 to-red-800 text-white p-6 sm:p-8 space-y-1.5">
                <span className="text-[9px] font-mono font-black tracking-widest text-[#ffffff] uppercase bg-red-900/40 px-2 py-0.5 border border-red-500/30 inline-block">
                  {selectedService.categoryTitle} System Proof
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight uppercase leading-tight text-white">
                  {selectedService.itemName}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-green-300 font-bold uppercase">
                    CALIBRATED & SECURE
                  </span>
                </div>
              </div>

              {/* Main Block of Specifications (below title) */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-[11px] font-mono font-black text-red-650 uppercase tracking-widest border-b border-zinc-150 pb-1 flex items-center justify-between">
                    <span>📐 Print Specification Block</span>
                    <span className="text-zinc-450 font-light text-[9px] font-sans">South Delhi Hub Rates</span>
                  </h4>

                  {/* Specifications key-value matrix */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#FAF9F6] border border-zinc-200 p-2.5">
                      <span className="text-[8px] font-mono uppercase text-zinc-450 font-black block">Standard Sizing</span>
                      <p className="text-xs font-sans font-extrabold text-zinc-800 mt-0.5">
                        {selectedService.itemName.toLowerCase().includes("visiting") || selectedService.categoryTitle.toLowerCase().includes("visiting")
                          ? "3.5\" x 2.0\" (88mm x 53mm)"
                          : selectedService.itemName.toLowerCase().includes("banner") || selectedService.categoryTitle.toLowerCase().includes("flex")
                          ? "6ft x 3ft standard / customizable"
                          : selectedService.itemName.toLowerCase().includes("sticker") || selectedService.categoryTitle.toLowerCase().includes("sticker")
                          ? "2\" x 2\" or Plotter sheets"
                          : selectedService.itemName.toLowerCase().includes("photo") || selectedService.categoryTitle.toLowerCase().includes("photo")
                          ? "HD Gloss A4 / album standard"
                          : "Custom vector sizes"}
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6] border border-zinc-200 p-2.5">
                      <span className="text-[8px] font-mono uppercase text-zinc-450 font-black block">Raw Media Weight</span>
                      <p className="text-xs font-sans font-extrabold text-zinc-800 mt-0.5 col-span-1">
                        {selectedService.itemName.toLowerCase().includes("matte")
                          ? "350 GSM Hard Art Cardboard"
                          : selectedService.itemName.toLowerCase().includes("spot")
                          ? "Premium Gloss Raised Spot Finish"
                          : selectedService.itemName.toLowerCase().includes("vinyl")
                          ? "Waterproof Glossy Vinyl base"
                          : selectedService.itemName.toLowerCase().includes("cotton") || selectedService.categoryTitle.toLowerCase().includes("t-shirt")
                          ? "225 GSM Ultra-Soft Cotton"
                          : "Heavy GSM Industrial Plot stock"}
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6] border border-zinc-200 p-2.5">
                      <span className="text-[8px] font-mono uppercase text-zinc-450 font-black block">Wholesale Pricing Est</span>
                      <p className="text-xs font-sans font-black text-red-650 mt-0.5">
                        {selectedService.itemName.toLowerCase().includes("visiting") || selectedService.categoryTitle.toLowerCase().includes("visiting")
                          ? "₹0.60 per card (Bulk limits)"
                          : selectedService.itemName.toLowerCase().includes("vinyl") || selectedService.categoryTitle.toLowerCase().includes("flex")
                          ? "₹12 / sq.ft (Lowest Hub rate)"
                          : "Direct wholesale quote"}
                      </p>
                    </div>

                    <div className="bg-[#FAF9F6] border border-zinc-200 p-2.5">
                      <span className="text-[8px] font-mono uppercase text-zinc-450 font-black block">Fastest Turnaround</span>
                      <p className="text-xs font-sans font-extrabold text-zinc-800 mt-0.5">
                        {selectedService.itemName.toLowerCase().includes("banner") || selectedService.categoryTitle.toLowerCase().includes("flex")
                          ? "Urgent 2 Hour Plotting"
                          : "Same-Day Delivery Delhi-NCR"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulated proof rendering frame */}
                <div className="bg-zinc-50 border border-dashed border-red-200 p-4 relative overflow-hidden flex flex-col justify-between">
                  <span className="absolute top-1 right-2 text-[7px] font-mono text-red-600/35 uppercase font-bold">
                    [Proof Alignment Box]
                  </span>
                  <div className="py-2 flex flex-col items-center justify-center space-y-1.5">
                    <div className="w-10 h-10 rounded-full border-4 border-red-500/20 flex items-center justify-center border-t-red-650 animate-spin">
                      <div className="w-4 h-4 rounded-full bg-red-650/15" />
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 font-extrabold animate-pulse">
                      Specs Set: {selectedService.itemName}
                    </p>
                    <p className="text-[9.5px] font-sans text-zinc-500 max-w-xs text-center leading-normal font-light">
                      Bleeds mapped at 3mm width safety offsets. Handled on high-precision Plotters.
                    </p>
                  </div>
                </div>

                {/* Active buttons */}
                <div className="space-y-2 pt-1 border-t border-zinc-150">
                  <button
                    onClick={() => {
                      handleWhatsAppQuote(selectedService.categoryTitle, selectedService.itemName);
                    }}
                    className="w-full py-2.5 bg-gradient-to-r from-red-650 to-red-800 text-white font-mono font-bold text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2.5 hover:brightness-105 transition-all cursor-pointer rounded-none"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-red-700" />
                    <span>Order Customized Print on WhatsApp</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleSelectToPlanner(selectedService.categoryTitle, selectedService.itemName);
                        setSelectedService(null);
                      }}
                      className="py-2 border border-red-650 hover:bg-red-50 text-red-650 font-mono font-bold text-[9px] uppercase tracking-wider flex items-center justify-center space-x-1 transition-all cursor-pointer rounded-none bg-white"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Assemble with AI</span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedService(null);
                      }}
                      className="py-2 bg-zinc-950 text-[#ffffff] hover:bg-zinc-800 transition-all font-mono font-bold text-[9px] uppercase tracking-widest cursor-pointer rounded-none"
                    >
                      ✕ Close Spec Sheet
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
