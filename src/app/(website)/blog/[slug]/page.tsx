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
        <article className="min-h-screen bg-white text-black pt-40 pb-24 px-6 md:px-12">
            <div className="max-w-[1000px] mx-auto border-l border-black pl-6 md:pl-12">

                {/* Internal Nav */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12 hover:text-black transition-colors">
                    <ArrowLeft size={14} /> Back to NewsRoom
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 font-mono text-xs uppercase tracking-widest border-b border-neutral-200 pb-4">
                        <span className="text-[#63C14B]">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</span>
                        <span>/</span>
                        <span>{post.author || 'Yosh Team'}</span>
                        <span>/</span>
                        <span>5 Min Read</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter text-balance">
                        {post.title}
                    </h1>
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="w-full relative aspect-[16/9] bg-neutral-100 mb-16 border border-black grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Body Content */}
                <div className="prose prose-lg md:prose-xl prose-neutral max-w-none
             prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-headings:mb-6
             prose-p:font-serif prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed prose-p:text-neutral-800
             prose-a:text-[#63C14B] prose-a:font-mono prose-a:text-base prose-a:uppercase prose-a:no-underline hover:prose-a:underline
             prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic
             prose-img:border prose-img:border-black prose-img:grayscale hover:prose-img:grayscale-0 prose-img:transition-all
          ">
                    <PortableText
                        value={post.body}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <figure className="my-12">
                                        <div className="relative w-full aspect-[3/2] border border-black">
                                            <Image src={urlFor(value).url()} alt="Content Image" fill className="object-cover" />
                                        </div>
                                    </figure>
                                )
                            }
                        }}
                    />
                </div>

                <div className="mt-24 pt-12 border-t border-black flex justify-between font-mono text-xs uppercase">
                    <span>Yosh Recycle &copy; 2026</span>
                    <a href="#" className="hover:text-[#63C14B]">Share Article</a>
                </div>

            </div>
        </article>
    );
}
