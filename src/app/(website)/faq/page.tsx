"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    category: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        category: "Collections",
        question: "What types of materials do you collect?",
        answer: "We primarily collect PET plastic bottles (water/soda bottles), HDPE plastics (jerry cans, shampoo bottles), and Aluminum cans. Please ensure they are empty and ideally crushed before placing them in your bag."
    },
    {
        category: "Logistics",
        question: "How do I request a pickup?",
        answer: "Once your bag is full, you can request a pickup through our website contact form or by calling/WhatsApping our dedicated line. Our logistics team will schedule a collection within 48 hours."
    },
    {
        category: "Pricing",
        question: "Is the collection bag free?",
        answer: "Yes! We provide the initial recycling bag for free to registered households. If you manage an estate or commercial facility, please contact us for bulk arrangements."
    },
    {
        category: "Rewards",
        question: "Do you pay for the waste collected?",
        answer: "For residential pickups, we operate a rewards point system where you earn points redeemable for household items or cash. For large commercial quantities, we offer competitive rates per kg."
    },
    {
        category: "About Us",
        question: "Where are your operations located?",
        answer: "Our headquarters and main processing hub are in Abuja, but we have collection partners and logistics teams operating across key areas of Abuja and other states."
    },
    {
        category: "Partnership",
        question: "How can my company partner with Yosh?",
        answer: "We offer several partnership models, from 'Sponsor a Bag' to workplace recycling programs. Visit our Sponsor page or Contact us directly to discuss a bespoke partnership."
    }
];

function Accordion({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-black/10 last:border-0 my-2">
            <button
                onClick={onClick}
                className="w-full py-8 px-8 flex items-start justify-between text-left group hover:bg-white transition-all duration-300 rounded-2xl"
            >
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B] mb-2 block">{item.category}</span>
                    <span className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight group-hover:text-black/70 transition-colors">{item.question}</span>
                </div>
                <span className={`flex-shrink-0 ml-8 p-4 rounded-full border border-black/10 transition-all duration-300 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-transparent text-black hover:border-black'}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 pl-8 pr-12 text-neutral-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | 0>(0);

    return (
        <main className="min-h-screen bg-[#F7F7F7] text-black">
            {/* Massive Header */}
            <div className="bg-black text-white pt-40 pb-20 px-[5vw]">
                <div className="max-w-[1800px] mx-auto">
                    <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
                        Common <br />
                        <span className="text-[#63C14B]">Questions</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto px-[5vw] py-24 flex flex-col lg:flex-row gap-20">
                {/* Sticky Sidebar */}
                <aside className="lg:w-1/3 h-fit lg:sticky lg:top-32">
                    <p className="text-2xl font-medium leading-tight mb-8 max-w-md">
                        Everything you need to know about our process, logistics, and impact.
                    </p>
                    <p className="text-neutral-500 mb-12 max-w-sm">
                        Can't find the answer you're looking for? Our team is ready to help you directly.
                    </p>

                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all">
                        Contact Support <ArrowUpRight size={16} />
                    </Link>
                </aside>

                {/* FAQ List */}
                <div className="lg:w-2/3">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
