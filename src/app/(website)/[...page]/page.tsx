import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { registerComponents } from "@/components/builder-registry";
import "@/lib/builder"; // Ensure builder is initialized

interface PageProps {
    params: Promise<{
        page: string[];
    }>;
}

export default async function Page(props: PageProps) {
    const params = await props.params;

    // Run component registration
    registerComponents();

    let content = null;
    try {
        content = await builder
            .get("page", {
                userAttributes: {
                    urlPath: "/" + (params?.page?.join("/") || ""),
                },
            })
            .toPromise();
    } catch (error) {
        console.warn("Error fetching builder content for page:", params?.page, error);
    }

    return (
        <>
            {/* Render the Builder page */}
            <RenderBuilderContent content={content} model="page" />
        </>
    );
}
