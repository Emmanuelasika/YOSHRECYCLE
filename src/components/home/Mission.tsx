"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MissionProps {
    title?: string;
    stat1Value?: string;
    stat1Label?: string;
    stat2Value?: string;
    stat2Label?: string;
}

export function Mission({
    title = "To rid Nigeria of plastic waste, one state at a time. We believe waste is a <span class='text-[#63C14B]'>design flaw</span>, not an inevitability.",
    stat1Value = "350+ Tons",
    stat1Label = "Plastic recoverd annually from local communities.",
    stat2Value = "Zero Cost",
    stat2Label = "Free collection for households and businesses.",
}: MissionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section ref={ref} id="mission" className="py-32 px-[5vw] bg-neutral-50 text-black min-h-[80vh] flex items-center">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3">
                        <span className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Our Mission</span>
                        <div className="h-px w-full bg-neutral-200"></div>
                    </div>

                    <div className="md:w-2/3">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="mt-12 grid grid-cols-2 gap-8 max-w-lg"
                        >
                            <div>
                                <h4 className="font-bold mb-2">{stat1Value}</h4>
                                <p className="text-sm text-neutral-500">{stat1Label}</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{stat2Value}</h4>
                                <p className="text-sm text-neutral-500">{stat2Label}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
