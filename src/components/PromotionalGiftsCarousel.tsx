import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Gift, BookOpen, PenTool, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GENERAL_INFO } from "../data";

interface GiftItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  techSpecs: string;
  imageUrl: string;
  badge: string;
  icon: React.ReactNode;
  uses: string;
}

export default function PromotionalGiftsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const GIFT_PRODUCTS: GiftItem[] = [
    {
      id: "gift_heart",
      title: "Personalized Heart Cushions & Mugs",
      subtitle: "High Definition Sublimation Printing",
      desc: "Perfect gift layouts for couples, celebrations, or family memoirs. Printed using thermal transfer inks that embed deeply into thick velvet linen grids or glossy ceramic walls.",
      techSpecs: "Friction-resistant sublimation • Wash-proof • Double-sided alignment",
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=700&q=80",
      badge: "Festive Favorite",
      icon: <Heart className="w-4 h-4 text-red-500 animate-pulse" />,
      uses: "Anniversaries, Valentine gifts, special souvenirs, personalized print keepsakes"
    },
    {
      id: "gift_tshirt",
      title: "Branded Promotional T-Shirts",
      subtitle: "Corporate Activewear & Merchandising",
      desc: "Establish team cohesion or scale local brand marketing campaigns. Printed using durable premium Plastisol silk screen or instant vector direct-to-garment (DTG) laser machinery.",
      techSpecs: "100% Breathable Combed Cotton • High elasticity ink overlay • Up to 1200 DPI resolution",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
      badge: "Bulk Best Seller",
      icon: <Gift className="w-4 h-4 text-red-500" />,
      uses: "Company uniforms, tech events, local brand giveaways, store launching promo wear"
    },
    {
      id: "gift_diary",
      title: "Premium Bound Corporate Diaries",
      subtitle: "Custom Stamped Planners & Notebooks",
      desc: "Outstanding vegan leather-bound journals with thermal debossing or shiny metallic foil stamps of company logs. Keep your brand on client desks all year long.",
      techSpecs: "80 GSM imported natural shade paper • Gold/Silver corner protectors option",
      imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
      badge: "Executive Quality",
      icon: <BookOpen className="w-4 h-4 text-red-500" />,
      uses: "Corporate giveaways, high-level client business items, office planning notebooks"
    },
    {
      id: "gift_pen",
      title: "Executive Engraved Ball Pens",
      subtitle: "Premium Deep-Etched Laser Engraving",
      desc: "Elegant metallic pens, custom-etched using state-of-the-art Japanese laser plotters. Shows pristine chrome underlays with custom names or corporate branding alignment.",
      techSpecs: "Premium anodized metal body • Standard 0.7mm German blue-ink refills",
      imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80",
      badge: "Best Executive Token",
      icon: <PenTool className="w-4 h-4 text-red-500" />,
      uses: "Startup launch kits, academic awards, client contracts signing tokens, events giveaways"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GIFT_PRODUCTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GIFT_PRODUCTS.length) % GIFT_PRODUCTS.length);
  };

  const handleWhatsAppEnquire = (productTitle: string) => {
    const textMsg = encodeURIComponent(
      `Hi DIGIMAX! I saw your customized "${productTitle}" item on your website. I want to inquire about printing rates, layout files, and options for this product.`
    );
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${textMsg}`, "_blank");
  };

  return (
    <section id="custom-gifts" className="py-24 bg-[#040101] border-b border-zinc-950 relative overflow-hidden text-white">
      {/* Absolute decorative red dot glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-650/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-500" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              PROMOTIONAL & CORPORATE MERCHANDISING
            </span>
            <span className="h-px w-6 bg-red-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-blue-500">Corporate & Gift</span> Printing
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Explore high-definition customized gifting items. Embellish promotional materials with corporate logo placement or customized design structures.
          </p>
        </div>

        {/* Carousel Desktop & Mobile Combined Engine */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Slide Card Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-900 border border-zinc-800 p-6 sm:p-12 relative shadow-md">
            
            {/* Visual Red Tag Marker */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-red-605 bg-red-600" />
            
            {/* Left Column: Sliding Product Photo Representation */}
            <div className="md:col-span-5 relative aspect-square overflow-hidden border border-zinc-800 group bg-zinc-950 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <img
                    src={GIFT_PRODUCTS[currentIndex].imageUrl}
                    alt={GIFT_PRODUCTS[currentIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                  />
                  {/* Subtle vignette on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              
              {/* Top Banner Tag */}
              <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest bg-red-600 text-white px-2.5 py-1 z-10 shadow-[0_0_10px_rgba(220,38,38,0.25)]">
                {GIFT_PRODUCTS[currentIndex].badge}
              </span>
            </div>

            {/* Right Column: Sliding Content Specs Sheet */}
            <div className="md:col-span-7 flex flex-col justify-between min-h-[300px] space-y-6 sm:pl-4">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Dynamic Category Index indicator */}
                  <div className="flex items-center space-x-2">
                    <span className="p-1 px-2.5 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase font-black tracking-widest rounded-none">
                      PRODUCT SPECIAL {currentIndex + 1} OF {GIFT_PRODUCTS.length}
                    </span>
                    <span className="h-px w-8 bg-zinc-800" />
                    <span className="flex items-center space-x-1">
                      {GIFT_PRODUCTS[currentIndex].icon}
                    </span>
                  </div>

                  {/* Main Title Specifications */}
                  <div>
                    <h3 className="font-display font-black text-white text-xl sm:text-2xl uppercase tracking-tight">
                      {GIFT_PRODUCTS[currentIndex].title}
                    </h3>
                    <p className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-bold mt-0.5">
                      {GIFT_PRODUCTS[currentIndex].subtitle}
                    </p>
                  </div>

                  {/* Text descriptions */}
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {GIFT_PRODUCTS[currentIndex].desc}
                  </p>

                  {/* Spec blocks layout */}
                  <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-none font-sans space-y-2 mt-4">
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold flex items-center space-x-2 border-b border-zinc-800 pb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      <span>OFFLINE PLOTTING PRODUCTION DIRECTIVES</span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      <span className="font-mono text-[10px] text-red-500 font-bold uppercase mr-1.5">Spec Profile:</span>
                      {GIFT_PRODUCTS[currentIndex].techSpecs}
                    </p>
                    <p className="text-xs text-zinc-300">
                      <span className="font-mono text-[10px] text-red-500 font-bold uppercase mr-1.5">Best Uses:</span>
                      {GIFT_PRODUCTS[currentIndex].uses}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Action layout: Navigation arrows + Enquire Trigger button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-zinc-800">
                
                {/* Navigation arrows */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-zinc-950 border border-zinc-850 hover:border-red-650 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-none flex items-center justify-center"
                    aria-label="Previous custom item"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-zinc-950 border border-zinc-850 hover:border-red-650 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-none flex items-center justify-center"
                    aria-label="Next custom item"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Instant WhatsApp Inquiry compilation hook */}
                <button
                  onClick={() => handleWhatsAppEnquire(GIFT_PRODUCTS[currentIndex].title)}
                  className="py-3.5 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2.5 shadow-[0_0_15px_rgba(220,38,38,0.15)] hover:shadow-none"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-red-955" />
                  <span>Request WhatsApp Quote Spec</span>
                </button>

              </div>

            </div>

          </div>

          {/* Quick indicators underneath carousel */}
          <div className="flex justify-center items-center space-x-2.5 mt-8">
            {GIFT_PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-none h-1 cursor-pointer ${
                  currentIndex === idx ? "bg-red-500 w-10" : "bg-zinc-800 w-2"
                }`}
                title={`Product ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
