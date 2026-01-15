import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight lg:text-5xl mb-4">
                        The Journal
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Updates from the team on recycling technology, community impact, and sustainability.
                    </p>
                </div>

                <Separator className="my-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group h-full">
                            <Card className="h-full border-none shadow-none bg-transparent hover:bg-neutral-50/50 transition-colors rounded-xl overflow-hidden flex flex-col">
                                <div className="aspect-[16/10] relative rounded-xl overflow-hidden border bg-muted mb-4">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).width(800).height(500).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-muted-foreground bg-muted">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <CardContent className="p-0 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Badge variant="outline" className="rounded-md font-normal text-muted-foreground">
                                            Article
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">
                                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    {post.excerpt && (
                                        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    <div className="text-sm font-medium text-primary flex items-center gap-1 mt-auto">
                                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20 border rounded-xl border-dashed">
                        <p className="text-muted-foreground">No posts have been published yet.</p>
                        <Button variant="link" asChild className="mt-2">
                            <Link href="/studio">Go to Studio</Link>
                        </Button>
                    </div>
                )}

            </div>
        </main>
    );
}
