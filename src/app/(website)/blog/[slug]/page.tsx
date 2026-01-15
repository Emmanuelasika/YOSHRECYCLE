import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await client.fetch(POST_QUERY, params);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-white text-black pt-32 pb-24">
            {/* Global container */}
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Top Nav */}
                <Link href="/blog" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-16 hover:text-[#63C14B] transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
                </Link>

                {/* Header Section */}
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#63C14B] mb-6">
                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent Story'}</span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                        <span>{post.author || 'Yosh Team'}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight mb-8 text-balance">
                        {post.title}
                    </h1>
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="w-full aspect-[21/9] relative rounded-[2rem] overflow-hidden mb-20 bg-neutral-100 shadow-2xl">
                        <Image
                            src={urlFor(post.mainImage).width(1920).height(1080).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content Body */}
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg md:prose-xl prose-neutral max-w-none 
                prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-black
                prose-p:leading-relaxed prose-p:text-neutral-600
                prose-a:text-[#63C14B] prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-3xl prose-img:shadow-lg
                prose-blockquote:border-l-[#63C14B] prose-blockquote:bg-neutral-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
             ">
                        <PortableText
                            value={post.body}
                            components={{
                                types: {
                                    image: ({ value }) => (
                                        <div className="relative w-full aspect-video my-8 rounded-2xl overflow-hidden">
                                            <Image src={urlFor(value).url()} alt="Blog Image" fill className="object-cover" />
                                        </div>
                                    )
                                }
                            }}
                        />
                    </div>

                    {/* Footer / Share / Tags PLACEHOLDER */}
                    <div className="mt-20 pt-10 border-t border-neutral-100 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
                        <span>Share this article</span>
                        <div className="flex gap-4">
                            {/* Social icons placeholders */}
                            <span className="hover:text-black cursor-pointer">Twitter</span>
                            <span className="hover:text-black cursor-pointer">LinkedIn</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
