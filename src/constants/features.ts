import { BarChart2, Layout, FileText } from 'lucide-react';

export const FEATURES = [
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

export const TESTIMONIALS = [
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

export const PRICING_TIERS = [
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