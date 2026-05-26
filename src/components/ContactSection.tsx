import React, { useState, useEffect } from "react";
import { GENERAL_INFO } from "../data";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [istHour, setIstHour] = useState<string>("");

  // Compute if the print-shop is open under Delhi Local Time (IST = UTC + 5:30)
  useEffect(() => {
    const checkOpenStatus = () => {
      const utcDate = new Date();
      // IST is UTC + 5.5 hours
      const istTime = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000));
      const hours = istTime.getUTCHours();
      const minutes = istTime.getUTCMinutes();
      
      const openHour = 9; // 9:00 AM
      const closeHour = 21; // 9:00 PM

      const formattedHour = hours > 12 ? `${hours - 12}:${minutes.toString().padStart(2, '0')} PM` : `${hours}:${minutes.toString().padStart(2, '0')} AM`;
      setIstHour(formattedHour);

      if (hours >= openHour && hours < closeHour) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !query.trim()) return;

    setIsSubmitted(true);
    setName("");
    setContact("");
    setQuery("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleWhatsAppDirect = () => {
    const textMsg = encodeURIComponent(`Hi DIGIMAX! My name is ${name || 'Customer'}. I am inquiring about design & printing. My query: ${query || 'Can you print customized visiting cards?'}`);
    window.open(`https://wa.me/91${GENERAL_INFO.phone}?text=${textMsg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-655 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-500 font-bold">
              GET IN TOUCH
            </span>
            <span className="h-px w-6 bg-red-655 bg-red-600" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">DIGIMAX PRINTING</span>
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Ready to initialize your next printing layout files? Visit our Malviya Nagar outlet or drop us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info Specs & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Business Hours Indicator Card - Sharp */}
            <div className={`p-4 rounded-none border ${
              isOpen 
                ? "bg-green-950/40 border-green-600/30 text-green-400" 
                : "bg-red-950/40 border-red-600/30 text-red-400"
            } flex items-center space-x-3.5 shadow-md`}>
              {isOpen ? (
                <>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-green-400">OPEN NOW (DELHI TIME)</p>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal font-light">Our shop is open. Visit us or place orders via WhatsApp! (Timings: 9:00 AM – 9:00 PM)</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 flex-shrink-0 animate-pulse text-red-500" />
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400">CLOSED NOW (DELHI TIME)</p>
                     <p className="text-xs text-zinc-404 text-zinc-400 mt-1 leading-normal font-light">We are currently closed. Timings are Monday – Sunday | 9:00 AM – 9:00 PM. Leave an inquiry below!</p>
                  </div>
                </>
              )}
            </div>

            {/* Direct Contact Specification Cards */}
            <div className="bg-zinc-900 border border-zinc-850 rounded-none p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-655 bg-red-600" />

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-none bg-zinc-950 border border-zinc-800 text-red-500 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-none font-bold text-zinc-400">Our Address</h4>
                  <p className="text-sm font-semibold text-white mt-2">{GENERAL_INFO.address}</p>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal">F2, Malviya Nagar, near Saket Area, opposite Local Market, South Delhi – 110017.</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-none bg-zinc-950 border border-zinc-800 text-blue-400 mt-0.5">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-none font-bold text-zinc-400">Phone / WhatsApp</h4>
                  <a href={`tel:91${GENERAL_INFO.phone}`} className="text-sm font-bold text-white mt-2 block hover:text-blue-400 font-mono transition-colors">
                    +91 {GENERAL_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 mt-1 font-normal">Urgent file checks, design specs CDR/PDF submissions, same-day plotting requests.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-none bg-zinc-950 border border-zinc-800 text-orange-400 mt-0.5">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-none font-bold text-zinc-400">Email Address</h4>
                  <a href={`mailto:${GENERAL_INFO.email}`} className="text-sm font-bold text-white mt-2 block hover:text-orange-400 transition-colors">
                    {GENERAL_INFO.email}
                  </a>
                  <p className="text-xs text-zinc-400 mt-1 font-normal">Bulk enterprise proposals, vector file archives, high resolution designs.</p>
                </div>
              </div>

              {/* Working Hours detail */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-none bg-zinc-950 border border-zinc-800 text-red-500 mt-0.5">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-none font-bold text-zinc-400">Store Timing</h4>
                  <p className="text-sm font-semibold text-white mt-2">{GENERAL_INFO.timing}</p>
                  <p className="text-xs text-zinc-400 mt-1 font-normal">Open all 7 days of the week, including Sundays & Holidays.</p>
                </div>
              </div>

            </div>

            {/* Schematic Maps Directions Card */}
            <div className="bg-zinc-900 border border-zinc-850 rounded-none p-6 shadow-md relative overflow-hidden group">
              <div className="relative z-10 space-y-3.5 text-center sm:text-left">
                <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider">
                  South Delhi Navigation
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Find F2, Malviya Nagar easily. Click below to load direct route directions on your device GPS map application.
                </p>
                <a
                  href={GENERAL_INFO.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-[10px] text-red-400 hover:text-white font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-none"
                >
                  📍 Open Live Google Maps Directions
                </a>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-850 rounded-none p-6 sm:p-8 shadow-md relative">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-600/5 to-transparent rounded-bl-full pointer-events-none" />

            {isSubmitted ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-none bg-zinc-950 border border-green-600 flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="space-y-1.5 max-w-sm">
                  <h3 className="font-display font-black text-white text-base sm:text-lg uppercase tracking-tight">Inquiry Submitted!</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Thank you! We have received your query at Digimax Printing. Our operator will reach out via Phone/Email in minutes.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div className="flex items-center space-x-3 pb-4 border-b border-zinc-850">
                  <div className="w-8 h-8 rounded-none bg-zinc-950 border border-zinc-850 flex items-center justify-center">
                    <Send className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider">Inquiry & Custom Request</h3>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-widest block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3.5 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-red-500 font-mono"
                  />
                </div>

                {/* Contact phone / email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-widest block">
                    Contact Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. +91 8287875040 or your-email@domain.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3.5 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-red-500 font-mono"
                  />
                </div>

                {/* Query details */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-widest block">
                    Your Inquiry / Printing Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your design, quantity, shape, paper weights, or flex width dimensions. No rates needed."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-none p-4 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-red-505 focus:border-red-500 resize-none leading-relaxed font-mono"
                  />
                </div>

                {/* Double Submit handles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <button
                    type="submit"
                    className="py-4 px-5 bg-gradient-to-r from-red-650 from-red-600 to-red-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-4 px-5 bg-gradient-to-r from-green-650 from-green-600 to-emerald-600 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-green-700" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

                <p className="text-[9px] text-zinc-500 text-center font-mono mt-2 tracking-wide uppercase">
                  *Submitting via WhatsApp compiles your text fields and opens instant message prompt on +91 {GENERAL_INFO.phone}.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
