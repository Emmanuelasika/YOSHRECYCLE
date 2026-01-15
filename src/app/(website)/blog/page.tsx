import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);
    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1);

    return (
        <main className="min-h-screen bg-white text-black pt-32 md:pt-40 px-6 pb-24">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-24 text-center md:text-left">
                    <span className="text-[#63C14B] font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Yosh Recycle
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-black uppercase animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        The <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-neutral-400">Journal</span>
                    </h1>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                        <Link href={`/blog/${featuredPost.slug.current}`} className="group block relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                <div className="aspect-[16/9] lg:aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-neutral-100 shadow-2xl">
                                    {featuredPost.mainImage && (
                                        <Image
                                            src={urlFor(featuredPost.mainImage).width(1200).height(900).url()}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            priority
                                        />
                                    )}
                                    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg">
                                        Featured Story
                                    </div>
                                </div>

                                <div className="lg:pr-12">
                                    <span className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-6 block">
                                        {featuredPost.publishedAt ? new Date(featuredPost.publishedAt).toLocaleDateString() : 'Recent'}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none mb-8 group-hover:text-[#63C14B] transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    {featuredPost.excerpt && (
                                        <p className="text-xl text-neutral-500 leading-relaxed mb-8 max-w-xl">
                                            {featuredPost.excerpt}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm group-hover:text-[#63C14B] transition-colors">
                                        Read Full Article <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Remaining Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {remainingPosts.map((post: any) => (
                        <Link href={`/blog/${post.slug.current}`} key={post._id} className="group cursor-pointer block">
                            <div className="aspect-[3/2] bg-neutral-100 relative overflow-hidden rounded-2xl mb-8">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(600).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-neutral-400 font-mono text-sm uppercase">No Image</div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#63C14B]">
                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Archive'}
                                </span>
                                <h2 className="text-3xl font-bold uppercase leading-none tracking-tight group-hover:text-[#63C14B] transition-colors">
                                    {post.title}
                                </h2>
                                {post.excerpt && (
                                    <p className="text-neutral-500 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-40 bg-neutral-50 rounded-3xl">
                        <p className="text-xl text-neutral-400 font-bold uppercase tracking-widest">Journal Empty</p>
                    </div>
                )}
            </div>
        </main>
    );
}
