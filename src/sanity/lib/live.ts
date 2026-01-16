import { client } from "./client";

// Helper to match the signature of the 'defineLive' version
export const sanityFetch = async ({ query, params = {} }: { query: string; params?: any }) => {
    try {
        const data = await client.fetch(query, params);
        return { data };
    } catch (error) {
        console.error("Error fetching data from Sanity:", error);
        return { data: null };
    }
};

// Fallback component since defineLive is not available
export const SanityLive = () => {
    return null;
};
