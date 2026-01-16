"use client";

import Image from "next/image";

// Generate image paths (assuming 1-19 exist)
interface GalleryProps {
    title?: string;
    images?: string[];
}

export function Gallery({
    title = "Work in <br /> <span class='text-white'>Action</span>.",
    images = Array.from({ length: 12 }, (_, i) => `/assets/images/gallery-${i + 1}.jpg`)
}: GalleryProps) {
    return (
        <section id="gallery" className="py-32 px-[2vw] bg-black text-white">
            <div className="mb-20 px-[3vw]">
                <h2 className="text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase text-white/20" dangerouslySetInnerHTML={{ __html: title }}>
                </h2>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {images.map((src, i) => (
                    <div key={i} className="relative break-inside-avoid overflow-hidden group">
                        <Image
                            src={src}
                            alt="Yosh Gallery"
                            width={800}
                            height={600}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
