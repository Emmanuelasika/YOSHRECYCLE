"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface SponsorCtaProps {
    titlePart1?: string;
    titleHighlight?: string;
    titlePart2?: string;
    description?: string;
    badgeValue?: string;
    badgeLabel?: string;
    image?: string;
    primaryBtnLabel?: string;
    primaryBtnLink?: string;
    secondaryBtnLabel?: string;
    secondaryBtnLink?: string;
}

export function SponsorCta({
    titlePart1 = "Sponsor A",
    titleHighlight = "Brand Bag",
    titlePart2 = "Campaign",
    description = "<strong>Make a visible impact.</strong><br /> Your sponsorship provides branded collection bags to households and schools, directly removing plastic from the environment while promoting your commitment to sustainability.",
    badgeValue = "50kg+",
    badgeLabel = "Plastic Capacity",
    image = "/assets/images/yosh_bag_real_v2.png",
    primaryBtnLabel = "Sponsor Now",
    primaryBtnLink = "/sponsor",
    secondaryBtnLabel = "See Impact",
    secondaryBtnLink = "/about"
}: SponsorCtaProps) {
    return (
        <section className="py-32 px-6 bg-[#090909] text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/assets/images/noise.svg')] z-0 mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Visual / Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group order-2 lg:order-1"
                >
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
                        <div className="absolute inset-0 bg-[#63C14B]/10 mix-blend-overlay z-10"></div>
                        <Image
                            src={image}
                            alt="Yosh Branded Recycling Bag"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl z-20">
                            <div className="text-[#63C14B] font-bold text-3xl font-mono leading-none mb-1">{badgeValue}</div>
                            <div className="text-[10px] text-white/80 uppercase tracking-widest font-medium">{badgeLabel}</div>
                        </div>
                    </div>

                    {/* Glow effect behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#63C14B]/20 blur-[100px] -z-10 rounded-full"></div>
                </motion.div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#63C14B] font-mono text-xs tracking-wider mb-8">
                            CORPORATE SOCIAL RESPONSIBILITY
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
                            {titlePart1} <br />
                            <span className="text-[#63C14B]">{titleHighlight}</span> <br />
                            {titlePart2}
                        </h2>

                        <p className="text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={primaryBtnLink}
                                className="group bg-[#63C14B] text-black px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest hover:bg-[#52a33d] transition-all flex items-center justify-center gap-3"
                            >
                                {primaryBtnLabel}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={secondaryBtnLink}
                                className="group bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center"
                            >
                                {secondaryBtnLabel}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
