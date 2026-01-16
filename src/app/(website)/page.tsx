import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { HomeDefault } from "@/components/home/HomeDefault";

// Builder.io fetching logic
export default async function Home() {
    const content = await builder
        .get("page", {
            userAttributes: {
                urlPath: "/",
            },
        })
        .toPromise();

    return (
        <RenderBuilderContent
            content={content}
            model="page"
            fallback={<HomeDefault />}
        />
    );
}
