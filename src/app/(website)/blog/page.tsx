import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"; // You might need to install date-fns or use native Intl

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);

    return (
        <main className="min-h-screen bg-white text-black pt-32 px-[5vw]">
            <div className="max-w-[1800px] mx-auto">
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-20 leading-[0.85]">
                    Latest <br />
                    <span className="text-[#63C14B]">News</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group cursor-pointer">
                            {/* Image */}
                            <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden rounded-sm mb-6">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(600).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-neutral-400">No Image</div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B]">
                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight group-hover:text-[#63C14B] transition-colors">
                                    {post.title}
                                </h2>
                                {post.excerpt && (
                                    <p className="text-neutral-500 line-clamp-2 md:text-lg">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-neutral-400">No posts found. Create one in the Studio!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
