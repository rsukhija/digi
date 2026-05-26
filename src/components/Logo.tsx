import React, { useState, useEffect } from "react";

interface LogoProps {
  showText?: boolean;
  className?: string; // Sizing for the icon part
  textColor?: string; // Text color override
}

export default function Logo({ showText = true, className = "w-14 h-14 sm:w-16 sm:h-16", textColor = "text-white" }: LogoProps) {
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  useEffect(() => {
    // Read the uploaded brand logo
    const loadLogo = () => {
      const stored = localStorage.getItem("digimax_custom_brand_logo");
      setCustomLogo(stored);
    };

    loadLogo();
    
    // Add real-time event checks
    window.addEventListener("storage", loadLogo);
    const interval = setInterval(loadLogo, 1000);
    
    return () => {
      window.removeEventListener("storage", loadLogo);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center space-x-3.5 group">
      {/* Visual Icon Mark (SVG) - always visible as the base */}
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}
        aria-hidden="true"
      >
        <defs>
          {/* Gradients for the monogram DM */}
          <linearGradient id="dmBlueGrad" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a8a" /> {/* Deep Royal Blue */}
            <stop offset="50%" stopColor="#2563eb" /> {/* Vivid Blue */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
          </linearGradient>

          {/* Gradients for metal handle of the squeegee */}
          <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="35%" stopColor="#f3f4f6" />
            <stop offset="70%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>

          {/* CMYK Rainbow color bar feed gradient */}
          <linearGradient id="cmykGrad" x1="170" y1="180" x2="310" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="15%" stopColor="#00aeef" /> {/* Cyan */}
            <stop offset="45%" stopColor="#ec008c" /> {/* Magenta */}
            <stop offset="75%" stopColor="#fff200" /> {/* Yellow */}
            <stop offset="100%" stopColor="#000000" /> {/* Key / Black */}
          </linearGradient>
        </defs>

        {/* 1. Dissolving / Pixelated printer bits on the left edge */}
        <g fill="#00aeef" fillOpacity="0.85">
          <rect x="75" y="105" width="8" height="8" />
          <rect x="85" y="115" width="8" height="8" />
          <rect x="65" y="125" width="8" height="8" />
          <rect x="75" y="135" width="10" height="10" />
          <rect x="90" y="125" width="6" height="6" />
          <rect x="80" y="150" width="8" height="8" />
          <rect x="70" y="165" width="10" height="10" />
          <rect x="85" y="175" width="6" height="6" />
          <rect x="95" y="160" width="8" height="8" />
          <rect x="75" y="195" width="8" height="8" />
          <rect x="88" y="190" width="8" height="8" />
        </g>
        <g fill="#2563eb" fillOpacity="0.9">
          <rect x="100" y="110" width="12" height="12" />
          <rect x="115" y="120" width="10" height="10" />
          <rect x="105" y="135" width="12" height="12" />
          <rect x="100" y="155" width="10" height="10" />
          <rect x="112" y="165" width="12" height="12" />
          <rect x="102" y="180" width="10" height="10" />
          <rect x="115" y="145" width="8" height="8" />
        </g>

        {/* 2. Bold Monogram "DM" */}
        {/* Underlay shadow representation */}
        <path
          d="M 130,100 L 250,100 C 290,100 310,120 310,150 C 310,180 290,200 250,200 L 130,200 Z"
          fill="#020617"
          opacity="0.3"
        />

        {/* The 'D' Shape */}
        <path
          d="M 130,90 H 230 C 275,90 305,115 305,152 C 305,189 275,214 230,214 H 130 V 90 Z M 165,118 V 186 H 222 C 248,186 268,172 268,152 C 268,132 248,118 222,118 H 165 Z"
          fill="url(#dmBlueGrad)"
        />

        {/* The 'M' Integration overlay */}
        <path
          d="M 230,90 H 320 V 214 H 285 V 135 L 255,185 H 240 L 210,135 V 214 H 180"
          stroke="url(#dmBlueGrad)"
          strokeWidth="30"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          opacity="0.95"
        />

        {/* 3. Sweeping CMYK Ink Rainbow Ribbon Wave */}
        {/* Ribbon Wave shape flowing in front */}
        <path
          d="M 185,190 C 240,190 260,110 325,115 L 340,135 C 300,125 250,200 185,200 Z"
          fill="url(#cmykGrad)"
        />
        {/* Yellow-Magenta-Cyan extra detailing lines inside wave to simulate printed substrates */}
        <path d="M 190,193 C 242,193 258,118 322,121" stroke="#fff200" strokeWidth="2.5" fill="none" />
        <path d="M 187,196 C 241,196 259,114 324,124" stroke="#ec008c" strokeWidth="2.5" fill="none" />
        <path d="M 184,199 C 240,199 260,110 325,127" stroke="#00aeef" strokeWidth="2.5" fill="none" />

        {/* 4. White Paper Feed Reel Spool (Starting spiral on bottom left of ribbon) */}
        <circle cx="185" cy="195" r="16" fill="#ffffff" stroke="#1e3a8a" strokeWidth="3" />
        {/* Paper spool outer spiral line */}
        <path
          d="M 185,195 A 11,11 0 1,1 178,186 A 7,7 0 1,1 189,191 A 3,3 0 1,1 184,195"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* 5. Screen Printing Squeegee Tool at the end of the ribbon wave */}
        <g transform="translate(315, 100) rotate(22)">
          {/* Black Rubber Blade */}
          <path d="M 3,42 L 35,42 Q 38,42 38,45 L 38,52 L 0,52 L 0,45 Q 0,42 3,42 Z" fill="#1f2937" />
          {/* Squeegee Steel Metal Frame Handle */}
          <path d="M 2,12 L 36,12 L 38,42 L 0,42 Z" fill="url(#metalGrad)" stroke="#6b7280" strokeWidth="1" />
          {/* Screw fasteners detail on squeegee */}
          <circle cx="8" cy="27" r="2.5" fill="#374151" />
          <circle cx="19" cy="27" r="2.5" fill="#374151" />
          <circle cx="30" cy="27" r="2.5" fill="#374151" />
          {/* Squeegee top wooden/metal grab handle */}
          <path d="M -4,2 L 42,2 Q 44,2 44,12 L 44,14 L -6,14 L -6,12 Q -4,2 -4,2 Z" fill="#4b5563" />
        </g>
      </svg>

      {/* Brand Text Block */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display text-2xl sm:text-3xl font-black uppercase tracking-tighter ${textColor} leading-tight`}>
            Digimax <span className="text-red-650 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">Printing</span>
          </span>
          <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.05em] text-zinc-600 uppercase font-black flex items-center space-x-1 mt-0.5">
            <span>SOUTH DELHI HUB</span>
            <span className="text-red-500">•</span>
            <span className="text-red-650 font-extrabold font-sans">ARCPRINT Partner</span>
          </p>
        </div>
      )}
    </div>
  );
}
