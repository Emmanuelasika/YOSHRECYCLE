"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, Truck, Recycle, School } from "lucide-react";

const iconMap: Record<string, any> = {
    Package,
    Truck,
    Recycle,
    School
};

interface StepItem {
    id: string;
    title: string;
    desc: string;
    icon: string; // key of iconMap
}

interface ProcessProps {
    title?: string;
    description?: string;
    stepsList?: StepItem[];
}

export function Process({
    title = "The <br /> <span class='text-[#63C14B]'>Process</span>",
    description = "A transparent, verified workflow that turns community waste into global value. Zero landfills, 100% impact.",
    stepsList = [
        {
            id: "01",
            title: "Distribute Bags",
            desc: "We empower the community by providing branded, heavy-duty collection bags to households, schools, and local businesses.",
            icon: "Package"
        },
        {
            id: "02",
            title: "Collect at Source",
            desc: "Our logistics team executes scheduled pickups directly from the source, ensuring materials remain clean, sorted, and high-quality.",
            icon: "Truck"
        },
        {
            id: "03",
            title: "Sell to Recyclers",
            desc: "We verify and transport materials to vetted local recycling facilities, closing the loop and contributing to the circular economy.",
            icon: "Recycle"
        },
        {
            id: "04",
            title: "Community Education",
            desc: "Beyond collection, we run workshops and awareness drive to instill a culture of sustainability in the next generation.",
            icon: "School"
        },
    ]
}: ProcessProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-40 px-6 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Sticky Header */}
                <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8" dangerouslySetInnerHTML={{ __html: title }}>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-sm leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Steps Timeline */}
                <div className="lg:w-2/3 relative">
                    {/* Progress Line */}
                    <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-neutral-200 hidden md:block">
                        <motion.div
                            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                            className="w-full h-full bg-[#63C14B]"
                        />
                    </div>

                    <div className="space-y-20">
                        {stepsList.map((step, i) => {
                            const IconComponent = iconMap[step.icon] || Package;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-20% 0px -20% 0px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="relative flex flex-col md:flex-row gap-8 group"
                                >
                                    {/* Icon Bubble */}
                                    <div className="relative z-10 shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black group-hover:border-[#63C14B] group-hover:bg-[#63C14B] group-hover:text-white transition-all duration-500 shadow-sm">
                                            <IconComponent size={24} />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="border-t border-neutral-200 pt-8 w-full group-hover:border-[#63C14B] transition-colors">
                                        <div className="flex justify-between items-baseline mb-4">
                                            <h3 className="text-3xl md:text-4xl font-bold uppercase">{step.title}</h3>
                                            <span className="text-5xl font-bold text-neutral-200 font-mono group-hover:text-[#63C14B]/20 transition-colors">
                                                {step.id}
                                            </span>
                                        </div>
                                        <p className="text-neutral-500 text-lg leading-relaxed max-w-xl group-hover:text-black transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
