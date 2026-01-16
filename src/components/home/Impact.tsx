"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImpactStat {
    val: string;
    label: string;
}

interface ImpactProps {
    title?: string;
    subtitle?: string;
    stats?: ImpactStat[];
}

export function Impact({
    title = "Real <br /> <span class='text-[#63C14B]'>Numbers</span>.",
    subtitle = "Measurable impact on our environment and our local economy.",
    stats = [
        { val: "205k+", label: "Plastics Collected (kg)" },
        { val: "5k+", label: "Homes Satisfied" },
        { val: "25+", label: "Industries Served" },
    ]
}: ImpactProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section ref={ref} className="py-40 px-[5vw] bg-[#0A0A0A] text-white overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#63C14B] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-[6vw] leading-[0.9] font-bold tracking-tighter uppercase mb-12"
                            dangerouslySetInnerHTML={{ __html: title }}
                        >
                        </motion.h2>
                        <p className="text-xl text-neutral-400 max-w-md">
                            {subtitle}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {stats.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="border-b border-white/20 pb-8"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl md:text-8xl font-bold font-mono text-transparent stroke-white" style={{ WebkitTextStroke: "2px #fff" }}>
                                        {item.val}
                                    </span>
                                </div>
                                <p className="text-sm uppercase tracking-widest text-[#63C14B] mt-2 font-bold">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
