"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    category: string;
    question: string;
    answer: string;
}

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

export function FAQList({ faqs }: { faqs: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | 0>(0);

    return (
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
    );
}
