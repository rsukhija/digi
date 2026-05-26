import React, { useState } from "react";
import { Sparkles, ArrowRight, MessageSquare, Layers, Clock, Zap, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GENERAL_INFO } from "../data";

export interface ProjectCategory {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  size: string;
  materials: string[];
  turnaround: string;
  desc: string;
  uses: string;
}

const PRODUCTS_LIST: ProjectCategory[] = [
  {
    id: "business_card",
    name: "Business Card",
    subtitle: "Premium Professional Impressions",
    imageUrl: "https://images.unsplash.com/photo-1589149021833-28929e578f7e?auto=format&fit=crop&w=800&q=80",
    size: "92mm x 54mm (with bleeds)",
    materials: ["350 GSM Art Card", "Velvet Touch Matte lamination", "Spot UV Glazes", "Spot Red Accent Foiling"],
    turnaround: "Same-Day Delivery Available",
    desc: "Crafted on rigid executive paperboard. Elevate business encounters with bespoke tactile texture coatings, metallic corner foiling, or rounded contours.",
    uses: "Networking events, client relations, executive identification"
  },
  {
    id: "id_card",
    name: "ID Card",
    subtitle: "Rigid Office & Event Identification",
    imageUrl: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80",
    size: "86mm x 54mm (Standard ISO)",
    materials: ["Hard PVC Polymer", "Durable Gloss Protection Overlay", "Barcode/QR Placement", "Satin 12mm Neck Lanyard"],
    turnaround: "Next-Day Shipping",
    desc: "Rigid high-grade thermal plastic sheets. Fully customized identity cards highlighting enterprise colors, security barcoding, and heavy metal alloy clips.",
    uses: "Office staff, corporate gatherings, university cohorts"
  },
  {
    id: "tshirt_logo",
    name: "T-Shirt Logo",
    subtitle: "Custom Fabric & Logo Embellishments",
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    size: "A4 Max printable chest safe zone",
    materials: ["Standard screen plotting transfer", "Pristine DTF Vector inks", "Double seam lock prints"],
    turnaround: "2 - 3 Working Days",
    desc: "High density color matching pigments. Instantly imprint corporate branding marks or creative illustrative outlines directly on premium heavy cotton apparel.",
    uses: "Company uniforms, tech events, local sports clubs"
  },
  {
    id: "browser_bill",
    name: "Bill Book",
    subtitle: "Professional Books & NCR Invoicing",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    size: "A4 or A5 Custom Ledger forms",
    materials: ["Duplicate NCR (Carbonless White/Pink)", "Triplicate (White/Yellow/Pink)", "Red Sequential serial alignments"],
    turnaround: "Same-Day / Next-Day Setup",
    desc: "Smooth continuous bills with easy tear perforation sheets. Tailored accounting receipts, carbonless memo pads, and restaurant invoice journals.",
    uses: "Local South Delhi showrooms, tax documentation, agencies"
  },
  {
    id: "book",
    name: "Book Print",
    subtitle: "Executive Hardbinding & Report Cover binding",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    size: "Standard A4, A5, or Letter specs",
    materials: ["Leatherbound outer skin", "Golden thermal outline embossing", "Acetate glass transparent overlay"],
    turnaround: "Immediate Custom Processing",
    desc: "Flawless document presentation books. Protect thesis portfolios, annual financial reports, or digital training manuals with sturdy, bound hardcases.",
    uses: "Student thesis defense, corporate archives, local shop accounting"
  },
  {
    id: "flyer",
    name: "Flyer",
    subtitle: "Wide Range High Definition Flyers",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    size: "Standard A5 single glossy leaflet",
    materials: ["130 GSM Premium Glaze Paper", "170 GSM Semi-Matte Photo stock", "Rich CMYK full ink coverage"],
    turnaround: "Same-Day Rush Orders",
    desc: "Mass distribution leaflets. Promote upcoming campaigns, culinary menus, or new fitness centers with premium double-sided photo-quality flyers.",
    uses: "Doorway marketing, street handovers, promotional bags"
  },
  {
    id: "pamphlet",
    name: "Pamphlet",
    subtitle: "Bi-Fold & Tri-Fold Marketing Guides",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    size: "A4 sheet folded into bi-fold / tri-fold",
    materials: ["130 GSM Standard Glaze Paper", "Double creases layout line", "Smooth matte finishing matrix"],
    turnaround: "24 Hours Delivery Option",
    desc: "Extensive product presentations folding out clearly. Tell your company store details structured beautifully inside multi-fold gloss pamhplets.",
    uses: "Showrooms distributions, corporate handovers, trade fairs"
  },
  {
    id: "poster_print",
    name: "Poster Print",
    subtitle: "Crisp Wall Posters & Architectural Layouts",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    size: "A3, A2, A1, A0 & custom plotting",
    materials: ["220 GSM Photo Gloss", "Satin Matte Non-Reflective card", "Archival pigments up to 2400 DPI"],
    turnaround: "Same-Day Super-Fast Setup",
    desc: "Breathtaking visual reproductions. Imprint creative photography, blueprint specs, or educational charts with heavy ink saturation values.",
    uses: "Educational rooms, event halls, custom home decor frames"
  },
  {
    id: "backlit_vinyl",
    name: "Backlit Vinyl",
    subtitle: "Sleek Translucent Light-Diffused Banners",
    imageUrl: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=800&q=80",
    size: "Custom rolls up to 10 feet widths",
    materials: ["Premium Translucent Vinyl", "Thermal weatherproofing coats", "Heavy-saturated printing modes"],
    turnaround: "Same-Day / Next-Day Delivery",
    desc: "Designed specifically for light-box fittings. Diffuses glow uniformly without producing pixel grids, dark spots, or color bleeds.",
    uses: "Outdoor glow signs, restaurant menu boxes, night hoardings"
  },
  {
    id: "diary",
    name: "Personal Diary",
    subtitle: "Luxury leatherbound organizers & planners",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    size: "A5 Compact Executive spec",
    materials: ["Imitation PU leather wrap", "Branded satin bookmark ribbons", "80 GSM Alabaster internal sheets"],
    turnaround: "2 - 3 Days setup",
    desc: "Luxury business corporate diaries. Embellish heavy faux leather covers with debossed corporate emblems. Ideal premium gifts for loyal stakeholders.",
    uses: "New Year rewards, partner gifting, administrative notes"
  },
  {
    id: "pen",
    name: "Custom Pen",
    subtitle: "Engraved Brand Statement pens",
    imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    size: "Standard 140mm metallic pen cylinder",
    materials: ["Soft-grip anodized aluminium", "Vibrant polymer body casing", "Custom laser beam branding"],
    turnaround: "Next-Day Ready",
    desc: "Premium branded writing tools. Have your corporate name beautifully laser debossed cleanly across sleek metal caps. Standard permanent black ink.",
    uses: "Promotional giveaways, registration tables, executive desks"
  },
  {
    id: "calendar",
    name: "Calendar",
    subtitle: "Corporate Table Flip & Single Wall Boards",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    size: "8x6 inches Table Flip / A3 Wall Poster",
    materials: ["250 GSM Rigid Ivory card panels", "Rust-free heavy loop spiral binders", "Solid backing desk stands"],
    turnaround: "2 - 3 Days bulk",
    desc: "Twelve months of gorgeous brand visibility. Feature seasonal design themes or visual illustrations on high density ivory cardboard panels.",
    uses: "Annual corporate loyalty bundles, desk decoration"
  },
  {
    id: "sunboard",
    name: "Sunboard",
    subtitle: "Rigid mounted display boards",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    size: "Custom widths up to 4x8 feet boards",
    materials: ["5mm High-density sturdy PVC Foam core", "Anti-Scratch Matte Lamination vinyl wrap"],
    turnaround: "Same-Day Plotting Delivery",
    desc: "High precision mounted boards for exhibitions and internal signage. Lightweight but solid backing prevents panels from wrapping or tearing under elements.",
    uses: "Exhibition stalls, store wall banners, launch backdrops"
  },
  {
    id: "standee",
    name: "Standee",
    subtitle: "Retractable Aluminum Floor Banners",
    imageUrl: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=800&q=80",
    size: "3ft x 6ft standard vertical cutout",
    materials: ["Synthetic water-repellent flex sheets", "Strong retractable internal spring spool"],
    turnaround: "Same-Day Plotting Delivery",
    desc: "Folds in seconds. Professional rollup promotional standees using ultra-smooth banner film sheets preventing creases or pixel structures.",
    uses: "Store lobby updates, wedding venues, conference booths"
  },
  {
    id: "name_badge",
    name: "Name Badge",
    subtitle: "Custom Acrylic & Metal Name Badges",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    size: "70mm x 25mm chest pin layout",
    materials: ["Laser-cut gold or silver acrylic panels", "Sturdy back pin or multi-pole magnets"],
    turnaround: "Next-Day Ready",
    desc: "Elegant professional identifications. Brushed metallic textures showing deep contrasted lettering highlights safely fastened.",
    uses: "Retail sales staff, bank employees, catering networks"
  }
];

interface ProductColumnsShowcaseProps {
  onSelectProduct: (productName: string) => void;
}

export default function ProductColumnsShowcase({ onSelectProduct }: ProductColumnsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(PRODUCTS_LIST[0]);
  const [showSpecsModal, setShowSpecsModal] = useState(false);

  const handleWhatsAppQuote = (prodName: string) => {
    const textMsg = encodeURIComponent(
      `Hello DIGIMAX Printing! I'm interested in getting a pricing quote spec for: *${prodName}*. Please share sheet estimates.`
    );
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${textMsg}`, "_blank");
  };

  const handleScrollToMockup = (prodName: string) => {
    onSelectProduct(prodName);
    const element = document.getElementById("mockup-studio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="custom-products" className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      
      {/* Visual top bar glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-red-650/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-650/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-650" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              15 CORE CUSTOM MERCHANDISE SELECTIONS
            </span>
            <span className="h-px w-6 bg-red-650" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Product Column</span>
          </h2>
          <p className="text-xs text-zinc-450 max-w-xl mx-auto leading-relaxed font-light">
            We have refined our catalog to show 15 specific local corporate items. Select a category below to explore its photographic reference, default sizes, and technical features.
          </p>
        </div>

        {/* Master Column & Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch md:min-h-[580px]">
          
          {/* Left Layout Checklist (The columns/categories) */}
          <div className="lg:col-span-4 h-[440px] lg:h-[580px] overflow-y-auto border border-zinc-800 bg-zinc-900/90 p-2 space-y-1 scrollbar-thin">
            <div className="p-3 bg-zinc-950 text-white text-[10px] font-mono font-bold uppercase tracking-widest sticky top-0 z-10 flex justify-between items-center border-b border-zinc-850">
              <span>MERCHANDISE CATALOG</span>
              <span className="text-[9px] bg-red-600 px-1.5 py-0.5 rounded-none shadow-[0_0_8px_rgba(220,38,38,0.3)]">15 CAPABILITIES</span>
            </div>
            
            {PRODUCTS_LIST.map((prod) => {
              const isSelected = selectedCategory.id === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedCategory(prod);
                    setShowSpecsModal(true); // Pops up specifications sheet instantly on click
                  }}
                  className={`w-full text-left px-4 py-3.5 flex items-center justify-between rounded-none border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-red-650 to-red-800 border-red-650 text-white shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                      : "bg-zinc-950 border-zinc-900 hover:border-red-600/50 text-zinc-300 hover:bg-zinc-900"
                  }`}
                  title="Click to pop up service specifications"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {prod.name}
                    </p>
                    <p className={`text-[10px] font-mono ${isSelected ? "text-red-100" : "text-zinc-550 text-zinc-500"}`}>
                      {prod.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-zinc-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Layout Active Preview details card */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 p-6 sm:p-10 flex flex-col justify-between relative shadow-sm hover:shadow-[0_0_20px_rgba(220,38,38,0.05)] transition-shadow">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start"
              >
                
                {/* Photo frame column */}
                <div className="md:col-span-5 relative aspect-square bg-zinc-950 border border-zinc-850 overflow-hidden shadow-inner group">
                  <img
                    src={selectedCategory.imageUrl}
                    alt={selectedCategory.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Dynamic Corner Indicator badge */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-white px-2 py-1">
                    LIVE REFERENCE
                  </span>
                </div>

                {/* Technical data summary column */}
                <div className="md:col-span-7 space-y-4">
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold uppercase block">
                      CUSTOM COMPILATION BLUEPRINT
                    </span>
                    <h3 className="font-display font-black text-white text-xl sm:text-2xl uppercase tracking-wider">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">
                      {selectedCategory.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-350 leading-relaxed font-light mt-2">
                    {selectedCategory.desc}
                  </p>

                  <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-none space-y-2 mt-4 text-[11px]">
                    <div className="flex items-start">
                      <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest w-24 block mt-0.5">SIZE STAND:</span>
                      <span className="text-zinc-200 font-mono font-bold uppercase">{selectedCategory.size}</span>
                    </div>

                    <div className="flex items-start">
                      <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest w-24 block mt-0.5">DUE DURATION:</span>
                      <span className="text-red-400 font-bold flex items-center uppercase space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-500" />
                        <span>{selectedCategory.turnaround}</span>
                      </span>
                    </div>

                    <div className="flex items-start">
                      <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest w-24 block mt-0.5">SUITABLE:</span>
                      <span className="text-zinc-300">{selectedCategory.uses}</span>
                    </div>
                  </div>

                  {/* Materials list labels */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[9px] font-mono text-zinc-450 text-zinc-400 tracking-wider font-bold uppercase flex items-center space-x-1">
                      <Layers className="w-3.5 h-3.5 text-red-500" />
                      <span>PRINTER OPTIMAL SUBSTRATE STOCKS:</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCategory.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[10px] text-zinc-300 bg-zinc-950 border border-zinc-850 px-2.5 py-1 rounded-none font-mono font-medium"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* Direct action triggers */}
            <div className="mt-8 pt-6 border-t border-zinc-805 border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-zinc-450 uppercase tracking-wide flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>Malviya Nagar South Delhi Workshop Ready</span>
              </span>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => setShowSpecsModal(true)}
                  className="py-3 px-5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-855 border-zinc-850 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center flex items-center justify-center space-x-1"
                >
                  <Layers className="w-3.5 h-3.5 text-red-500" />
                  <span>View Specs Popup</span>
                </button>

                {selectedCategory.id === "business_card" && (
                  <button
                    onClick={() => handleScrollToMockup(selectedCategory.name)}
                    className="py-3 px-5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-850 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm text-center flex items-center justify-center space-x-1"
                  >
                    <PaperclipIcon className="hidden" />
                    <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span>Open AI Mockup Studio</span>
                  </button>
                )}


                
                <button
                  onClick={() => handleWhatsAppQuote(selectedCategory.name)}
                  className="py-3 px-5 bg-gradient-to-r from-red-655 from-red-600 to-red-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer hover:shadow-md text-center flex items-center justify-center space-x-2.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-red-955" />
                  <span>Request WhatsApp Quote</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Floating Product Specification Popup Modal */}
      <AnimatePresence>
        {showSpecsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background overlay with backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSpecsModal(false)}
              className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-zinc-900 border-2 border-red-600 w-full max-w-2xl shadow-[0_10px_50px_rgba(220,38,38,0.25)] rounded-none z-10 overflow-hidden relative max-h-[90vh] flex flex-col font-sans text-white"
            >
              {/* Calibration mark style */}
              <div className="absolute top-1.5 right-3 text-[7px] font-mono text-zinc-500 select-none font-bold">
                [DM_SPEC_PROOF_ENGINE_v4]
              </div>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-650 to-red-850 p-5 sm:p-6 space-y-1 relative border-b border-red-500/20">
                <button
                  type="button"
                  onClick={() => setShowSpecsModal(false)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[9px] font-mono font-black tracking-widest text-[#ffffff] uppercase bg-red-950/60 px-2 py-0.5 border border-red-500/20 inline-block">
                  {selectedCategory.subtitle} Specs
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight uppercase leading-tight text-white pr-8">
                  {selectedCategory.name} Specification
                </h3>
              </div>

              {/* Modal Main Body Content */}
              <div className="p-6 sm:p-8 space-y-5 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Photo Frame Left */}
                  <div className="md:col-span-5 relative aspect-square bg-zinc-950 border border-zinc-850 overflow-hidden shadow-inner">
                    <img 
                      src={selectedCategory.imageUrl} 
                      alt={selectedCategory.name} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-zinc-950 text-white px-2 py-0.5 border border-zinc-800">
                      LIVE SPEC PROOF
                    </span>
                  </div>

                  {/* Right Details Checklist Column */}
                  <div className="md:col-span-7 space-y-3.5 text-white">
                    <h4 className="text-[11px] font-mono font-black text-red-500 uppercase tracking-widest border-b border-zinc-800 pb-1 flex items-center justify-between">
                      <span>📐 Print Spec Metric Block</span>
                      <span className="text-zinc-505 text-zinc-500 font-light text-[9px] font-mono">South Delhi Hub Rates</span>
                    </h4>

                    {/* Spec matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-zinc-950 border border-zinc-850 p-2.5">
                        <span className="text-[8px] font-mono uppercase text-zinc-500 font-extrabold block">Standard Sizing</span>
                        <p className="text-xs font-sans font-extrabold text-zinc-200 mt-0.5">
                          {selectedCategory.size}
                        </p>
                      </div>

                      <div className="bg-zinc-950 border border-zinc-850 p-2.5">
                        <span className="text-[8px] font-mono uppercase text-red-400 font-extrabold block">Due Duration</span>
                        <p className="text-xs font-sans font-extrabold text-red-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-red-550" />
                          <span>{selectedCategory.turnaround}</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                      <span className="text-[8px] font-mono uppercase text-zinc-500 font-extrabold block">Ideal Purpose</span>
                      <p className="text-xs font-sans font-medium text-zinc-300 leading-normal">
                        {selectedCategory.uses}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[8px] font-mono uppercase text-zinc-500 font-extrabold block">Optimal Substrates Allowed</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedCategory.materials.map((mat, i) => (
                          <span key={i} className="text-[9.5px] text-zinc-355 text-zinc-305 text-zinc-300 bg-zinc-950 border border-zinc-850 px-2 py-0.5 font-mono">
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description info wrapper */}
                <div className="bg-zinc-950 border border-dashed border-red-900/60 p-4 relative overflow-hidden">
                  <span className="absolute top-1 right-2 text-[7px] font-mono text-red-500/35 uppercase font-bold">
                    [Proof Alignment Box]
                  </span>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed font-light">
                    {selectedCategory.desc}
                  </p>
                </div>

                {/* Actions bottom */}
                <div className="space-y-2 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      handleWhatsAppQuote(selectedCategory.name);
                    }}
                    className="w-full py-3.5 bg-gradient-to-r from-red-650 to-red-800 text-white font-mono font-bold text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2.5 hover:opacity-90 transition-all cursor-pointer rounded-none border-none"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-red-950" />
                    <span>Query Custom Rates on WhatsApp</span>
                  </button>

                  <div className="w-full">
                    <button
                      onClick={() => {
                        setShowSpecsModal(false);
                      }}
                      className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white transition-all font-mono font-bold text-[9px] uppercase tracking-widest cursor-pointer rounded-none"
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

function PaperclipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.234 20.252a16 16 0 0 1-10.385-12.65" />
      <path d="M16 4.1a15.7 15.7 0 0 1-1.3 7.8" />
      <path d="M18.8 8c.3.7.4 1.3.4 2a6 6 0 0 1-10.4 4c-.7-.9-1.2-2.1-1.3-3.4a1 1 0 0 0-.3-1" />
      <path d="M2 11.2V12a10 10 0 0 0 14.6 8.8l.5-.3" />
      <path d="m20.6 15.2-1.2-1.3a1 1 0 0 0-1.4 0l-1.9 1.9a1 1 0 0 0 0 1.4l1.2 1.3a4.13 4.13 0 0 0 5.8-5.8Z" />
      <path d="M8.2 2H9a10 10 0 0 1 10 10" />
    </svg>
  );
}
