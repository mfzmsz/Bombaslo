export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export interface Feature {
  name: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  features: string[];
  detailedFeatures: Feature[];
  stats: Stat[];
  image: string;
  category: string;
}