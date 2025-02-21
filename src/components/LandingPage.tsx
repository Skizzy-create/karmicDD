"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, Facebook, Twitter, Linkedin, BarChart2, Layout, FileText, ArrowRight, Star } from 'lucide-react';

// Enhanced animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

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
                    {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white/80 hover:text-purple-400 transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
};

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
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
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
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
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

const AboutSection = () => {
    const stats = [
        { label: "Active Users", value: "10K+" },
        { label: "Data Points", value: "1M+" },
        { label: "Accuracy Rate", value: "99.9%" },
        { label: "Response Time", value: "<0.1s" }
    ];

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
                            {stats.map((stat, index) => (
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
                            <img
                                src="/api/placeholder/600/600"
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

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        variants={fadeInUp}
        className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
        whileHover={{ y: -5 }}
    >
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Icon className="text-white w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const FeaturesSection = () => {
    const features = [
        {
            title: "Real-Time Analytics",
            description: "Monitor key metrics and trends as they happen with our intuitive dashboard.",
            icon: BarChart2
        },
        {
            title: "Intelligent Interface",
            description: "Navigate through complex data with ease using our AI-powered design.",
            icon: Layout
        },
        {
            title: "Custom Reports",
            description: "Generate detailed, tailored reports that align with your business needs.",
            icon: FileText
        }
    ];

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
                    <h2 className="text-4xl font-bold mb-4 text-white">Powerful Features</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to transform your data into actionable insights
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const TestimonialCard = ({ quote, author, role, rating }) => (
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
            <img
                src="/api/placeholder/48/48"
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

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "KarmicDD has revolutionized how we handle data. The insights we get are invaluable.",
            author: "Alex Brown",
            role: "CTO, Innovate Inc.",
            rating: 5
        },
        {
            quote: "The real-time analytics have transformed how we operate. We can now respond instantly.",
            author: "Sarah Chen",
            role: "CEO, TechFlow",
            rating: 5
        },
        {
            quote: "Outstanding support and a product that delivers. Highly recommended!",
            author: "Michael Roberts",
            role: "Director, DataCorp",
            rating: 5
        }
    ];

    return (
        <motion.section
            className="py-24 bg-black/95"
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
                    <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their business with KarmicDD
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const PricingCard = ({ tier, price, features, recommended = false }) => (
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

const PricingSection = () => {
    const pricingTiers = [
        {
            tier: "Starter",
            price: "49",
            features: [
                "Up to 5 team members",
                "Basic analytics dashboard",
                "24/7 email support",
                "1GB data storage"
            ]
        },
        {
            tier: "Professional",
            price: "99",
            features: [
                "Up to 20 team members",
                "Advanced analytics suite",
                "Priority support",
                "10GB data storage",
                "Custom report builder"
            ],
            recommended: true
        },
        {
            tier: "Enterprise",
            price: "249",
            features: [
                "Unlimited team members",
                "Full analytics platform",
                "Dedicated support team",
                "Unlimited storage",
                "Custom integration",
                "API access"
            ]
        }
    ];

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
                    {pricingTiers.map((tier, index) => (
                        <PricingCard key={index} {...tier} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const CTASection = () => (
    <motion.section
        className="py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900" />

        {/* Animated background elements */}
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

const Footer = () => (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-8">
                <div>
                    <motion.div
                        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        KarmicDD
                    </motion.div>
                    <p className="text-gray-400">
                        Empowering businesses with intelligent data solutions.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-lg">Product</h3>
                    <ul className="space-y-2">
                        {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                            <li key={item}>
                                <motion.a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-lg">Company</h3>
                    <ul className="space-y-2">
                        {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                            <li key={item}>
                                <motion.a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-lg">Stay Updated</h3>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:border-purple-500"
                        />
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400">© 2025 KarmicDD. All rights reserved.</p>
                    <div className="flex space-x-6">
                        {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
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

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <TestimonialsSection />
            <PricingSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;