'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/styles/animations';
import { STATS } from '@/constants/stats';

const AboutSection = () => {
    return (
        <motion.section
            className="py-24 bg-black/95"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl font-bold mb-6 text-white">About KarmicDD</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            At KarmicDD, we believe in the transformative power of data.
                            Our AI-driven platform delivers real-time insights that empower
                            businesses to make informed decisions and stay ahead in today's
                            competitive landscape.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10"
                                    whileHover={{ y: -2, scale: 1.02 }}
                                >
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-400">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            {/* Replace placeholder with an actual image */}
                            <img
                                src="/assets/images/dashboard-preview.jpg" // Move this image to public/assets/images/
                                alt="Dashboard Preview"
                                className="rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
