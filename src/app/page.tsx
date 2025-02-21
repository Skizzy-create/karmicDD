// src/app/page.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TestimonialCard from '@/components/sections/TestimonicalCard';
import CTASection from '@/components/sections/CTA';
import LandingPage from '@/components/LandingPage';

const page = () => {
  return (
    <LandingPage />
  )
};

export default page;