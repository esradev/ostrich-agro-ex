export type Language = 'fa' | 'ar' | 'en';

export type PageId = 
  | 'home' 
  | 'value-chain' 
  | 'products' 
  | 'nutrition' 
  | 'export' 
  | 'rfq' 
  | 'certificates' 
  | 'contact';

export interface ProductItem {
  id: string;
  category: 'meat' | 'oil' | 'leather' | 'feathers' | 'eggs';
  image: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  specifications: Record<Language, { label: string; value: string }[]>;
  packaging: Record<Language, string>;
  grades: string[];
  certifications: string[];
  unit: Record<Language, string>;
  basePriceUsd: number;
}

export interface ValueChainStep {
  stepNumber: string;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  summary: Record<Language, string>;
  details: Record<Language, string[]>;
  metrics: {
    label: Record<Language, string>;
    value: string;
  }[];
  standards: string[];
}

export interface ExportDestination {
  id: string;
  region: Record<Language, string>;
  country: Record<Language, string>;
  ports: string[];
  transitTime: Record<Language, string>;
  dominantProducts: Record<Language, string>;
  regulation: Record<Language, string>;
}

export interface NutritionalComparison {
  name: Record<Language, string>;
  calories: number; // per 100g
  fat: number; // grams
  cholesterol: number; // mg
  protein: number; // grams
  iron: number; // mg
}
