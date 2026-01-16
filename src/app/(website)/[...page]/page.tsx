import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { registerComponents } from "@/components/builder-registry";


// Initialize Builder with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: Promise<{
        page: string[];
    }>;
}

export default async function Page(props: PageProps) {
    const params = await props.params;

    // Run component registration
    registerComponents();

    const content = await builder
        .get("page", {
            userAttributes: {
                urlPath: "/" + (params?.page?.join("/") || ""),
            },
        })
        .toPromise();

    return (
        <>
            {/* Render the Builder page */}
            <RenderBuilderContent content={content} model="page" />
        </>
    );
}
