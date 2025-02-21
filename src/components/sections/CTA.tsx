'use client'

// src/components/sections/CTA.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/styles/animations';

const CTASection = () => (
    <motion.section
        className="py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900" />

        <motion.div
            className="absolute inset-0"
            animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
            }}
            style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%)',
                backgroundSize: '100% 100%'
            }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                variants={fadeInUp}
            >
                Ready to Transform Your Data?
            </motion.h2>
            <motion.p
                className="text-xl mb-8 text-purple-200 max-w-2xl mx-auto"
                variants={fadeInUp}
            >
                Join innovative companies leveraging our AI-powered analytics platform.
            </motion.p>
            <motion.div
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-4 justify-center"
            >
                <motion.button
                    className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Free Trial
                </motion.button>
                <motion.button
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Schedule Demo
                </motion.button>
            </motion.div>
        </div>
    </motion.section>
);

export default CTASection;