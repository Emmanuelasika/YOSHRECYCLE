"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect } from "react";

interface TeamMember {
    name: string;
    role: string;
    img: string;
    bio: string;
    linkedin: string;
    twitter: string;
    instagram?: string;
}

interface TeamModalProps {
    member: TeamMember | null;
    isOpen: boolean;
    onClose: () => void;
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && member && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Side */}
                        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                            <Image
                                src={member.img}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Side */}
                        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#63C14B]/10 text-[#63C14B] text-xs font-bold uppercase tracking-widest mb-6">
                                {member.role}
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-black">
                                {member.name}
                            </h2>

                            <div className="w-12 h-1 bg-[#63C14B] mb-8" />

                            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
                                {member.bio}
                            </p>

                            <div className="flex gap-4">
                                <a href={member.linkedin} className="p-3 border border-neutral-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href={member.twitter} className="p-3 border border-neutral-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                                    <Twitter size={20} />
                                </a>
                                {member.instagram && (
                                    <a href={member.instagram} className="p-3 border border-neutral-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                                        <Instagram size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
