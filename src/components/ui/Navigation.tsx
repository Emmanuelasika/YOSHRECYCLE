"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
    const { scrollY } = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Pages that start with a light background need black text initially
    const isLightPage = pathname === "/about" || pathname === "/contact" || pathname === "/team";

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 w-full z-50 py-6 px-[5vw] flex justify-between items-center transition-colors duration-300",
                    isScrolled || isMobileMenuOpen
                        ? "bg-white/0 backdrop-blur-none text-black border-transparent"
                        : isLightPage ? "text-black bg-white/0" : "text-white bg-white/0"
                )}
            >
                <Link href="/" className="relative w-40 h-16 z-50">
                    <Image
                        src="/assets/logo.png"
                        alt="Yosh Recycle"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
                    <Link href="/about" className="hover:text-[#63C14B] transition-colors">About</Link>
                    <Link href="/team" className="hover:text-[#63C14B] transition-colors">Team</Link>
                    <Link href="/sponsor" className="hover:text-[#63C14B] transition-colors">Sponsor</Link>
                    <Link href="/blog" className="hover:text-[#63C14B] transition-colors">News</Link>
                    <Link href="/faq" className="hover:text-[#63C14B] transition-colors">FAQ</Link>
                    <Link href="/contact" className="hover:text-[#63C14B] transition-colors">Contact</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                        "md:hidden uppercase text-xs font-bold border px-4 py-2 rounded-full relative z-50 transition-colors",
                        isMobileMenuOpen
                            ? "border-black text-black bg-white"
                            : isScrolled
                                ? "border-black text-black"
                                : isLightPage ? "border-black text-black" : "border-white text-white"
                    )}
                >
                    {isMobileMenuOpen ? "Close" : "Menu"}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none"
                }}
                className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 md:hidden"
            >
                <div className="flex flex-col gap-6 text-4xl font-bold uppercase tracking-tighter">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Team", href: "/team" },
                        { name: "Sponsor", href: "/sponsor" },
                        { name: "News", href: "/blog" },
                        { name: "FAQ", href: "/faq" },
                        { name: "Contact", href: "/contact" }
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-[#63C14B] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-12 pt-12 border-t border-neutral-100">
                    <p className="text-neutral-500 text-sm mb-4">Get in touch</p>
                    <a href="mailto:hello@yoshrecycle.org" className="text-xl block mb-2">hello@yoshrecycle.org</a>
                    <a href="tel:+2349163937111" className="text-xl block">+234 916 393 7111</a>
                </div>
            </motion.div>
        </>
    );
}
