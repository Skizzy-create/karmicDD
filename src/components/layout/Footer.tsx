'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const socialLinks = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
    };

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-8">
                    {/* Brand and Description */}
                    <div>
                        <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            KarmicDD
                        </motion.div>
                        <p className="text-gray-400">
                            Empowering businesses with intelligent data solutions.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Product</h3>
                        <ul className="space-y-2">
                            {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Company</h3>
                        <ul className="space-y-2">
                            {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:border-blue-500"
                            />
                            <motion.button
                                className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Footer Image */}
                <div className="mb-8">
                    <img
                        src="/public/footer-image.jpg" // Place this image in your `public` folder
                        alt="Footer Illustration"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Social Media Links */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">© 2025 KarmicDD. All rights reserved.</p>
                        <div className="flex space-x-6">
                            {[
                                { Icon: Facebook, link: socialLinks.facebook },
                                { Icon: Twitter, link: socialLinks.twitter },
                                { Icon: Linkedin, link: socialLinks.linkedin },
                            ].map(({ Icon, link }, index) => (
                                <motion.a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
