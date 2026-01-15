"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

export function BlogPreview() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(RECENT_POSTS_QUERY).then((data) => setPosts(data));
    }, []);

    if (posts.length === 0) return null;

    return (
        <section className="py-32 px-6 bg-[#F5F5F7] text-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#63C14B] font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Our Journal
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
                        >
                            Latest <span className="text-neutral-400">Insights</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/blog" className="hidden md:flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all group">
                            Read All Articles
                            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                                <article className="bg-white p-4 rounded-[2rem] h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-[#63C14B]/20">
                                    <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden rounded-2xl mb-6">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).width(800).height(600).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-neutral-300 bg-neutral-50 font-bold uppercase tracking-widest font-mono">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                            News
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-grow px-2 pb-2">
                                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-[#63C14B]" />
                                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} />
                                                3 Min Read
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-[#63C14B] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {post.excerpt && (
                                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-[#63C14B] transition-colors">
                                            Read Story <ArrowUpRight size={14} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/blog" className="flex w-full items-center justify-center gap-2 px-8 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#63C14B] hover:text-black transition-all">
                        View All News <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
