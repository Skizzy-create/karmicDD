
// src/components/ui/PricingCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeInUp } from '@/styles/animations';

interface PricingCardProps {
    tier: string;
    price: string;
    features: string[];
    recommended?: boolean;
}

const PricingCard = ({ tier, price, features, recommended = false }: PricingCardProps) => (
    <motion.div
        variants={fadeInUp}
        className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative border ${recommended ? 'border-purple-500' : 'border-white/10'
            }`}
        whileHover={{ y: -5 }}
    >
        {recommended && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm">
                Recommended
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
        <div className="mb-6">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ${price}
            </span>
            <span className="text-gray-400">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400">
                    <ChevronRight className="text-purple-400" size={16} />
                    {feature}
                </li>
            ))}
        </ul>
        <motion.button
            className={`w-full py-3 rounded-lg font-semibold ${recommended
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/20'
                : 'bg-white/10 text-white hover:bg-white/20'
                } transition-all`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            Get Started
        </motion.button>
    </motion.div>
);

export default PricingCard;