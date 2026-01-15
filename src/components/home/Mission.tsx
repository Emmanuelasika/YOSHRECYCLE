"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Mission() {
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
                        >
                            To rid the world of plastic waste, one state at a time. We believe waste is a <span className="text-[#63C14B]">design flaw</span>, not an inevitability.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="mt-12 grid grid-cols-2 gap-8 max-w-lg"
                        >
                            <div>
                                <h4 className="font-bold mb-2">350+ Tons</h4>
                                <p className="text-sm text-neutral-500">Plastic recoverd annually from local communities.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Zero Cost</h4>
                                <p className="text-sm text-neutral-500">Free collection for households and businesses.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
