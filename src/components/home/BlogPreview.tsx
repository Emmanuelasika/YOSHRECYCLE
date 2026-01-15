"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        client.fetch(RECENT_POSTS_QUERY).then((data) => setPosts(data));
    }, []);

    // If no posts, hide the section entirely
    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <section className="py-32 px-6 bg-white border-t border-black/5">
            <div className="max-w-[1800px] mx-auto">

                {/* Header matching Services.tsx */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none"
                    >
                        Latest <br />
                        <span className="text-[#63C14B]">Intelligence</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="/blog">
                            <Button size="lg" className="hidden md:inline-flex bg-black text-white hover:bg-[#63C14B] hover:text-black">
                                View Journal <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/blog/${post.slug.current}`} className="group h-full block">
                                <Card className="h-full border border-black/5 bg-neutral-50 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col rounded-[2rem]">
                                    <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).width(800).height(600).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-neutral-300">
                                                <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-300" />
                                            </div>
                                        )}

                                        <div className="absolute top-6 left-6">
                                            <Badge variant="secondary" className="bg-white/90 backdrop-blur text-black border-transparent shadow-sm">
                                                Article
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B]">
                                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Just Now'}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-[#63C14B] group-hover:text-white transition-colors">
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold uppercase leading-none tracking-tight mb-4 group-hover:text-[#63C14B] transition-colors">
                                            {post.title}
                                        </h3>

                                        {post.excerpt && (
                                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mt-auto">
                                                {post.excerpt}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden w-full">
                    <Link href="/blog" className="block w-full">
                        <Button size="lg" className="w-full bg-black text-white">View Journal</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
