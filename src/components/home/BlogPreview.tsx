"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export function BlogPreview() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(RECENT_POSTS_QUERY).then((data) => setPosts(data));
    }, []);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 px-[5vw] bg-[#F5F5F7] text-black">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
                        Latest <br />
                        <span className="text-[#63C14B]">Updates</span>
                    </h2>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all">
                        View All News <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-white relative overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-md transition-all">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(600).height(450).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-neutral-300 bg-neutral-100">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B]">
                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'News'}
                                </span>
                                <h3 className="text-2xl font-bold uppercase leading-tight group-hover:text-[#63C14B] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                {post.excerpt && (
                                    <p className="text-neutral-500 line-clamp-2 text-sm">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/blog" className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all">
                        View All News <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
