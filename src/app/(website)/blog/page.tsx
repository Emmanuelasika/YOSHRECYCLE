import { client } from "@/sanity/lib/client";
import { PAGINATED_POSTS_QUERY, POSTS_COUNT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PaginationControls } from "@/components/ui/pagination-controls";

export const revalidate = 60;

const POSTS_PER_PAGE = 9;

interface BlogPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage(props: BlogPageProps) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams.page) || 1;
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;

    // Parallel data fetching
    const [posts, totalPosts] = await Promise.all([
        client.fetch(PAGINATED_POSTS_QUERY, { start, end }),
        client.fetch(POSTS_COUNT_QUERY)
    ]);

    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return (
        <main className="min-h-screen bg-white pt-32 md:pt-40 pb-32 px-6 md:px-[5vw]">
            <div className="max-w-[1800px] mx-auto">

                {/* Brand Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 border-b border-black/10 pb-12">
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Latest Updates</span>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">
                            Our <br /> <span className="text-[#63C14B]">Blog</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-neutral-500 max-w-md text-right mt-8 md:mt-0">
                        Documenting our mission to rid the world of waste, one community at a time.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group h-full">
                            <Card className="h-full border border-black/5 bg-white hover:shadow-2xl transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col">
                                <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).width(800).height(500).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-neutral-50 text-neutral-300">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute top-6 left-6">
                                        <Badge variant="secondary" className="bg-white/90 backdrop-blur text-black">Article</Badge>
                                    </div>
                                </div>

                                <CardContent className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B]">
                                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight mb-4 group-hover:text-[#63C14B] transition-colors">
                                        {post.title}
                                    </h2>

                                    {post.excerpt && (
                                        <p className="text-neutral-500 text-lg leading-relaxed line-clamp-3 mt-auto">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-widest">Read Story</span>
                                        <ArrowUpRight className="text-[#63C14B] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="py-40 text-center bg-neutral-50 rounded-[2rem] border border-dashed border-neutral-200">
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">No Stories Found</h3>
                        <p className="text-neutral-500 mb-8">There are no posts for this page.</p>
                        <Link href="/blog">
                            <Button>Back to Start</Button>
                        </Link>
                    </div>
                )}

                {/* Pagination */}
                <PaginationControls currentPage={page} totalPages={totalPages} baseUrl="/blog" />

            </div>
        </main>
    );
}
