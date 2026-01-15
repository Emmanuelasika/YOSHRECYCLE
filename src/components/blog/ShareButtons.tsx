"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const url = `https://yoshrecycle.org/blog/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
    };

    return (
        <div className="flex flex-wrap gap-4">
            <Button
                variant="outline"
                className="rounded-full hover:bg-black hover:text-white hover:border-black transition-colors"
                onClick={() => handleShare('twitter')}
            >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
            </Button>

            <Button
                variant="outline"
                className="rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"
                onClick={() => handleShare('linkedin')}
            >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
            </Button>

            <Button
                variant="outline"
                className="rounded-full hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-colors"
                onClick={() => handleShare('facebook')}
            >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
            </Button>

            <Button
                variant="outline"
                className="rounded-full hover:bg-[#63C14B] hover:text-white hover:border-[#63C14B] transition-colors"
                onClick={handleCopy}
            >
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
            </Button>
        </div>
    );
}
