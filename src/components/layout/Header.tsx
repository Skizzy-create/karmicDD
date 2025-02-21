'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/styles/animations';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
                }`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    className="text-2xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                >
                    KarmicDD
                </motion.div>
                <div className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="text-white/80 hover:text-purple-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
