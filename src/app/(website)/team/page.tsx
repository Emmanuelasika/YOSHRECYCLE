import { Team } from "@/components/home/Team";
import { sanityFetch } from "@/sanity/lib/live";
import { TEAM_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function TeamPage() {
    const { data } = await sanityFetch({ query: TEAM_PAGE_QUERY });

    const page = data?.page;
    const members = data?.members?.map((member: any) => ({
        ...member,
        img: member.img ? urlFor(member.img).url() : null
    })) || [];

    // Helper for multiline text
    const renderMultiline = (text: string) => {
        if (!text) return null;
        return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} />;
    };

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Massive Light Theme Hero */}
            <div className="pt-40 pb-20 px-[5vw] border-b border-neutral-100">
                <div className="max-w-[1800px] mx-auto">
                    <span className="text-[#63C14B] font-bold tracking-widest uppercase text-sm mb-4 block">
                        {page?.heroTag || "Our People"}
                    </span>
                    <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase mb-12">
                        {renderMultiline(page?.heroTitle) || <>The Minds <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">Behind Yosh</span></>}
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                            {page?.heroDescription || "We are a collective of environmentalists, engineers, and community leaders driven by a single purpose: to redefine waste in Africa."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Reuse the Home Team Component */}
            {/* Note: The Team component has its own section padding/styling which works well here */}
            <Team hideHeader={true} teamList={members} />
        </main>
    );
}
