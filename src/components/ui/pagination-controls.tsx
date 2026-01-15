"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

export function PaginationControls({ currentPage, totalPages, baseUrl }: PaginationControlsProps) {
    if (totalPages <= 1) return null;

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="flex items-center justify-center gap-4 mt-20">
            {prevPage ? (
                <Link href={`${baseUrl}?page=${prevPage}`}>
                    <Button variant="outline" className="rounded-full group border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Previous
                    </Button>
                </Link>
            ) : (
                <Button variant="outline" disabled className="rounded-full opacity-50 cursor-not-allowed border-black/5">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
            )}

            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Page {currentPage} of {totalPages}
            </span>

            {nextPage ? (
                <Link href={`${baseUrl}?page=${nextPage}`}>
                    <Button variant="outline" className="rounded-full group border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                        Next <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            ) : (
                <Button variant="outline" disabled className="rounded-full opacity-50 cursor-not-allowed border-black/5">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}
        </div>
    );
}
