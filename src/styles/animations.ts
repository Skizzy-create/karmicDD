export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

export const floatingAnimation = {
    scale: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
    scaleReverse: {
        scale: [1.2, 1, 1.2],
        opacity: [0.5, 0.3, 0.5],
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};