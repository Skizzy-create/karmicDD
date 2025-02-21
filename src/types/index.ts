// src/types/index.ts
import { LucideIcon } from 'lucide-react';

export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    rating: number;
}

export interface PricingTier {
    tier: string;
    price: string;
    features: string[];
    recommended?: boolean;
}