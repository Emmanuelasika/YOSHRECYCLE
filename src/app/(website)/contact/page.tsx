import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function ContactPage() {
    const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY });

    // Helper for multiline text
    const renderMultiline = (text: string) => {
        if (!text) return null;
        return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />;
    };

    return (
        <main className="pt-24 min-h-screen bg-white text-black selection:bg-[#63C14B] selection:text-white relative overflow-hidden">
            {/* Background Texture - Light Mode */}
            <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-multiply"></div>

            <section className="relative pt-20 pb-20 px-[5vw] z-10">
                <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Info & Context */}
                    <div className="pt-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
                            <div className="w-2 h-2 bg-[#63C14B] rounded-full animate-pulse"></div>
                            <span className="text-[#63C14B] font-mono text-xs tracking-widest uppercase font-bold">We're Online</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-neutral-900">
                            {renderMultiline(data?.heroTitle) || <>Get In <br /><span className="text-[#63C14B]">Touch</span></>}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 max-w-xl leading-relaxed mb-16">
                            {data?.heroDescription || "Have questions about our process, interested in sponsorship, or want to partner with us? We'd love to hear from you."}
                        </p>

                        <div className="space-y-10 border-l border-neutral-200 pl-8 ml-2">

                            {/* Address */}
                            <div className="relative group">
                                <h3 className="font-bold uppercase tracking-widest text-[#63C14B] text-xs mb-2">Visit Us</h3>
                                <p className="text-2xl text-neutral-900 font-medium group-hover:translate-x-2 transition-transform">{data?.address || "Abuja, Nigeria"}</p>
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <h3 className="font-bold uppercase tracking-widest text-[#63C14B] text-xs mb-2">Email</h3>
                                <a href={`mailto:${data?.email || "hello@yoshrecycle.org"}`} className="text-2xl text-neutral-900 font-medium hover:text-[#63C14B] transition-colors group-hover:translate-x-2 inline-block">
                                    {data?.email || "hello@yoshrecycle.org"}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="relative group">
                                <h3 className="font-bold uppercase tracking-widest text-[#63C14B] text-xs mb-2">Call Us</h3>
                                <a href={`tel:${data?.phone || "+2349163937111"}`} className="text-2xl text-neutral-900 font-medium hover:text-[#63C14B] transition-colors group-hover:translate-x-2 inline-block">
                                    {data?.phone || "+234 916 393 7111"}
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="relative">
                                <h3 className="font-bold uppercase tracking-widest text-[#63C14B] text-xs mb-4">Socials</h3>
                                <div className="flex gap-4">
                                    <a href={data?.instagram || "https://www.instagram.com/yoshrecycle?igsh=MWtjamRkN2xpbWh6Ng=="} target="_blank" className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#63C14B] hover:text-white transition-all hover:scale-110">
                                        <Instagram size={20} />
                                    </a>
                                    <a href={data?.twitter || "https://x.com/YoshRecycle"} target="_blank" className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#63C14B] hover:text-white transition-all hover:scale-110">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={data?.facebook || "https://www.facebook.com/profile.php?id=61551544979983"} target="_blank" className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#63C14B] hover:text-white transition-all hover:scale-110">
                                        <Facebook size={20} />
                                    </a>
                                    <a href={data?.linkedin || "https://www.linkedin.com/company/109765401"} target="_blank" className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#63C14B] hover:text-white transition-all hover:scale-110">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full pt-10 lg:pt-0">
                        <div className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-12 shadow-xl relative">
                            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-[#63C14B]/10 blur-3xl rounded-full pointer-events-none"></div> */}
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900 mb-8 border-b border-neutral-100 pb-4">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
