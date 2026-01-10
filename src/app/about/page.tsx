"use client";

import { Mission } from "@/components/home/Mission";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { Impact } from "@/components/home/Impact";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen bg-white text-black">
            {/* Page Header */}
            <section className="py-20 px-[5vw] border-b border-neutral-100">
                <div className="max-w-[1800px] mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                        We Are <br />
                        <span className="text-[#63C14B]">Yosh Recycle</span>
                    </h1>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                            Yosh Recycle is an indigenous waste recovery and recycling enterprise committed to environmental sustainability and social impact in Nigeria.
                        </p>
                        <p className="text-neutral-500 leading-relaxed">
                            Founded with a vision to tackle the plastic waste crisis in Lagos, we have grown into a community-powered movement. We bridge the gap between household waste and industrial raw materials, creating value at every step of the chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reuse existing components that tell the story well */}
            <Mission />

            {/* Custom "History" or "Values" section could go here */}
            <section className="py-24 px-[5vw] bg-neutral-50">
                <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/images/pollution_river.png"
                            alt="The Challenge"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">The Challenge</h2>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Lagos generates thousands of tons of waste daily, much of which ends up in our waterways and streets. We saw this not just as a problem, but as an opportunity to empower communities.
                        </p>
                        <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">Our Solution</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            By incentivizing collection and streamlining the recycling process, we turn "trash" into a valuable resource. Our model supports local collectors, cleans up neighborhoods, and provides high-quality feedstock for manufacturing.
                        </p>
                    </div>
                </div>
            </section>

            <WhyItMatters />
            <Impact />
        </main>
    );
}
