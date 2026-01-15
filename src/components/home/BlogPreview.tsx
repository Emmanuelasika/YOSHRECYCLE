"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { RECENT_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogPreview() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.fetch(RECENT_POSTS_QUERY).then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    // Show empty state or nothing if really no posts and not loading
    const displayPosts = posts.length > 0 ? posts : [];

    if (!loading && displayPosts.length === 0) return null;

    return (
        <section className="py-24 bg-neutral-50 border-t">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Updates</h2>
                        <p className="text-muted-foreground w-full md:w-2/3">
                            Insights and news from our journey to zero waste.
                        </p>
                    </div>
                    <Link href="/blog" className="hidden md:block">
                        <Button variant="outline">View All Posts</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading ? (
                        // Loading Skeletons
                        Array(3).fill(0).map((_, i) => (
                            <Card key={i} className="overflow-hidden border-none shadow-none bg-transparent">
                                <Skeleton className="h-48 w-full rounded-xl mb-4" />
                                <Skeleton className="h-4 w-1/4 mb-2" />
                                <Skeleton className="h-6 w-3/4 mb-2" />
                            </Card>
                        ))
                    ) : (
                        displayPosts.map((post) => (
                            <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                                <Card className="overflow-hidden h-full border-none shadow-none bg-transparent hover:bg-white transition-colors duration-200 p-0">
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border bg-neutral-100">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).width(600).height(400).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-0">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="secondary" className="rounded-full font-normal">
                                                News
                                            </Badge>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-[#63C14B] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-0 mt-4">
                                        <div className="text-sm font-semibold flex items-center gap-1 text-[#63C14B]">
                                            Read Article <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))
                    )}
                </div>
                <div className="mt-8 md:hidden">
                    <Link href="/blog" className="block w-full">
                        <Button className="w-full" variant="outline">View All Posts</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
