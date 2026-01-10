"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const products = [
    {
        title: "Hot Washed",
        subtitle: "PET Flakes",
        desc: "Premium purity (<50ppm PVC) for high-end fiber application.",
        img: "/assets/products/hot-washed.png"
    },
    {
        title: "Cold Washed",
        subtitle: "PET Flakes",
        desc: "Industrial grade flakes for strapping and non-food packaging.",
        img: "/assets/products/cold-washed.png"
    },
    {
        title: "Pressed Bales",
        subtitle: "HDPE/PET",
        desc: "High density bales sorted by color and polymer type.",
        img: "/assets/products/bales.png"
    },
];

export function Products() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Fixed math: 4 items (1 intro + 3 products) = 400vw total width.
    // We need to move exactly 3 screen widths (300vw) to show the last item.
    // 3 / 4 = 75%.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#F5F5F7]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-0 w-[400vw]">

                    {/* Intro Card */}
                    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-[5vw] border-r border-black/5 bg-white relative overflow-hidden">
                        <div className="relative z-10 max-w-4xl">
                            <h2 className="text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
                                Our <br /> <span className="text-[#63C14B]">Products</span>
                            </h2>
                            <p className="max-w-xl text-xl text-neutral-500">
                                We supply the manufacturing industry with high-quality recycled raw materials. Scroll to see what we make.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -right-20 -bottom-20 w-[60vh] h-[60vh] bg-neutral-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    </div>

                    {/* Product Cards */}
                    {products.map((product, i) => (
                        <div key={i} className="w-screen h-screen flex-shrink-0 flex border-r border-black/5 bg-white overflow-hidden">
                            {/* Text Side (Left) */}
                            <div className="w-1/2 flex flex-col justify-center px-[8vw] relative z-10 bg-white">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">{product.title}</h3>
                                <h2 className="text-[5vw] font-bold leading-none tracking-tighter uppercase mb-8 text-[#63C14B]">
                                    {product.subtitle}
                                </h2>
                                <p className="text-2xl font-light text-neutral-800 max-w-md leading-relaxed">
                                    {product.desc}
                                </p>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="w-1/2 relative bg-neutral-50 flex items-center justify-center">
                                <div className="relative w-[80%] h-[80%]">
                                    <Image
                                        src={product.img}
                                        alt={product.subtitle}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
