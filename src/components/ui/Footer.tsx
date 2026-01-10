"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-[#111] text-white pt-32 pb-10 px-[5vw] border-t border-white/10">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start mb-32">
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-2xl">
                        Let's clean the future.
                    </h2>
                    <a href="mailto:hello@yoshrecycle.org" className="inline-flex items-center gap-4 text-2xl border border-white/20 px-8 py-4 rounded-full hover:bg-[#63C14B] hover:text-white hover:border-[#63C14B] transition-all">
                        hello@yoshrecycle.org <ArrowUpRight />
                    </a>
                </div>

                <div className="mt-12 md:mt-0 flex flex-col gap-4 text-neutral-400">
                    <h3 className="text-white font-bold uppercase tracking-widest mb-4">Contact</h3>
                    <p>Abuja, Nigeria</p>
                    <p>+234 916 393 7111</p>
                    <div className="flex gap-4 mt-4">
                        <Link href="https://www.instagram.com/yoshrecycle?igsh=MWtjamRkN2xpbWh6Ng==" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</Link>
                        <Link href="https://x.com/YoshRecycle" target="_blank" rel="noopener noreferrer" className="hover:text-white">X (Twitter)</Link>
                        <Link href="https://www.facebook.com/profile.php?id=61551544979983" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</Link>
                        <Link href="https://www.linkedin.com/company/109765401" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end border-t border-white/10 pt-8 text-sm text-neutral-600">
                <p>&copy; {new Date().getFullYear()} Yosh Recycle</p>
            </div>
        </footer>
    );
}
