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
        <article className="min-h-screen bg-white text-black pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 mb-12 hover:text-black transition-colors">
                    <ArrowLeft size={16} /> Back to News
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <span className="text-[#63C14B] font-bold uppercase tracking-widest text-sm mb-4 block">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight mb-8">
                        {post.title}
                    </h1>
                    {post.author && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200" />
                            <span className="font-medium text-lg">{post.author}</span>
                        </div>
                    )}
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-16 bg-neutral-100">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Body */}
                <div className="prose prose-xl prose-neutral max-w-none prose-headings:font-bold prose-headings:uppercase prose-a:text-[#63C14B]">
                    <PortableText value={post.body} />
                </div>
            </div>
        </article>
    );
}
