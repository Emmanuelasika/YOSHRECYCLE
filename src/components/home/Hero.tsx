"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
    titlePart1?: string;
    titleHighlight?: string;
    titlePart2?: string;
    subtitle?: string;
    videoUrl?: string;
    ctaPrimaryLabel?: string;
    ctaPrimaryLink?: string;
    ctaSecondaryLabel?: string;
    ctaSecondaryLink?: string;
}

export function Hero({
    titlePart1 = "Community",
    titleHighlight = "Powered",
    titlePart2 = "Recycling",
    subtitle = "We are a community powered plastic recycling initiative. We collect at source, reduce waste, and protect the planet.",
    videoUrl = "/assets/videos/video-2.mp4",
    ctaPrimaryLabel = "Our Mission",
    ctaPrimaryLink = "/about",
    ctaSecondaryLabel = "Sponsor a Bag",
    ctaSecondaryLink = "/sponsor",
}: HeroProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Render title with split parts
    const renderTitle = () => {
        return (
            <>
                {titlePart1} <br />
                <span className="text-[#63C14B]">{titleHighlight}</span> <br />
                {titlePart2}
            </>
        )
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Parallax Video Container */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>

                {/* Darker Overlay - 70% Opacity */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>

                {/* Grain overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay z-20"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-[7vw] leading-[1.0] md:leading-[0.9] font-bold text-white tracking-tighter uppercase mb-6 md:mb-8"
                >
                    {renderTitle()}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white/80 text-base md:text-xl font-light tracking-wide max-w-2xl mb-8 md:mb-10 px-4"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
                >
                    <a href={ctaPrimaryLink} className="px-8 py-4 bg-[#63C14B] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#52a33d] transition-colors rounded-full w-full sm:w-auto">
                        {ctaPrimaryLabel}
                    </a>
                    <a href={ctaSecondaryLink} className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all rounded-full w-full sm:w-auto">
                        {ctaSecondaryLabel}
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer z-30"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
