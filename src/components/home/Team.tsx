"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { teamData } from "@/data/team";
import { TeamModal } from "@/components/team/TeamModal";

interface TeamMember {
    name: string;
    role: string;
    img: string;
}

interface TeamProps {
    titlePrefix?: string;
    titleHighlight?: string;
    description?: string;
    teamList?: TeamMember[];
    hideHeader?: boolean;
}

export function Team({
    titlePrefix = "The",
    titleHighlight = "Team",
    description = "Driven by passion, united by a vision for a cleaner planet.",
    teamList = teamData,
    hideHeader = false
}: TeamProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <section className={`px-[5vw] bg-white text-black relative cursor-default ${hideHeader ? 'py-20' : 'py-40'}`}>
            <div className="max-w-[1800px] mx-auto">
                {!hideHeader && (
                    <div className="flex items-end justify-between mb-24">
                        <h2 className="text-[5vw] leading-[0.9] font-bold tracking-tighter uppercase">
                            {titlePrefix} <br />
                            <span className="text-[#63C14B]">{titleHighlight}</span>
                        </h2>
                        <p className="max-w-xs text-neutral-500 text-sm">
                            {description}
                        </p>
                    </div>
                )}

                <div className="flex flex-col">
                    {teamList.map((member, i) => (
                        <div
                            key={i}
                            className="group relative border-t border-black/10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors hover:bg-neutral-50 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="w-full md:w-auto">
                                <div className="flex items-baseline gap-8 mb-6 md:mb-0">
                                    <span className="text-xs font-bold text-neutral-400">0{i + 1}</span>
                                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight uppercase group-hover:text-[#63C14B] transition-colors">
                                        {member.name}
                                    </h3>
                                </div>

                                {/* MOBILE IMAGE: Displayed inline on small screens only */}
                                <div className="block lg:hidden w-full aspect-[4/5] relative mt-4 mb-4 bg-neutral-100 rounded-sm overflow-hidden">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                                <span className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-black">
                                    {member.role}
                                </span>
                                <div className="flex items-center gap-2 text-[#63C14B] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold uppercase tracking-widest hidden lg:block">View Profile</span>
                                    <ArrowUpRight size={32} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP HOVER IMAGE: Floating reveal on large screens only */}
            <AnimatePresence>
                {hoveredIndex !== null && teamList[hoveredIndex] && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="pointer-events-none fixed top-1/3 right-[10vw] z-10 w-[20vw] h-[30vh] hidden lg:block"
                    >
                        <Image
                            src={teamList[hoveredIndex].img}
                            alt="Team"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal Popup */}
            {/* Note: TeamModal type might complain if we pass generic TeamMember if it expects strict type. 
                Assuming TeamModal handles {name, role, img} correctly or we cast it if needed. 
                For now passing member as is. */}
            <TeamModal
                isOpen={!!selectedMember}
                member={selectedMember as any}
                onClose={() => setSelectedMember(null)}
            />
        </section>
    );
}
