import {
    PlasmicRootProvider,
    PlasmicComponent,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import { notFound } from "next/navigation";
import { HomeDefault } from "@/components/home/HomeDefault";

// Use revalidate for SSG/ISR
export const revalidate = 60;

export default async function PlasmicLoaderPage({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    const resolvedParams = await params;
    const plasmicPath = resolvedParams.slug?.join("/") || "/";

    // Fallback Logic:
    // Since Plasmic might not have the homepage published yet, we can wrap this. 
    // However, Plasmic's fetchComponentData will throw/return error if not found.
    // We'll mimic the safe fallback strategy we had with Builder.

    if (plasmicPath === "/") {
        // Check if Plasmic has a page for HOME. 
        // For now, simpler approach: Try to render Plasmic, if it fails or returns 404, we catch and show Default.
        // NOTE: PlasmicComponent fetches internally on Client? No, in App Router we usually fetch data first.
        // Let's use the robust server-fetching pattern.

        try {
            const plasmicData = await PLASMIC.fetchComponentData(plasmicPath);
            if (!plasmicData) {
                return <HomeDefault />;
            }
            return (
                <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
                    <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
                </PlasmicRootProvider>
            );
        } catch (e) {
            // If fetch fails (404), fallback to hardcoded home
            return <HomeDefault />;
        }
    }

    // Normal pages
    const plasmicData = await PLASMIC.fetchComponentData(plasmicPath);
    if (!plasmicData) {
        notFound();
    }

    return (
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
            <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
        </PlasmicRootProvider>
    );
}
