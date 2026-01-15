import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);

    return (
        <main className="min-h-screen bg-white text-black pt-40 px-6 pb-32">
            <div className="max-w-[1600px] mx-auto">
                {/* Minimal Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-black pb-8">
                    <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase">
                        News<span className="text-[#63C14B]">Room</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium max-w-sm mb-4 md:mb-2 text-neutral-500">
                        Stories about sustainability, recycling, and our journey to zero waste.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group block h-full">
                            <div className="aspect-[4/3] relative rounded-none overflow-hidden bg-neutral-100 mb-6 border border-black">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(600).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-400 uppercase font-mono text-sm">
                                        No Image
                                    </div>
                                )}

                                <div className="absolute top-4 rights-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-3 py-1 text-xs font-mono uppercase">
                                    Read
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center border-t border-black pt-3">
                                    <span className="font-mono text-xs uppercase text-neutral-500">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                                    </span>
                                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </div>

                                <h2 className="text-3xl font-bold uppercase leading-[0.9] tracking-tight group-hover:text-[#63C14B] transition-colors">
                                    {post.title}
                                </h2>
                                {post.excerpt && (
                                    <p className="text-neutral-500 text-sm line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="col-span-full py-20 text-center border border-dashed border-neutral-300">
                            <p className="text-neutral-400 font-mono uppercase">No stories published yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
