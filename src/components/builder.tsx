"use client";

import { ComponentProps, ReactNode } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../lib/builder";

type BuilderPageProps = ComponentProps<typeof BuilderComponent> & {
    fallback?: ReactNode;
};

export function RenderBuilderContent({ content, model, fallback }: BuilderPageProps) {
    // Call the useIsPreviewing hook to determine if
    // the page is being previewed in Builder
    const isPreviewing = useIsPreviewing();

    // If "content" is available, the section passed to the BuilderComponent
    // is used to render the page content from Builder
    if (content || isPreviewing) {
        return <BuilderComponent content={content} model={model} />;
    }

    // If fallback is provided, render it
    if (fallback) {
        return <>{fallback}</>;
    }

    // If the "content" is unavailable and the page is not being previewed
    // in Builder, render the 404 page
    return <DefaultErrorPage statusCode={404} />;
}
