'use client'

// src/components/sections/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '@/constants/features';
import { fadeInUp, staggerContainer } from '@/styles/animations';
import PricingCard from '../ui/PricingCard';

const PricingSection = () => {
    return (
        <motion.section
            className="py-24 bg-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {PRICING_TIERS.map((tier, index) => (
                        <PricingCard key={index} {...tier} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default PricingSection;