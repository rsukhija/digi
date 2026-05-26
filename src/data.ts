import { ServiceCategory, GalleryItem, CustomerReview } from "./types";

export const SERVICES_DATA: Record<string, ServiceCategory> = {
  business: {
    title: "Digital & Business Printing",
    subtitle: "High precision branding collateral for offices, shops, startups & professionals",
    items: [
      {
        id: "visiting_cards",
        name: "Visiting Cards / Business Cards",
        description: "Make a striking first impression. Custom textures, weights, and premium foil finishes to represent your unique brand.",
        suitableFor: "Professionals, startup founders, sales executives",
        standardSize: "92mm x 54mm (with bleed)",
        options: ["350 GSM Art Card", "Soft Touch Matte Lamination", "Glossy Coating", "Spot UV Elements", "Velvet finish"]
      },
      {
        id: "letterheads",
        name: "Official Letterheads",
        description: "Official documents look standard on thick Executive letterheads with high-definition color printing.",
        suitableFor: "Corporate communications, invoices, official letters",
        standardSize: "Standard A4 (210mm x 297mm)",
        options: ["100 GSM Alabaster Bond", "120 GSM Royal Executive Bond", "Prism-sharp ink technology"]
      },
      {
        id: "bill_books",
        name: "Custom Bill Books / Invoices",
        description: "Tailored cash memos, receipt sheets, and invoice books with neat numbering alignments.",
        suitableFor: "Retail shops, distributors, wholesalers, agencies",
        standardSize: "A5 (148mm x 210mm) or A4",
        options: ["Duplicate (1+1 Carbonless NCR)", "Triplicate (1+2 NCR)", "Premium bound padding", "Serial numbers"]
      },
      {
        id: "id_cards",
        name: "Corporate ID Cards",
        description: "High-grade plastic cards with fade-resistant thermal print lines and customized colorful lanyards.",
        suitableFor: "School staff, offices, events, colleges",
        standardSize: "Standard Credit Card Size (85.6mm x 54mm)",
        options: ["PVC Hard Card", "Gloss or Satin Finish", "Barcode/QR ready", "Custom 12mm / 20mm Lanyards"]
      },
      {
        id: "stickers",
        name: "Product & Barcode Stickers",
        description: "Clean adhesive labels, perfectly contour cut. Splash-resistant properties for beautiful jars, parcels, and tags.",
        suitableFor: "E-commerce boxes, custom bottles, glass jars, branding",
        standardSize: "Custom Sizes (Circle, Square, Rectangular, Die-cut)",
        options: ["Glossy Chromo paper", "Waterproof Matte Vinyl", "Transparent film adhesive", "Easy-peel sheet layout"]
      }
    ]
  },
  large_format: {
    title: "Large Format & Banner Printing",
    subtitle: "Massive scale displays designed to stay sharp, vibrant, and weather-proof",
    items: [
      {
        id: "flex_printing",
        name: "High-Gloss Flex Printing",
        description: "Budget-friendly large-scale shop front banners and billboards. Vibrant reproduction with robust backing.",
        suitableFor: "Shop sign boards, commercial billboards, announcements",
        standardSize: "Custom (up to 10 feet seamless width, length infinite)",
        options: ["Standard Flex (Normal Quality)", "Star Flex (High Grade Glossy Substrate)", "Backlit Media for glowing setups"]
      },
      {
        id: "banner_printing",
        name: "Event & Exhibition Banners",
        description: "Clean vertical roll-up standees and promotional banners for indoor/outdoor events. Quick setups, easy travel.",
        suitableFor: "Seminars, product launches, retail store entries",
        standardSize: "Roll-up Standee size (3ft x 6ft or 2.5ft x 5ft)",
        options: ["Matte banner film", "Standard aluminium frames", "Heavy premium base stands", "Double sided displays"]
      },
      {
        id: "posters",
        name: "Indoor Premium Posters",
        description: "Artistic, crisp prints on glossy photographic papers. Rich wide-gamut colors to make illustrations stand out.",
        suitableFor: "Office wall decor, movie posters, educational charts",
        standardSize: "A3 (297mm x 420mm) or 12x18 inches",
        options: ["220 GSM Photo Paper (Glossy)", "250 GSM Synthetic Non-Tear Matte Paper", "Foambard backing mounting"]
      },
      {
        id: "vinyl_printing",
        name: "Waterproof Vinyl Printing",
        description: "Self-adhesive high-resolution vinyl prints for windows, walls, and vehicle wraps. Sun and scratch resistant.",
        suitableFor: "Glass partition decoration, shop walls, car/bike decals",
        standardSize: "Custom scaling as per site measurement",
        options: ["Matte or Gloss Vinyl", "Frosted glass finish vinyl", "One-way vision mesh perforation"]
      }
    ]
  },
  documents: {
    title: "Document & Office Services",
    subtitle: "Fast-setup standard solutions for students, lawyers, offices, and project files",
    items: [
      {
        id: "photocopy",
        name: "Bulk Monochrome/Color Photocopy",
        description: "Instant document double-sided copying with deep text rendering. Automatic feeder setups for fast processing.",
        suitableFor: "Syllabus files, exam papers, legal cases, documentation",
        standardSize: "A4, Letter, legal, A3",
        options: ["75 GSM Premium Maplitho", "Fast collating speeds", "Staple / Clip packaging option"]
      },
      {
        id: "color_printing",
        name: "High Definition Color Printing",
        description: "Superb color fidelity for graphs, slide prints, portfolio decks, and photo files on premium coated papers.",
        suitableFor: "Project reports, proposals, financial charts, booklets",
        standardSize: "A4 or A3 sizes available",
        options: ["100 GSM superwhite paper", "130 GSM matte coated card", "Two-sided color alignment duplex"]
      },
      {
        id: "scanning",
        name: "High Speed Document Scanning",
        description: "Convert high volumes of physical files into highly search-optimized PDF files or high-quality image packs.",
        suitableFor: "Digital archiving, cloud backups, legal file processing",
        standardSize: "Up to A3 formats",
        options: ["Compact PDF formatting", "600 DPI High-resolution optical scan", "Direct Email/USB transfers"]
      },
      {
        id: "lamination",
        name: "Thermal Protective Lamination",
        description: "Hot laminating pouches to shield highly vital certificates and identity sheets from air, dampness, and wrinkles.",
        suitableFor: "Mark sheets, degrees, maps, ID cards, business certificates",
        standardSize: "A4, ID size, A3",
        options: ["125 Micron thick pouches", "Matte clear touch", "Waterproof borders lock"]
      },
      {
        id: "spiral_binding",
        name: "Spiral & Comb Binding",
        description: "Neat bindings for catalogs, projects, accounts, and presentation documents. Includes clean glass translucent fronts.",
        suitableFor: "College reports, training guides, annual balance sheets",
        standardSize: "Fits any custom sheets range up to A3",
        options: ["Plastic spiral loop", "Hardbound golden embossing", "Soft comb spine"]
      }
    ]
  },
  design: {
    title: "Creative Graphic Design",
    subtitle: "Work with expert designers to build striking visuals, ready for flawless printing",
    items: [
      {
        id: "graphic_designing",
        name: "Layout & Print Graphics Design",
        description: "In-shop custom page layout arranging, font pairing, and resolution enhancements for pixel-perfect printing.",
        suitableFor: "Brochures, catalog layouts, corporate profiles",
        standardSize: "Custom dimensions based on print selection",
        options: ["Full vector output", "Color-calibrated in CMYK", "In-person modification reviews in South Delhi office"]
      },
      {
        id: "logo_design",
        name: "Custom Logo Design",
        description: "Unique, modern brand marks drafted by print-aware designers. Highly scalable vector formats ready for any size print.",
        suitableFor: "New startups, retail shops, corporate rebranding",
        standardSize: "Vector Scalable Format (AI, CDR, SVG, PDF)",
        options: ["3 Initial design directions", "Unlimited typography refinements", "Print & Screen guidelines guide"]
      },
      {
        id: "social_posters",
        name: "Social Media & Flyer Graphics",
        description: "Eye-catching banner designs for festivals, product features, and announcements optimized for Instagram, WhatsApp & Facebook.",
        suitableFor: "Local brand marketing, digital events, offers",
        standardSize: "1080px x 1080px Square / 9:16 Portrait story layout",
        options: ["Static digital designs", "Ready-to-print flyer counterpart files"]
      },
      {
        id: "invitation_cards",
        name: "Premium Invitation Cards",
        description: "Elegantly stylized layouts for weddings, corporate openings, house-warmings, and birthday events. Personalized themes.",
        suitableFor: "Parties, weddings, corporate launches, anniversaries",
        standardSize: "Standard card shapes (5x7 inches landscape/portrait)",
        options: ["Custom floral or geometric themes", "Hindi & English lettering alignment"]
      }
    ]
  }
};

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal_1",
    title: "Minimalist Red Foil Accent Cards",
    category: "visiting_cards",
    imageUrl: "https://images.unsplash.com/photo-1589149021833-28929e578f7e?auto=format&fit=crop&w=700&q=80",
    description: "Premium double-sided matte black cards showing deep hot-stamp metallic foil overlays on 350 GSM cards.",
    badge: "Staff Pick",
    techSpecs: "350 GSM Art Card + Velvet Matte + Spot Red Foil"
  },
  {
    id: "gal_12",
    title: "Luxury Gold Foil debossed cards",
    category: "visiting_cards",
    imageUrl: "https://images.unsplash.com/photo-1606136968306-bf2f78358b57?auto=format&fit=crop&w=800&q=80",
    description: "Extraordinating 400 GSM heavy-weight textured stocks feature magnificent metallic gold-relief letterpress debossing.",
    badge: "Limited Run",
    techSpecs: "400 GSM Imperial Cotton Stock + Pure Gold debossing"
  },
  {
    id: "gal_2",
    title: "Large Scale Shop Backlit Flex Board",
    category: "flex_banner",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    description: "Installed backlit outdoor flex advertisement for local Malviya Nagar outlet showing uniform light diffusion across banners.",
    badge: "Recent Order",
    techSpecs: "440 GSM Backlit Star Flex with Outdoor UV Inks"
  },
  {
    id: "gal_3",
    title: "High Precision Digital Printing Plotters",
    category: "machinery",
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5ebd3dc58393?auto=format&fit=crop&w=700&q=80",
    description: "A glimpse inside our South Delhi setup of massive width high-fidelity digital plotter executing detailed posters.",
    badge: "Our Studio",
    techSpecs: "Japanese Multi-Color Calibrated MicroPiezo Press"
  },
  {
    id: "gal_13",
    title: "Industrial Commercial Offset Color Check",
    category: "machinery",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Continuous real-time alignment checks on our high-output machinery ensuring complete 100% CMYK ink coverage parameters.",
    badge: "HD Tech",
    techSpecs: "German Master Speed-Press Colorbar calibration"
  },
  {
    id: "gal_4",
    title: "Corporate Stationary & Mockups",
    category: "document",
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=700&q=80",
    description: "Aligned corporate letterheads, document sheets, and envelopes printed using deep-black executive ink technology.",
    badge: "Bulk Order",
    techSpecs: "90 GSM Executive Bond + CMYK Vector Printing"
  },
  {
    id: "gal_5",
    title: "Fine Art & Typography Expo Posters",
    category: "posters",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    description: "Striking high-resolution posters printed for local gallery, demonstrating intense colors and contrast alignment.",
    techSpecs: "220 GSM Satin Photographic Sheets + Pigment Inks"
  },
  {
    id: "gal_14",
    title: "Abstract High-Impact Graphic Poster Prints",
    category: "posters",
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    description: "Vivid, intense pigment ink layout displaying sharp geometric graphics, customized for creative South Delhi portfolios.",
    badge: "Popular Showcase",
    techSpecs: "270 GSM Ultra Photo Matte Paper + 12-Ink print line"
  },
  {
    id: "gal_6",
    title: "Pre-cut Vinyl & Waterproof Branding Labels",
    category: "stickers",
    imageUrl: "https://images.unsplash.com/photo-1601153211116-624da6c271cf?auto=format&fit=crop&w=700&q=80",
    description: "Highly aesthetic circles and custom cutouts labels ready to use with splash-resistant outdoor backing.",
    techSpecs: "Glossy White Adhesive Polypropylene (PP) Sheet"
  },
  {
    id: "gal_15",
    title: "Laser-Engraved Merchandise & Promotional Labels",
    category: "stickers",
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    description: "Custom thermal branding stickers and custom engraved substrates executing high edge contrast on metallic or hard surfaces.",
    badge: "Brand Gift Studio",
    techSpecs: "Matte-coating high contrast thermo-labels"
  },
  {
    id: "gal_7",
    title: "Double-Sided Aluminum Roll-up Standee",
    category: "standee",
    imageUrl: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=700&q=80",
    description: "Premium roll up banner setup with stunning orange-and-blue high-fidelity branding print overlays. Fast self-assembling spring mechanics.",
    badge: "Popular Setup",
    techSpecs: "3ft x 6ft • 240 Micron non-tear synthetic paper • Heavy floor base"
  },
  {
    id: "gal_8",
    title: "Desk Mini-Table Standee",
    category: "standee",
    imageUrl: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=80",
    description: "Bright custom tabletop menu or promo board with high-impact yellow and pink gradient designs, displayed in heavy acrylic border casing.",
    badge: "Counter Fav",
    techSpecs: "A5 Standard • 350 GSM Gloss Art Board + Premium Acrylic T-Holder"
  },
  {
    id: "gal_9",
    title: "Premium Pinewood Easel Board",
    category: "standee",
    imageUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=700&q=80",
    description: "Artistic wooden easel tripod holding high-end dark gold corporate poster. Adds high prestige value to entrances, salons, or launch events.",
    badge: "Exclusive Choice",
    techSpecs: "5ft Height Pinewood • 5mm foam core board • Waterproof Matte Lamination"
  },
  {
    id: "gal_16",
    title: "Minimalist Document Catalogs & Booklets",
    category: "document",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=800&q=80",
    description: "Clean, modern design catalogs and portfolio guides printed on heavy natural whites with perfect binding bounds.",
    badge: "Fresh Print",
    techSpecs: "130 GSM Recycled Silk Text + 300 GSM Hardback Cover"
  },
  {
    id: "gal_10",
    title: "Custom Promotional Roll-up Standiy",
    category: "standee",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80",
    description: "Highly durable corporate promotional standiy featuring a solid retractable aluminum base stand and premium wide-gamut plotting print.",
    badge: "New Standiy",
    techSpecs: "3ft x 6ft • Heavy Duty Deluxe Standiy Base • Anti-Curl Waterproof Sheet"
  },
  {
    id: "gal_11",
    title: "Exhibition Event Standiy Banner",
    category: "standee",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80",
    description: "Pristine vertical standiy layout designed for business fairs and local store launch campaign requirements.",
    badge: "Fast Delivery",
    techSpecs: "2.5ft x 5ft • Lightweight Portable Alloy Housing • UV-Ink Non-fading Overlay"
  }
];

export const REVIEWS_DATA: CustomerReview[] = [
  {
    name: "Rahul Sharma",
    role: "Local Malviya Nagar Shopkeeper",
    text: "Very fast service and excellent print quality. I got some urgent promotion flyers printed on the same day. Highly recommended digital printers in South Delhi!",
    stars: 5
  },
  {
    name: "Aman Gupta",
    role: "Freelance UI Designer",
    text: "Simply the best printing shop in Malviya Nagar. Extremely supportive staff, and their vector CMYK color rendering for my visiting cards is perfectly crisp.",
    stars: 5
  },
  {
    name: "Neha Verma",
    role: "College Student, South Delhi University",
    text: "Affordable rates and professional work! They processed my spiral-bound college project work in 10 minutes and laminated my certificates perfectly.",
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
