import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const revalidate = 60;

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await client.fetch(POST_QUERY, params);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-white text-black pt-32 pb-24">
            {/* Reading Container */}
            <div className="max-w-3xl mx-auto px-6">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 mb-10 hover:text-[#63C14B] transition-colors">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm font-medium text-[#63C14B] mb-6">
                        <span className="flex items-center gap-1.5 bg-[#63C14B]/10 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                        </span>
                        <span className="flex items-center gap-1.5 text-neutral-400">
                            <Clock size={14} />
                            5 Min Read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500">
                            {post.author ? post.author[0] : 'Y'}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-neutral-900">{post.author || 'Yosh Team'}</p>
                            <p className="text-neutral-500">Editor</p>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                    <div className="w-full relative aspect-[16/9] bg-neutral-100 mb-16 rounded-2xl overflow-hidden shadow-sm">
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
                <div className="prose prose-lg prose-neutral max-w-none
             prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900
             prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
             prose-p:text-neutral-700 prose-p:leading-8
             prose-strong:font-bold prose-strong:text-neutral-900
             prose-a:text-[#63C14B] prose-a:font-medium hover:prose-a:text-[#4da837] prose-a:no-underline
             prose-img:rounded-2xl prose-img:shadow-md
             prose-blockquote:border-l-4 prose-blockquote:border-[#63C14B] prose-blockquote:bg-neutral-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-neutral-700
          ">
                    <PortableText
                        value={post.body}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <figure className="my-10">
                                        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
                                            <Image src={urlFor(value).url()} alt="Content Image" fill className="object-cover" />
                                        </div>
                                    </figure>
                                )
                            }
                        }}
                    />
                </div>

                <div className="mt-20 pt-10 border-t border-neutral-100">
                    <p className="font-bold text-neutral-900 mb-4">Share this article</p>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-neutral-100 rounded-full text-sm font-bold text-neutral-600 hover:bg-[#63C14B] hover:text-white transition-colors">
                            Twitter
                        </button>
                        <button className="px-6 py-2 bg-neutral-100 rounded-full text-sm font-bold text-neutral-600 hover:bg-[#0077b5] hover:text-white transition-colors">
                            LinkedIn
                        </button>
                    </div>
                </div>

            </div>
        </article>
    );
}
