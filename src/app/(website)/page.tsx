import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { HomeDefault } from "@/components/home/HomeDefault";
import "@/lib/builder"; // Ensure builder is initialized

// Builder.io fetching logic
export default async function Home() {
    let content = null;

    // Only attempt to fetch if the key is real and not the placeholder
    const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
    const isConfigured = apiKey && apiKey !== "your_api_key_here";

    if (isConfigured) {
        try {
            content = await builder
                .get("page", {
                    userAttributes: {
                        urlPath: "/",
                    },
                })
                .toPromise();
        } catch (error) {
            console.warn("Failed to fetch Builder.io content", error);
        }
    }

    return (
        <RenderBuilderContent
            content={content}
            model="page"
            fallback={<HomeDefault />}
        />
    );
}
