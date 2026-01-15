import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60;

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await client.fetch(POST_QUERY, params);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">

                <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-foreground">
                    <Link href="/blog" className="gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Journal
                    </Link>
                </Button>

                <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="rounded-full">News</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>{post.author ? post.author[0] : 'Y'}</AvatarFallback>
                            </Avatar>
                            <div className="text-sm">
                                <p className="font-medium leading-none">{post.author || 'Yosh Team'}</p>
                                <p className="text-muted-foreground">Editor</p>
                            </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground gap-1">
                            <Clock className="h-4 w-4" /> 5 min read
                        </div>
                    </div>
                </div>

                {post.mainImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted mb-12 shadow-sm">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-neutral dark:prose-invert max-w-none 
             prose-headings:scroll-m-20 prose-headings:font-semibold prose-headings:tracking-tight
             prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
             prose-p:leading-7 prose-p:text-muted-foreground prose-p:mb-6
             prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline
             prose-img:rounded-xl prose-img:border
             prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
          ">
                    <PortableText
                        value={post.body}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <figure className="my-10">
                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border">
                                            <Image src={urlFor(value).url()} alt="Content Image" fill className="object-cover" />
                                        </div>
                                    </figure>
                                )
                            }
                        }}
                    />
                </div>

                <Separator className="my-12" />

                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <p>Published in <span className="font-medium text-foreground">Sustainability</span></p>
                    <div className="flex gap-4">
                        <Button variant="ghost" size="sm">Share</Button>
                    </div>
                </div>

            </div>
        </article>
    );
}
