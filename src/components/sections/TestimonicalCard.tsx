'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp } from '@/styles/animations';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    rating: number;
}

const TestimonialCard = ({ quote, author, role, rating }: TestimonialCardProps) => (
    <motion.div
        variants={fadeInUp}
        className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
        whileHover={{ y: -5 }}
    >
        <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="text-purple-400 fill-current" size={20} />
            ))}
        </div>
        <p className="italic text-gray-400 mb-6">{quote}</p>
        <div className="flex items-center gap-4">
            {/* Replace placeholder with an actual avatar */}
            <img
                src="/assets/images/avatar-sample.jpg" // Move this image to public/assets/images/
                alt={author}
                className="w-12 h-12 rounded-full"
            />
            <div>
                <p className="font-semibold text-white">{author}</p>
                <p className="text-purple-400">{role}</p>
            </div>
        </div>
    </motion.div>
);

export default TestimonialCard;
