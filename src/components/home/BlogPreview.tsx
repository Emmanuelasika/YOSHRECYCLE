"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

export function BlogPreview() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(RECENT_POSTS_QUERY).then((data) => setPosts(data));
    }, []);

    // Placeholder data for design review if no posts exist
    const displayPosts = posts.length > 0 ? posts : [
        { _id: '1', title: 'Sustainable Cities: The Future of Urban Living', publishedAt: new Date().toISOString(), slug: { current: '#' } },
        { _id: '2', title: 'How Recycling is Changing the Economy', publishedAt: new Date().toISOString(), slug: { current: '#' } },
        { _id: '3', title: 'Community Action Guide 2026', publishedAt: new Date().toISOString(), slug: { current: '#' } }
    ];

    return (
        <section className="py-32 px-6 bg-white text-black border-t border-neutral-100">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                        Latest <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#63C14B] to-emerald-600">
                            Updates
                        </span>
                    </h2>

                    <Link href="/blog" className="hidden md:flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                        Read Journal <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {displayPosts.map((post, index) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group cursor-pointer block">
                            <div className="aspect-[16/10] bg-neutral-100 relative overflow-hidden rounded-[2rem] mb-8">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(500).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50 text-neutral-300">
                                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-neutral-200" />
                                    </div>
                                )}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Article
                                </div>
                            </div>

                            <div className="pr-4">
                                <span className="text-[#63C14B] font-bold uppercase tracking-widest text-xs block mb-3">
                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Just Now'}
                                </span>
                                <h3 className="text-3xl font-bold leading-none uppercase tracking-tight group-hover:underline decoration-2 underline-offset-4 decoration-[#63C14B] transition-all">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 md:hidden">
                    <Link href="/blog" className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm">
                        Read Journal <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
