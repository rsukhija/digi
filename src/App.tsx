/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ProductColumnsShowcase from "./components/ProductColumnsShowcase";
import PromotionalGiftsCarousel from "./components/PromotionalGiftsCarousel";
import BusinessCardMockup from "./components/BusinessCardMockup";
import InteractiveGallery from "./components/InteractiveGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerReviews from "./components/CustomerReviews";
import ContactSection from "./components/ContactSection";
import OurServices from "./components/OurServices";
import { GENERAL_INFO } from "./data";
import { Printer, MessageSquare, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./components/Logo";

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>("");

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  const handleWhatsAppFloating = () => {
    const textMsg = encodeURIComponent("Hello DIGIMAX Printing! I visited your website and am interested in customized professional printing services.");
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${textMsg}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0a0606] text-[#f5eded] selection:bg-red-600 selection:text-white">
      {/* Dynamic Printing-Press CMYK colorful ambient glow backdrops */}
      <div className="absolute inset-x-0 top-0 h-[800px] color-blob-cyan opacity-80 pointer-events-none" />
      <div className="absolute inset-x-0 top-[1000px] h-[1000px] color-blob-magenta opacity-80 pointer-events-none" />
      <div className="absolute inset-x-0 top-[2200px] h-[800px] color-blob-yellow opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-[3500px] h-[1200px] color-blob-cyan opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-[5000px] h-[1000px] color-blob-magenta opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06)_0%,transparent_50%)] pointer-events-none" />

      {/* 2. Brand Sticky Header */}
      <Navbar />

      {/* 3. High Impact Hero Section */}
      <Hero />

      {/* 4. Elegant About Us segment */}
      <AboutUs />

      {/* 5. 13 Specific Custom Product Columns Showcase */}
      <ProductColumnsShowcase onSelectProduct={handleSelectService} />

      {/* 5.5 Custom Promotional Gifts Carousel */}
      <PromotionalGiftsCarousel />

      {/* 5.6 Real-Time Business Card Mockup Studio */}
      <BusinessCardMockup />

      {/* 5.7 Comprehensive Interactive Services Catalog */}
      <OurServices />

      {/* 7. Product Work Gallery */}
      <InteractiveGallery />

      {/* 8. Corporate Claims of Quality */}
      <WhyChooseUs />

      {/* 9. Local Client Reviews */}
      <CustomerReviews />

      {/* 10. Timing indicator and queries forms */}
      <ContactSection />

      {/* 11. Footer details */}
      <footer className="bg-[#050303] border-t border-zinc-800/80 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Column A: Branding */}
            <div className="space-y-4">
              <Logo showText={true} className="w-12 h-12" textColor="text-white" />
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                DIGIMAX PRINTING is Delhi's trusted digital plotting agency. Specializing in Star flex signboards, same-day executive business cards, and laser cuts.
              </p>
              <p className="text-[9px] font-mono tracking-widest text-red-500 uppercase font-bold">
                CRAFTED IN NEW DELHI
              </p>
            </div>

            {/* Column B: Services overview list */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Core Substrates
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                <li>• Visiting Cards (350 GSM Velvet)</li>
                <li>• Star Flex banners (Glowing Backlit)</li>
                <li>• Custom Vinyl adhesives</li>
                <li>• Letterheads & Cash books</li>
              </ul>
            </div>

            {/* Column C: Contacts */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Malviya Nagar Outlet
              </h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{GENERAL_INFO.address}</span>
              </p>
              <p className="text-xs text-zinc-300 font-light flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span className="font-mono text-white font-bold">+91 {GENERAL_INFO.phone}</span>
              </p>
            </div>

            {/* Column D: Support & Vision Statement */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Working Days
              </h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                We are open 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM for all in-person adjustments.
              </p>
              <div className="pt-2">
                <span className="px-3.5 py-1 bg-red-950/40 border border-red-500/30 text-[9px] text-red-400 font-mono font-bold rounded-none uppercase tracking-wider">
                  FAST • PROFESSIONAL • AFFORDABLE
                </span>
              </div>
            </div>

          </div>

          <div className="pt-12 mt-12 border-t border-zinc-800/85 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-zinc-400 text-[11px]">
              © {new Date().getFullYear()} DIGIMAX PRINTING. All Rights Reserved. South Delhi, Delhi, India.
            </p>
            <p className="text-zinc-400 text-[11px] font-mono uppercase tracking-wider">
              Precise Geometric Outlines
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Messenger Widget - Sharp Geometric Block */}
      <button
        onClick={handleWhatsAppFloating}
        id="floating-whatsapp-trigger"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-none bg-zinc-950 border border-red-650 text-red-500 shadow-2xl hover:bg-zinc-900 transition-all cursor-pointer flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-red-650/15 text-red-500 group-hover:rotate-6 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 pl-0 group-hover:pl-2.5 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-red-400">
          WhatsApp Urgent Prints
        </span>
      </button>

    </div>
  );
}
