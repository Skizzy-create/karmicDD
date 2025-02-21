// src/components/ui/FeatureCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/styles/animations';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <motion.div
        variants={fadeInUp}
        className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl border border-black/10 hover:border-purple-500/50 transition-colors"
        whileHover={{ y: -5 }}
    >
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Icon className="text-white w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-black">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

export default FeatureCard;