import { ServiceCategory, GalleryItem, CustomerReview } from "./types";

export const SERVICES_DATA: Record<string, ServiceCategory> = {
  printing: {
    title: "Printing Services",
    subtitle: "High precision lithography & commercial offset outputs",
    items: [
      {
        id: "flyers",
        name: "Flyers & Pamphlets",
        description: "Double-sided premium glaze promotional leaflets in rich CMYK.",
        suitableFor: "Events, local store promotions, campaigns",
        standardSize: "A5 (148mm x 210mm) or A4",
        options: ["130 GSM Premium Gloss", "170 GSM Art Paper", "Bi-fold Option", "Tri-fold Scoring"]
      },
      {
        id: "books",
        name: "Books & Hardbound Manuals",
        description: "High-end corporate publishing, school textbooks, and premium catalogs.",
        suitableFor: "Authors, training institutes, companies",
        standardSize: "A5, B5, or standard Novel dimensions",
        options: ["Perfect Bound Softcover", "Luxurious Leather Binding", "Golden Hot Stamp Foil"]
      },
      {
        id: "posters",
        name: "Premium Posters",
        description: "Superb high-definition photo print lines for artistic showcases.",
        suitableFor: "Exhibitions, movie screening, premium wall posters",
        standardSize: "12x18 inches, A3, or custom sizes",
        options: ["220 GSM Photo Gloss", "250 GSM Synthetic Non-Tear", "UV Matte Guard Overlay"]
      },
      {
        id: "stamps",
        name: "Self-Inking Stamps",
        description: "Bespoke company seals and executive signature stamps.",
        suitableFor: "Business owners, doctors, chartered accountants",
        standardSize: "Pocket sizes & heavy corporate stamps",
        options: ["Shiny Self-inking core", "Durable pre-inked pads", "Red/Blue/Black ink lines"]
      },
      {
        id: "banners",
        name: "Promo Banners",
        description: "Vivid advertising displays with heavy-gauge corner eyelets.",
        suitableFor: "Product releases, campaigns, political rallies",
        standardSize: "Custom width up to 10 feet seamless",
        options: ["Lightweight Flex", "Premium Star Flex with high tensile backing"]
      },
      {
        id: "brochures",
        name: "Brochures & Catalogs",
        description: "Exquisite multi-page catalogs showcasing your luxury portfolio.",
        suitableFor: "Brands, real estate projects, interior showrooms",
        standardSize: "A4 sheet folded into customized bi-folds",
        options: ["250 GSM Art Card with velvet layout", "Spot UV Highlight elements"]
      },
      {
        id: "billboards",
        name: "Bespoke Billboards",
        description: "Massive scale displays designed to stay weather-proof.",
        suitableFor: "Outdoor brand advertisements, highway displays",
        standardSize: "20x10 feet, 30x15 feet standard sizes",
        options: ["Solvent high density inks", "Heavy backing blockout flex"]
      },
      {
        id: "certificates",
        name: "Gold Foil Certificates",
        description: "Pristine graduation and appreciation awards on textured stock.",
        suitableFor: "Educational institutions, corporate HRs, conferences",
        standardSize: "Standard A4 (210mm x 297mm)",
        options: ["300 GSM Premium Textured board", "Pure Gold Foil embossing borders"]
      },
      {
        id: "letterheads",
        name: "Executive Letterheads",
        description: "Official documents look standard on executive watermarked stocks.",
        suitableFor: "Corporate billing, formal letters, legal templates",
        standardSize: "Standard A4 Size",
        options: ["100 GSM Alabaster Bond", "120 GSM Royal Cotton Bond"]
      },
      {
        id: "business_cards",
        name: "Bespoke Business Cards",
        description: "Elevate business encounters with luxury velvet and foil finishes.",
        suitableFor: "Startup founders, corporate executives, professionals",
        standardSize: "90mm x 52mm (Standard ISO)",
        options: ["350 GSM Matte Card", "Velvet finish", "Golden Foil Embossed", "Spot UV Glazes"]
      }
    ]
  },
  gifting: {
    title: "Gifting & Sublimation",
    subtitle: "Personalized merchandise & thermal heat-press products",
    items: [
      {
        id: "mug_printing",
        name: "Custom Mug Printing",
        description: "Glossy ceramic mugs holding digital prints or magic thermal heat reveals.",
        suitableFor: "Birthday gifts, corporate branding giveaway, desk gear",
        standardSize: "11 Oz / 330ml standard mug",
        options: ["High-Gloss Ceramic White", "Stealthy Magic Color Changing", "Premium Dual Tone Mugs"]
      },
      {
        id: "tshirt_printing",
        name: "T-Shirt Printing",
        description: "Vibrant DTF or screen printing layouts directly on premium cotton garments.",
        suitableFor: "Enterprise uniforms, event wear, custom brand labels",
        standardSize: "Unisex S, M, L, XL, XXL",
        options: ["100% Cotton Bio-washed (220 GSM)", "DTF Premium Graphics", "Solid Sublimation Polyesters"]
      },
      {
        id: "cushion_printing",
        name: "Cushion Printing",
        description: "Soft velvet pillows carrying rich sublimation photo-collages.",
        suitableFor: "Home decor, personalized anniversary gifts",
        standardSize: "12x12 inches, 16x16 inches standard",
        options: ["High density soft velvet cover", "Satin glow texture cover", "Premium microfiber fillings"]
      },
      {
        id: "mousepad_printing",
        name: "Mouse Pad Printing",
        description: "Water-resistant speed-surface mousepads with non-slip rubber bases.",
        suitableFor: "Gamers, corporate desktops, home office workers",
        standardSize: "Standard (220mm x 180mm) or massive XXL sizes",
        options: ["Anti-fray stitched borders", "Pro Speed textured fabric", "Anti-skit natural rubber base"]
      },
      {
        id: "custom_diary",
        name: "Personalized Diary",
        description: "Premium leather notebooks carrying names beautifully embossed in gold foil.",
        suitableFor: "New-year onboarding, management journaling, partners",
        standardSize: "A5 Compact Executive size",
        options: ["Premium PU Leather Wrap", "Gold debossed customization", "Satin ribbon markers"]
      }
    ]
  },
  outdoor: {
    title: "Indoor / Outdoor Advertising",
    subtitle: "Large scale signage & heavy density weather-proof plotting",
    items: [
      {
        id: "flex_printing",
        name: "Flex Printing",
        description: "Highly budget-friendly outdoor shop facias and banners.",
        suitableFor: "Promotional events, shop branding, public notices",
        standardSize: "Custom width up to 10ft seamless width",
        options: ["Standard Flex (Normal)", "Star Flex (Heavy-duty gloss backdrop)"]
      },
      {
        id: "vinyl_printing",
        name: "Vinyl & Adhesive Prints",
        description: "High resolution self-adhesive bubble-free vinyl prints.",
        suitableFor: "Storefront windows, vehicle wrapping, wall murals",
        standardSize: "Custom measurements",
        options: ["Ultra-Gloss Laminate", "Executive Matte Polish", "Micro-perforated adhesive"]
      },
      {
        id: "poster_outdoor",
        name: "Outdoor Posters",
        description: "Waterproof synthetic posters designed to withstand outside damage.",
        suitableFor: "Event flyers, street-side campaigns, billboards",
        standardSize: "A3 or custom banners",
        options: ["Water-resistant synthetic paper", "UV-Lock fade-proof inks"]
      },
      {
        id: "backlit_vinyl",
        name: "Backlit Vinyl Prints",
        description: "Translucent vinyl sheets displaying light with complete uniform glow of colors.",
        suitableFor: "Glowing light boxes, night signboards, indoor malls",
        standardSize: "Custom width up to 10 feet",
        options: ["Premium Backlit Star film", "Waterproof UV cured inks"]
      },
      {
        id: "vinyl_pasting",
        name: "Vinyl Pasting & Installation",
        description: "Professional alignment on glass doors, ACP sheets, or foam cores.",
        suitableFor: "Inside office dividers, shop front sign, mall boards",
        standardSize: "Site measurement dependent",
        options: ["Frosted glass styling", "One-way vision mesh screen option"]
      },
      {
        id: "canvas_printing",
        name: "Canvas Board Printing",
        description: "Fine art canvas mounted on solid premium pine wood.",
        suitableFor: "Corporate lounge lobbies, galleries, high prestige gifts",
        standardSize: "12x18\", 18x24\", or massive wall frames",
        options: ["Natural heavy cotton canvas", "Genuine premium framing layout"]
      }
    ]
  },
  mounting: {
    title: "Mounting & Lamination",
    subtitle: "Heavy-duty PVC foam core and media protective overlays",
    items: [
      {
        id: "wallpaper",
        name: "Custom Wallpaper",
        description: "Decorate office spaces with customizable photo mural wall backdrops.",
        suitableFor: "Reception areas, conference rooms, master bedroom",
        standardSize: "Wall measurements tailored",
        options: ["Non-woven textured fabric", "Ultra premium canvas vinyl", "Self adhesive backing"]
      },
      {
        id: "calendars",
        name: "Calendar Printing",
        description: "Table flip and single page wall sheets with top-notch bounding.",
        suitableFor: "New-year corporate bundles, home decor",
        standardSize: "8x6 inches Desk flip, or A3 wall calendar",
        options: ["250 GSM Rigid Ivory board", "Glossy metallic coil binds"]
      },
      {
        id: "stickers_bulk",
        name: "Die-Cut Stickers",
        description: "Perfect precise contour cut stickers ready for products.",
        suitableFor: "Product bottles, retail packages, laptop customization",
        standardSize: "Custom sizes (circular, sq, custom die)",
        options: ["Splash-proof Glossy Paper", "Transparent Adhesive sheets"]
      },
      {
        id: "canvas_mount",
        name: "Canvas Mounting",
        description: "Fine-art textured canvas mounted on sturdy panels.",
        suitableFor: "Home painting mockups, office boardrooms",
        standardSize: "Custom sizes available",
        options: ["380 GSM Cotton Blend", "Gloss or Semi-matte varnished wrap"]
      },
      {
        id: "banner_stand",
        name: "Roll Up Standee",
        description: "Premium retractable layout in aluminum casing designed for quick campaigns.",
        suitableFor: "Exhibition entries, product demo stands, hotel lobby",
        standardSize: "3ft x 6ft, or 2.5ft x 5ft frames",
        options: ["Retractable heavy duty steel", "Non-tear banner films"]
      },
      {
        id: "one_way_vision",
        name: "One-Way Vision",
        description: "Perforated adhesive vinyl allowing you to see outside.",
        suitableFor: "Retail glass storefronts, medical clinic glass",
        standardSize: "Custom site measurement standard",
        options: ["Premium perforated vinyl", "Day-and-night vision guards"]
      },
      {
        id: "frosted_media",
        name: "Frosted glass media",
        description: "Elegant sandblasted glass styling perfect for corporate partitions.",
        suitableFor: "Corporate board rooms, cabin dividers, store decor",
        standardSize: "Width customizable standard",
        options: ["Premium dust-proof frosted", "Geometric custom plotter cuts"]
      },
      {
        id: "gsb_boards",
        name: "Glow Sign Boards (GSB)",
        description: "Internal illuminated backlights using premium tubes or long-lasting LEDs.",
        suitableFor: "Main road shop fronts, 24/7 locations, cafes",
        standardSize: "8x4 feet, 10x3 feet standard",
        options: ["Heavy iron fabrication frame", "Samsung long-life LEDs"]
      },
      {
        id: "acp_signage",
        name: "ACP Signage Panel",
        description: "Ultra-luxurious advertising board carrying raised 3D acrylic letters.",
        suitableFor: "Showroom banners, hotel headings, hospitals",
        standardSize: "Modular sizes as per architectural standards",
        options: ["Anti-rust Aluminium sheet prep", "Glowing LED raised fonts"]
      },
      {
        id: "canopy",
        name: "Canopy & Promo Tents",
        description: "Waterproof structural tents designed to setup outside events.",
        suitableFor: "Roadside product promotions, fairs",
        standardSize: "4x4x7 feet, 6x6x7 feet standard",
        options: ["Heavy steel folding frames", "Thick 600D flex water-resistant covers"]
      }
    ]
  },
  documents: {
    title: "Internet & Document Services",
    subtitle: "Fast setup standard photocopy, binds, and government applications",
    items: [
      {
        id: "xerox",
        name: "B/W Xerox & High-speed printing",
        description: "Fast multi-page collated black and white doc copying.",
        suitableFor: "Syllabi, exam booklets, office reports, files",
        standardSize: "A4, A3, Legal, Letter",
        options: ["75 GSM Premium white", "Fast automatic collating"]
      },
      {
        id: "color_printout",
        name: "Color Printout",
        description: "Laser-sharp color alignments for presentations and booklets.",
        suitableFor: "School projects, corporate pitches, designs",
        standardSize: "A4, Letter or A3 sheets",
        options: ["100 GSM Super-white paper", "130 GSM Semi-Matte coated"]
      },
      {
        id: "scanning",
        name: "High-Speed Scanning",
        description: "Archiving of pages into search-optimized PDF files.",
        suitableFor: "Contract archival, cloud backups, college folders",
        standardSize: "Up to A3 size direct scan",
        options: ["Highly optimized multi-page PDF", "Direct digital transfer"]
      },
      {
        id: "spiral_binding",
        name: "Spiral & Comb Binding",
        description: "Neat bindings carrying protective transparent fronts.",
        suitableFor: "Project reports, proposals, college thesis files",
        standardSize: "Adjustable specs up to 500 sheets",
        options: ["Flexible plastic coil", "Metal heavy binders", "Hardbound golden stamps"]
      },
      {
        id: "lamination",
        name: "Thermal Lamination",
        description: "Warm laminating pouches shielding documents from moisture.",
        suitableFor: "Aadhaar cards, birth sheets, mark sheets, certificates",
        standardSize: "A4 or standard card sizing",
        options: ["125 Micron thick shields", "Compact water-lock borders"]
      },
      {
        id: "passport_photo",
        name: "Passport Size Photos",
        description: "Crisp biometric compliant photos printed in 5 minutes.",
        suitableFor: "Form applications, visas, school ID cards",
        standardSize: "3.5cm x 4.5cm standard",
        options: ["Real photo paper", "Matt or Gloss finishes", "Custom color backdrops"]
      },
      {
        id: "cd_dvd",
        name: "CD & DVD Writing",
        description: "Permanent backup writing of raw files to safe optical substrates.",
        suitableFor: "Design project archives, legal databases, old recordings",
        standardSize: "Standard 120mm discs",
        options: ["Verbatim high-grade discs", "Custom paper jewel jackets"]
      },
      {
        id: "dtp_english",
        name: "DTP English Typing",
        description: "Professional computerized transcription and formatting services.",
        suitableFor: "Court documents, legal agreements, resumes",
        standardSize: "Standard pages",
        options: ["Flawless typographic formatting", "Fast typing operators"]
      },
      {
        id: "govt_apply",
        name: "Aadhaar / Passport / PAN Card Services",
        description: "Complete professional digital support for vital state-issued documents.",
        suitableFor: "Local area citizens requiring online registration help",
        standardSize: "N/A",
        options: ["Professional online forms apply", "Offline bio correction guidance"]
      }
    ]
  }
};

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal_1",
    title: "Bespoke Premium Velvet Cards",
    category: "printing",
    imageUrl: "https://images.unsplash.com/photo-1589149021833-28929e578f7e?auto=format&fit=crop&w=800&q=80",
    description: "Premium double-sided matte black business cards presenting deep hot-stamp metallic foil overlays on 350 GSM cotton cards.",
    badge: "Staff Pick",
    techSpecs: "350 GSM Art Card + Velvet Matte + Spot Red Foil"
  },
  {
    id: "gal_12",
    title: "Luxury Gold Foil debossed cards",
    category: "printing",
    imageUrl: "https://images.unsplash.com/photo-1606136968306-bf2f78358b57?auto=format&fit=crop&w=800&q=80",
    description: "Extraordinating 400 GSM heavy-weight textured stocks feature magnificent metallic gold-relief letterpress debossing.",
    badge: "Limited Run",
    techSpecs: "400 GSM Imperial Cotton Stock + Pure Gold debossing"
  },
  {
    id: "gal_2",
    title: "Large Scale Shop Backlit Flex Board",
    category: "outdoor",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    description: "Installed backlit outdoor flex advertisement for local Malviya Nagar outlet showing uniform light diffusion across banners.",
    badge: "Recent Order",
    techSpecs: "440 GSM Backlit Star Flex with Outdoor UV Inks"
  },
  {
    id: "gal_3",
    title: "High Precision Digital Printing Plotters",
    category: "mounting",
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5ebd3dc58393?auto=format&fit=crop&w=800&q=80",
    description: "A glimpse inside our South Delhi setup of massive width high-fidelity digital plotter executing detailed posters.",
    badge: "Our Studio",
    techSpecs: "Japanese Multi-Color Calibrated MicroPiezo Press"
  },
  {
    id: "gal_13",
    title: "Industrial Commercial Offset Color Check",
    category: "printing",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Continuous real-time alignment checks on our high-output machinery ensuring complete 100% CMYK ink coverage parameters.",
    badge: "HD Tech",
    techSpecs: "German Master Speed-Press Colorbar calibration"
  },
  {
    id: "gal_4",
    title: "Corporate Stationary & Mockups",
    category: "documents",
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    description: "Aligned corporate letterheads, document sheets, and envelopes printed using deep-black executive ink technology.",
    badge: "Bulk Order",
    techSpecs: "90 GSM Executive Bond + CMYK Vector Printing"
  },
  {
    id: "gal_5",
    title: "Fine Art & Typography Expo Posters",
    category: "printing",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    description: "Striking high-resolution posters printed for local gallery, demonstrating intense colors and contrast alignment.",
    techSpecs: "220 GSM Satin Photographic Sheets + Pigment Inks"
  },
  {
    id: "gal_14",
    title: "Abstract High-Impact Graphic Poster Prints",
    category: "printing",
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    description: "Vivid, intense pigment ink layout displaying sharp geometric graphics, customized for creative South Delhi portfolios.",
    badge: "Popular Showcase",
    techSpecs: "270 GSM Ultra Photo Matte Paper + 12-Ink print line"
  },
  {
    id: "gal_6",
    title: "Pre-cut Vinyl & Waterproof Branding Labels",
    category: "mounting",
    imageUrl: "https://images.unsplash.com/photo-1601153211116-624da6c271cf?auto=format&fit=crop&w=800&q=80",
    description: "Highly aesthetic circles and custom cutouts labels ready to use with splash-resistant outdoor backing.",
    techSpecs: "Glossy White Adhesive Polypropylene (PP) Sheet"
  },
  {
    id: "gal_15",
    title: "Laser-Engraved Merchandise Labels",
    category: "gifting",
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    description: "Custom thermal branding stickers and custom engraved substrates executing high edge contrast on metallic or hard surfaces.",
    badge: "Brand Gift Studio",
    techSpecs: "Matte-coating high contrast thermo-labels"
  },
  {
    id: "gal_7",
    title: "Double-Sided Aluminum Roll-up Standee",
    category: "mounting",
    imageUrl: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=800&q=80",
    description: "Premium roll up banner setup with stunning orange-and-blue high-fidelity branding print overlays. Fast self-assembling spring mechanics.",
    badge: "Popular Setup",
    techSpecs: "3ft x 6ft • 240 Micron non-tear synthetic paper • Heavy floor base"
  },
  {
    id: "gal_16",
    title: "Minimalist Document Catalogs & Booklets",
    category: "documents",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=800&q=80",
    description: "Clean, modern design catalogs and portfolio guides printed on heavy natural whites with perfect binding bounds.",
    badge: "Fresh Print",
    techSpecs: "130 GSM Recycled Silk Text + 300 GSM Hardback Cover"
  }
];

export const REVIEWS_DATA: CustomerReview[] = [
  {
    name: "Rahul Sharma",
    role: "Local Malviya Nagar Shopkeeper",
    text: "Extremely fast service and reliable offset standards. My glowing backlit business board and custom pamphlets were drafted and delivered on the very same day. Best in South Delhi!",
    stars: 5
  },
  {
    name: "Aman Gupta",
    role: "Freelance UI Designer",
    text: "Outstanding digital press! The vector CMYK precision on mySpot UV velvet visiting cards is incredibly crisp. The crew is highly supportive and very skilled.",
    stars: 5
  },
  {
    name: "Neha Verma",
    role: "College Student, South Delhi University",
    text: "Affordable student rates and friendly operators! They bounded my full 350-page spiral project in 10 minutes flat, printed color layouts, and laminated my diploma marks.",
    stars: 5
  }
];

export const GENERAL_INFO = {
  name: "DIGIMAX PRINTING",
  tagline: "Fast • Professional • Affordable Printing Solutions",
  address: "F2, Malviya Nagar, South Delhi – 110017",
  phone: "8287875040",
  email: "digimaxprints@gmail.com",
  timing: "Monday – Sunday | 9:00 AM – 9:00 PM",
  mapsLink: "https://maps.google.com/?q=F2,+Malviya+Nagar,+South+Delhi+110017"
};
