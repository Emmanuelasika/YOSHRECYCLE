import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShareButtons } from "@/components/blog/ShareButtons";

export const revalidate = 60;

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await client.fetch(POST_QUERY, params);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-white pt-40 pb-32">
            {/* Max Width Container */}
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="mb-12">
                    <Link href="/blog">
                        <Button variant="outline" className="pl-6 group border-black/10 hover:border-black">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Editorial Header */}
                <header className="mb-16 text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <Badge variant="secondary" className="bg-[#63C14B]/10 text-[#63C14B] hover:bg-[#63C14B]/20 border-transparent">News</Badge>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-12 text-balance">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12 border border-black/5">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-[#63C14B] text-white font-bold">Y</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="text-sm font-bold uppercase tracking-wide">{post.author || 'Yosh Team'}</p>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Editorial Staff</p>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                {post.mainImage && (
                    <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-neutral-100 mb-20 shadow-sm border border-black/5">
                        <Image
                            src={urlFor(post.mainImage).width(1920).height(1080).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg md:prose-xl prose-neutral max-w-none 
                prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-black
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:font-medium
                prose-a:text-[#63C14B] prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#63C14B] prose-blockquote:pl-8 prose-blockquote:py-4 prose-blockquote:bg-neutral-50 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-black/5
             ">
                        <PortableText
                            value={post.body}
                            components={{
                                block: {
                                    h2: ({ children }) => <h2 className="mt-16 mb-8 text-4xl font-bold uppercase tracking-tighter leading-none">{children}</h2>,
                                    h3: ({ children }) => <h3 className="mt-12 mb-6 text-2xl font-bold uppercase tracking-tight">{children}</h3>,
                                    normal: ({ children }) => <p className="mb-8 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">{children}</p>,
                                },
                                types: {
                                    image: ({ value }) => (
                                        <figure className="my-16">
                                            <div className="relative w-full aspect-[3/2] rounded-[2rem] overflow-hidden border border-black/5 bg-neutral-100">
                                                <Image src={urlFor(value).url()} alt="Content Image" fill className="object-cover" />
                                            </div>
                                        </figure>
                                    )
                                }
                            }}
                        />
                    </div>

                    <Separator className="my-20" />

                    {/* Footer area */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-12 bg-neutral-50 rounded-[2rem] border border-black/5">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Share this story</h3>
                            <p className="text-neutral-500">Help us spread the word about sustainable living.</p>
                        </div>
                        <ShareButtons title={post.title} slug={params.slug} />
                    </div>
                </div>

            </div>
        </article>
    );
}
