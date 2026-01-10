import { Mission } from "@/components/home/Mission";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { Impact } from "@/components/home/Impact";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

// ... inside the component
{/* Visual Side */ }
<div className="relative">
    <BeforeAfterSlider
        beforeImage="/assets/images/about_river_polluted_1768049267791.png"
        afterImage="/assets/images/about_river_clean_1768049251442.png"
        beforeLabel="The Challenge"
        afterLabel="Our Vision"
    />

    {/* Floating Stats Card (Adjusted position slightly) */}
    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-neutral-100 z-40">
        <span className="text-4xl font-bold text-red-500 block mb-1">13k</span>
        <span className="text-neutral-500 text-xs font-medium uppercase tracking-widest">Tonnes/day</span>
    </div>
</div>

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
            {/* Challenge & Solution */}
            <section className="py-32 px-[5vw] bg-neutral-50 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-100/50 -skew-x-12 translate-x-1/4"></div>

                <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    {/* Visual Side */}
                    <div className="relative">
                        <BeforeAfterSlider
                            beforeImage="/assets/images/about_river_polluted_1768049267791.png"
                            afterImage="/assets/images/about_river_clean_1768049251442.png"
                            beforeLabel="The Crisis"
                            afterLabel="The Future"
                        />

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-neutral-100 z-40">
                            <span className="text-4xl font-bold text-red-500 block mb-1">13k</span>
                            <span className="text-neutral-500 text-xs font-medium uppercase tracking-widest">Tonnes/day</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-16">
                        {/* Challenge Block */}
                        <div className="relative pl-8 border-l-4 border-red-500/20">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-2 block">The Problem</span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-black">
                                The Urban <br /> <span className="text-red-500">Waste Crisis</span>
                            </h2>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Lagos generates thousands of tons of waste daily, much of which ends up clogging our waterways, polluting our streets, and endangering public health.
                            </p>
                        </div>

                        {/* Solution Block */}
                        <div className="relative pl-8 border-l-4 border-[#63C14B]">
                            <span className="text-[#63C14B] font-bold tracking-widest uppercase text-xs mb-2 block">Our Solution</span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-black">
                                Turning Trash <br /> <span className="text-[#63C14B]">Into Treasure</span>
                            </h2>
                            <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                                We don't just pick up trash; we re-engineer the value chain. By incentivizing collection and streamlining the recycling process, we turn "waste" into a valuable resource that powers industry.
                            </p>
                            <ul className="space-y-4">
                                {["Incentivized Collection", "Community Efficiency", "Industrial Feedstock"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#63C14B]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WhyItMatters />
            <Impact />
        </main>
    );
}
