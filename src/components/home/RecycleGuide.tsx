"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GuideItem {
    num: string;
    action: string;
    desc: string;
    color: string;
    img: string;
}

interface RecycleGuideProps {
    titlePrefix?: string;
    titleHighlight?: string;
    subtitle?: string;
    guidesList?: GuideItem[];
}

export function RecycleGuide({
    titlePrefix = "How To",
    titleHighlight = "Prepare",
    subtitle = "3 simple steps to ensure your plastic waste is ready for a new life.",
    guidesList = [
        {
            num: "01",
            action: "Drain",
            desc: "Empty all liquid contents. Clean bottles ensure 100% recyclability and prevent contamination.",
            color: "bg-blue-500",
            img: "/assets/images/recycle_drain_black.png"
        },
        {
            num: "02",
            action: "Squash",
            desc: "Crush the bottle flat. This saves 3x the space in your bin and our collection trucks.",
            color: "bg-orange-500",
            img: "/assets/images/recycle_squash_black.png"
        },
        {
            num: "03",
            action: "Cap On",
            desc: "Put the cap back on after squashing. We recycle both the bottle (PET) and the cap (HDPE).",
            color: "bg-[#63C14B]",
            img: "/assets/images/recycle_cap_black.png"
        },
    ]
}: RecycleGuideProps) {
    return (
        <section className="py-40 px-6 bg-[#F5F5F7] text-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
                            {titlePrefix} <br />
                            <span className="text-[#63C14B]">{titleHighlight}</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-neutral-500 max-w-sm text-right md:text-right"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guidesList.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative bg-white border border-black/5 hover:border-black/20 transition-all duration-500 overflow-hidden flex flex-col h-[600px]"
                        >
                            {/* Image Section */}
                            <div className="relative h-[300px] w-full overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.action}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col justify-between flex-1 relative bg-white z-10">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-6xl font-bold text-neutral-200 group-hover:text-black/5 transition-colors font-mono">
                                            {item.num}
                                        </span>
                                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                    </div>

                                    <h3 className="text-4xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {item.action}
                                    </h3>
                                    <p className="text-lg text-neutral-500 leading-relaxed border-l-2 border-transparent group-hover:border-[#63C14B] pl-0 group-hover:pl-4 transition-all duration-300">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Decorative Corner inside content */}
                                <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#F5F5F7] rounded-tl-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
