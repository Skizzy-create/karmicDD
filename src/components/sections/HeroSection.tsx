'use client'

// src/components/sections/Hero.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { fadeInUp, floatingAnimation, staggerContainer } from '@/styles/animations';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <motion.section
            className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Animated Background */}
            <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        ...floatingAnimation.scaleReverse,
                        transition: {
                            ...floatingAnimation.scaleReverse.transition,
                            repeatType: "reverse"
                        }
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        ...floatingAnimation.scaleReverse,
                        transition: {
                            ...floatingAnimation.scaleReverse.transition,
                            repeatType: "reverse"
                        }
                    }}
                />
            </motion.div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6"
                    variants={fadeInUp}
                >
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Transform Your Data
                    </span>
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-8 text-white/80"
                    variants={fadeInUp}
                >
                    Harness the power of data-driven decisions with advanced analytics
                </motion.p>
                <motion.div
                    className="flex flex-col md:flex-row justify-center gap-6"
                    variants={fadeInUp}
                >
                    <motion.button
                        className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Journey
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                        className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play size={20} className="group-hover:scale-110 transition-transform" />
                        Watch Demo
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;