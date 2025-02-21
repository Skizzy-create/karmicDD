'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/styles/animations';
import FeatureCard from '@/components/ui/FeatureCard';
import { BarChart2, Layout, FileText } from 'lucide-react';

const FeaturesSection = () => (
    <motion.section
        className="py-24 bg-gray-50"
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
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Powerful Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Everything you need to transform your data into actionable insights.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: 'Real-Time Analytics',
                        description:
                            'Monitor key metrics and trends as they happen with our intuitive dashboard.',
                        icon: BarChart2,
                    },
                    {
                        title: 'User-Friendly Interface',
                        description:
                            'Navigate through complex data with ease using our streamlined design.',
                        icon: Layout,
                    },
                    {
                        title: 'Customizable Reports',
                        description:
                            'Generate detailed, tailored reports that align with your business needs.',
                        icon: FileText,
                    },
                ].map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    </motion.section>
);

export default FeaturesSection;
