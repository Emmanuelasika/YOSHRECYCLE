import { SponsorshipOptions } from "@/components/sponsor/SponsorshipOptions";
import { Check } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { SPONSOR_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function SponsorPage() {
    const { data } = await sanityFetch({ query: SPONSOR_PAGE_QUERY });

    const benefits = data?.benefitsList || [
        "Your logo prominently displayed on recycling bags distributed to thousands of households",
        "Direct association with environmental sustainability and community impact",
        "Measurable social impact reports (kg collected, families impacted)",
        "Tax-deductible CSR contribution benefits",
        "Digital features on our social media and website"
    ];

    // Helper for multiline text
    const renderMultiline = (text: string) => {
        if (!text) return null;
        return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />;
    };

    return (
        <main className="pt-24 min-h-screen bg-black text-white selection:bg-[#63C14B] selection:text-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay"></div>
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[#63C14B]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

            {/* HERO SECTION with Integrated Payments */}
            <section className="relative pt-20 pb-32 px-[5vw] border-b border-white/5 z-10">
                <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="pt-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-[#63C14B] rounded-full animate-pulse"></div>
                            <span className="text-[#63C14B] font-mono text-xs tracking-widest uppercase">CSR Initiative</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                            {data?.heroTitlePrefix || "Sponsor A"} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#63C14B] via-emerald-400 to-[#63C14B] bg-300% animate-gradient">
                                {data?.heroTitleHighlight || "Brand Bag"}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed mb-12">
                            {data?.heroSubtitle || <>Transform your corporate social responsibility into tangible environmental action. <span className="text-white">Put your logo in the hands of the community.</span></>}
                        </p>

                        {/* Stats - Horizontal */}
                        <div className="flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">{data?.statsHomesReached || "5,000+"}</span>
                                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Homes Reached</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">{data?.statsPlasticCollected || "200k+"}</span>
                                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Kg Plastic</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Payment Options (The "Hero" Action) */}
                    <div className="w-full relative">
                        {/* Control Panel aesthetic container */}
                        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-2 relative shadow-2xl">
                            <SponsorshipOptions accountDetails={data?.accountDetails} />
                        </div>
                    </div>

                </div>
            </section>


            {/* WHY SPONSOR / BENEFITS SECTION */}
            <section className="relative py-32 px-[5vw] bg-neutral-900/50 z-10">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                                {data?.benefitsTitle ? <span dangerouslySetInnerHTML={{ __html: data.benefitsTitle.replace("Support Us", "<span class='text-[#63C14B]'>Support Us</span>") }} /> : <>Why <span className="text-[#63C14B]">Support Us?</span></>}
                            </h2>
                            <p className="text-lg text-neutral-400 max-w-xl">
                                {data?.benefitsDescription || "Your sponsorship funds the critical infrastructure needed to collect, sort, and process waste at the source."}
                            </p>
                        </div>
                        <a href="/contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-xs">
                            Contact for Partnerships
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit: string, i: number) => (
                            <div key={i} className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-[#63C14B]/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#63C14B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#63C14B]/10 transition-colors"></div>

                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#63C14B] mb-6 group-hover:scale-110 transition-transform">
                                    <Check size={20} />
                                </div>
                                <p className="text-xl text-neutral-200 font-medium leading-snug relative z-10">
                                    {benefit}
                                </p>
                            </div>
                        ))}

                        {/* Last Card - Call to Action visual */}
                        <div className="p-8 rounded-3xl bg-[#63C14B] text-black flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-2 relative z-10">Join The Movement</h3>
                            <p className="font-medium opacity-80 relative z-10">Start your impact journey today.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
