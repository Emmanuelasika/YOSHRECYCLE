"use client";

import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { registerAllComponents } from "@/plasmic-init";

// Register all code components
registerAllComponents();

export default function PlasmicHost() {
    return <PlasmicCanvasHost />;
}
