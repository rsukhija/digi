import React, { useState, useEffect } from "react";
import { GENERAL_INFO } from "../data";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hello DIGIMAX! I am looking for urgent premium printing services.");
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${message}`, "_blank");
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-805/40 py-3 shadow-md"
          : "bg-[#0b0707]/90 backdrop-blur-sm border-b border-zinc-805/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand - Real Digimax Logo Icon & Typography */}
          <a href="#home" className="flex items-center group header-logo">
            <Logo showText={true} className="w-11 h-11" textColor="text-white" />
          </a>

          {/* Desktop Navigation links - Wide spaces & Uppercase typography */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-red-500 transition-colors duration-150 py-2 relative"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call / WhatsApp Active Actions - Zero Curve corners */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:91${GENERAL_INFO.phone}`}
              className="flex items-center space-x-2 text-zinc-300 hover:text-red-500 text-xs font-bold uppercase tracking-wider transition-colors duration-200 pr-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              <span className="font-mono text-zinc-100">{GENERAL_INFO.phone}</span>
            </a>
            <button
              onClick={handleWhatsAppChat}
              id="nav-whatsapp-cta"
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-800 text-xs font-bold uppercase tracking-widest text-white rounded-none hover:brightness-110 shadow-[0_4px_12px_rgba(185,28,28,0.25)] hover:scale-102 transition-all cursor-pointer"
            >
              Get Quote
            </button>

            {/* Interactive hovering WhatsApp QR Code dropdown */}
            <div className="relative group/qr">
              <button
                type="button"
                className="p-1 px-3 border border-zinc-800 hover:border-red-600 hover:bg-zinc-900 bg-zinc-900/60 shadow-sm rounded-none text-zinc-100 transition-all flex items-center justify-center cursor-help h-[38px]"
                title="Scan to Chat on WhatsApp Direct"
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[7px] font-mono font-black uppercase tracking-wider text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block" />
                    ONLINE
                  </span>
                  <span className="text-[8px] font-mono font-bold tracking-widest text-white">
                    SCAN QR
                  </span>
                </div>
              </button>
              
              {/* Dropdown Card */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-950 border border-zinc-800 p-4 shadow-xl hidden group-hover/qr:block hover:block z-50 rounded-none text-center">
                <p className="text-[9px] font-mono uppercase tracking-widest text-[#f3ecec] font-black mb-2 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  WHATSAPP CHAT
                </p>
                <div className="w-36 h-36 mx-auto bg-white p-1.5 border border-zinc-850">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=050505&data=${encodeURIComponent(`https://wa.me/91${GENERAL_INFO.phone}`)}`}
                    alt="WhatsApp Direct Link QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[7.5px] font-mono uppercase text-zinc-400 mt-2 font-black leading-relaxed">
                  Scan to chat directly with DIGIMAX office
                </p>
              </div>
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={`tel:91${GENERAL_INFO.phone}`}
              className="p-2 text-zinc-300 hover:text-red-500"
            >
              <PhoneCall className="w-4 h-4 text-red-500" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-zinc-100 border border-zinc-800 rounded-none bg-zinc-900 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Sharp edge bounds */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-800 absolute top-full left-0 right-0 py-6 px-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest font-bold text-zinc-300 hover:text-white hover:pl-2 transition-all py-1.5 border-l-2 border-transparent hover:border-red-600 pl-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-800 flex flex-col space-y-3">
                <a
                  href={`tel:${GENERAL_INFO.phone}`}
                  className="flex items-center space-x-2 text-xs justify-center py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold uppercase tracking-wider shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-mono">{GENERAL_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppChat();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-800 text-xs font-bold uppercase tracking-widest text-[#ffffff] font-bold rounded-none"
                >
                  WhatsApp Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
