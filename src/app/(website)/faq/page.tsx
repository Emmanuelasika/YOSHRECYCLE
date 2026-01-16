import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_PAGE_QUERY } from "@/sanity/lib/queries";
import { FAQList } from "@/components/faq/FAQList";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function FAQPage() {
    const { data } = await sanityFetch({ query: FAQ_PAGE_QUERY });

    const faqs = data?.faqs || [];

    // Helper for multiline text
    const renderMultiline = (text: string) => {
        if (!text) return null;
        return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />;
    };

    return (
        <main className="min-h-screen bg-[#F7F7F7] text-black">
            {/* Massive Header */}
            <div className="bg-black text-white pt-40 pb-20 px-[5vw]">
                <div className="max-w-[1800px] mx-auto">
                    <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
                        {data?.heroTitlePrefix || "Common"} <br />
                        <span className="text-[#63C14B]">{data?.heroTitleHighlight || "Questions"}</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto px-[5vw] py-24 flex flex-col lg:flex-row gap-20">
                {/* Sticky Sidebar */}
                <aside className="lg:w-1/3 h-fit lg:sticky lg:top-32">
                    <p className="text-2xl font-medium leading-tight mb-8 max-w-md">
                        {data?.sidebarTitle || "Everything you need to know about our process, logistics, and impact."}
                    </p>
                    <p className="text-neutral-500 mb-12 max-w-sm">
                        {data?.sidebarDescription || "Can't find the answer you're looking for? Our team is ready to help you directly."}
                    </p>

                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all">
                        Contact Support <ArrowUpRight size={16} />
                    </Link>
                </aside>

                {/* FAQ List */}
                <FAQList faqs={faqs} />
            </div>
        </main>
    );
}
