import React from "react";
import { Sparkles, Zap, DollarSign, Heart, Cpu, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const BENEFIT_CARDS = [
    {
      title: "Premium Print Quality",
      desc: "Our calibrated multi-ink Japanese plotters resolve files up to 2400 DPI, generating vibrant blacks, glowing deep red borders, and razor-sharp texts.",
      icon: <ShieldCheck className="w-5.5 h-5.5 text-red-500" />
    },
    {
      title: "Quick Same-Day Delivery",
      desc: "Urgent flex banner or business card stack? We provide same-day urgent plotting and express lamination services in South Delhi.",
      icon: <Zap className="w-5.5 h-5.5 text-blue-400" />
    },
    {
      title: "Highly Affordable Pricing",
      desc: "Honest, reliable wholesale pricing on paper stocks and banner substrates alike. High value for small shops, students & corporations.",
      icon: <DollarSign className="w-5.5 h-5.5 text-orange-400" />
    },
    {
      title: "Friendly Customer Support",
      desc: "In-shop consultation and layout previews. We check your files for bleed lines, bleed safety zones, and CDR/EPS compatibility.",
      icon: <Heart className="w-5.5 h-5.5 text-red-500" />
    },
    {
      title: "Latest Printing Technology",
      desc: "Employing robust, heavy-duty digital laser printers, automatic laminating pouches, and high-speed automatic document feeders.",
      icon: <Cpu className="w-5.5 h-5.5 text-blue-400" />
    },
    {
      title: "Trusted by Local Customers",
      desc: "Delivering pristine branding materials to shopkeepers, corporate offices, and institutions throughout Malviya Nagar and Saket.",
      icon: <Sparkles className="w-5.5 h-5.5 text-orange-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#050202] border-b border-zinc-950 relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[300px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-6 bg-red-655 bg-red-600" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-505 text-red-500 font-bold">
              THE DIGIMAX EDGE
            </span>
            <span className="h-px w-6 bg-red-655 bg-red-600" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Why Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Choose Us</span>
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            We merge standard modern machinery with personal graphic attention, ensuring your offline visual branding materials look spectacular.
          </p>
        </div>

        {/* Benefits Grid - Sharp & Flat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFIT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-none bg-zinc-900 border border-zinc-850 hover:border-red-600/40 hover:shadow-[0_0_15px_rgba(239,68,68,0.05)] transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group"
            >
              {/* Corner accent micro decoration */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 group-hover:scale-125 transition-transform" />

              <div className="p-3 w-fit rounded-none bg-zinc-950 border border-zinc-800">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-black text-white text-sm sm:text-base uppercase tracking-wider group-hover:text-red-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
