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
            <section className="py-24 px-[5vw] bg-white">
                <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <div className="relative">
                        <BeforeAfterSlider
                            beforeImage="/assets/images/about_river_polluted_v2.png"
                            afterImage="/assets/images/about_river_clean_v2.png"
                            beforeLabel="The Crisis"
                            afterLabel="The Future"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-black">
                                The Urban <br /> <span className="text-red-500">Waste Crisis</span>
                            </h2>
                            <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                                Lagos generates over <span className="font-bold text-black bg-yellow-100 px-1">13,000 tonnes</span> of waste daily. Much of this ends up clogging our waterways, polluting our streets, and endangering public health.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-black">
                                <span className="text-[#63C14B]">Our Solution</span>
                            </h2>
                            <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl">
                                We turn "waste" into a valuable resource. By incentivizing collection and streamlining the recycling process, we support local collectors and provide high-quality feedstock for manufacturing.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {["Incentivized Collection", "Community Efficiency", "Industrial Feedstock", "Cleaner Neighborhoods"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-base font-medium text-neutral-800">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#63C14B]"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyItMatters />
            <Impact />
        </main>
    );
}
