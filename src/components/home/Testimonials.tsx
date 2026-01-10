"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "I love the branded bag system, it makes collection simple and effective!",
        author: "Aisha Dimas",
        role: "Community Leader"
    },
    {
        quote: "Great initiative from the grassroots level where everyone gets to contribute their quota.",
        author: "Kolawale Paul",
        role: "Local Teacher"
    },
    {
        quote: "Proper community recycling means a healthier environment for everyone. KUDOS!",
        author: "Sarah Ciroma",
        role: "Nurse"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 px-[5vw] bg-neutral-50 text-black">
            <div className="max-w-[1800px] mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#63C14B] font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
                        What our communities <br /> say about <span className="text-[#63C14B]">Yosh Recycle</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="bg-[#63C14B]/10 p-4 rounded-full text-[#63C14B] mb-8">
                                <Quote size={24} className="fill-current" />
                            </div>

                            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-10 italic">
                                "{item.quote}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="font-bold text-lg uppercase tracking-wide">{item.author}</h4>
                                <p className="text-sm text-neutral-500 font-medium uppercase tracking-widest mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
