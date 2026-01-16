"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
    image: string;
    tag: string;
}

interface ServicesProps {
    title?: string;
    description?: string;
    servicesList?: ServiceItem[];
}

export function Services({
    title = "What <br /> <span class='text-[#63C14B]'>We Do</span>",
    description = "Bridging the gap between community waste and industrial value through three core pillars.",
    servicesList = [
        {
            title: "Household Collection",
            description: "Doorstep pickup for homes. We provide the bags, you fill them. Simple, free, and impactful.",
            image: "/assets/images/service_household_white_logo.png",
            tag: "Residential"
        },
        {
            title: "Commercial Waste",
            description: "Tailored recycling programs for schools, offices, and estates. Turn your waste into social capital.",
            image: "/assets/images/service_commercial_v2.png",
            tag: "B2B / B2G"
        },
        {
            title: "Material Recovery",
            description: "Our advanced facility processes raw waste into clean, manufacturing-grade flakes and bales.",
            image: "/assets/images/service_factory_v2.png",
            tag: "Industrial"
        }
    ]
}: ServicesProps) {
    return (
        <section id="services" className="py-24 px-6 bg-white text-black overflow-hidden border-t border-b border-black/5">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none" dangerouslySetInnerHTML={{ __html: title }}>
                    </h2>
                    <p className="text-neutral-500 max-w-sm text-right mt-6 md:mt-0 font-medium">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 h-[500px] lg:h-full cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Overlay - Darker on hover for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 group-hover:via-black/30 group-hover:to-black/90 transition-colors duration-500" />

                            {/* Content Top */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                                <span className="px-3 py-1 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-xs font-mono text-[#63C14B] uppercase tracking-wider font-bold">
                                    {service.tag}
                                </span>
                                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#63C14B] group-hover:text-black transition-all duration-300">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            {/* Content Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4 leading-none text-white group-hover:text-[#63C14B] transition-colors drop-shadow-lg">
                                    {service.title}
                                </h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-neutral-200 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
                                        {service.description}
                                    </p>
                                </div>
                                {/* Visible description for mobile/default */}
                                <p className="text-white/80 text-sm md:text-base line-clamp-2 md:hidden">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
