// Global type definitions for the application

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyType?: PropertyType;
  budget?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  message: string;
  rating: number;
  image?: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface ComparisonItem {
  feature: string;
  trusthome: boolean | string;
  traditional: boolean | string;
  description?: string;
}

export enum PropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  STUDIO = 'studio',
  COMMERCIAL = 'commercial',
  OTHER = 'other',
}

export enum ProjectStatus {
  PLANNING = 'planning',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ON_HOLD = 'on_hold',
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';