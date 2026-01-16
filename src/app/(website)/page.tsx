import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import { HomeDefault } from "@/components/home/HomeDefault";

// Use revalidate for SSG/ISR
export const revalidate = 60;

export default async function Home() {
    // Try to fetch "Home" page from Plasmic (mapped to "/")
    try {
        const plasmicData = await PLASMIC.fetchComponentData("/");
        if (plasmicData) {
            return (
                <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
                    <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
                </PlasmicRootProvider>
            );
        }
    } catch (e) {
        // Fallback to default if not found or error (e.g. invalid token)
        console.warn("Plasmic home fetch failed, using fallback.");
    }

    return <HomeDefault />;
}
