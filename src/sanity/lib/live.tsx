import { draftMode } from "next/headers";
import { client } from "./client";
import { VisualEditing } from "next-sanity/visual-editing";

// Helper to match the signature of the 'defineLive' version
export const sanityFetch = async ({ query, params = {} }: { query: string; params?: any }) => {
    try {
        const { isEnabled } = await draftMode();

        if (isEnabled) {
            return {
                data: await client.withConfig({
                    token: process.env.SANITY_API_READ_TOKEN,
                    perspective: 'drafts',
                    useCdn: false,
                    stega: {
                        enabled: true,
                        studioUrl: '/studio'
                    }
                }).fetch(query, params)
            };
        }

        const data = await client.fetch(query, params);
        return { data };
    } catch (error) {
        console.error("Error fetching data from Sanity:", error);
        return { data: null };
    }
};

// Fallback component since defineLive is not available
export const SanityLive = async () => {
    const { isEnabled } = await draftMode();

    if (isEnabled) {
        return <VisualEditing />;
    }

    return null;
};
