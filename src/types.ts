export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  suitableFor: string;
  standardSize: string;
  options: string[];
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  badge?: string;
  techSpecs?: string;
}

export interface AiPlanResult {
  title: string;
  slogans: string[];
  paperType: string;
  finishType: string;
  dimensions: string;
  aestheticVibe: string;
  designBrief: string;
  isDemo?: boolean;
}

export interface CustomerReview {
  name: string;
  role?: string;
  text: string;
  stars: number;
}
