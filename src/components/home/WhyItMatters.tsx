"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhyItMatters() {
    return (
        <section className="min-h-screen py-32 px-6 bg-white text-black flex items-center">
            <div className="max-w-[1800px] mx-auto w-full">

                {/* Header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-black/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85]"
                    >
                        Why It <br />
                        <span className="text-[#63C14B]">Matters</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-light text-neutral-600 max-w-xl text-right md:text-right"
                    >
                        Abuja produces over <span className="text-black font-medium">13,000 tonnes</span> of waste daily. We are the defense line.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Stop Pollution",
                            desc: "Preventing plastics from clogging our drains and polluting our precious waterways.",
                            img: "/assets/images/pollution_river.png"
                        },
                        {
                            title: "Create Jobs",
                            desc: "Building a green economy that provides stable employment for women and youth.",
                            img: "/assets/images/recycling_worker.png"
                        },
                        {
                            title: "Future Proof",
                            desc: "Educating the next generation to value resources and protect their environment.",
                            img: "/assets/images/future_child.png"
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 rounded-sm text-white"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                                style={{ backgroundImage: `url(${item.img})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                                <span className="text-xs font-mono text-[#63C14B] mb-4 block">0{i + 1} / 03</span>
                                <h3 className="text-4xl font-bold uppercase mb-4 leading-none text-white">{item.title}</h3>
                                <p className="text-neutral-200 leading-relaxed text-sm md:text-base border-l border-[#63C14B] pl-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-full opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">
                                <ArrowRight size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
