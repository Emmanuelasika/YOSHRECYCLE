"use client";

import { useState } from "react";
import { Copy, Check, Building2 } from "lucide-react";
import { toast } from "sonner";

interface SponsorshipOptionsProps {
    accountDetails?: {
        bankName: string;
        accountName: string;
        accountNumber: string;
    };
}

export function SponsorshipOptions({ accountDetails }: SponsorshipOptionsProps) {
    const [copied, setCopied] = useState(false);

    // Bank Details (fetched or fallback)
    const bankDetails = accountDetails || {
        bankName: "Zenith Bank",
        accountName: "Yosh Recycle Limited",
        accountNumber: "1224978692"
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(bankDetails.accountNumber);
        setCopied(true);
        toast.success("Account number copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
            {/* OPTION 1: BANK TRANSFER (Only Option) */}
            <div className="bg-white border-2 border-[#63C14B]/20 rounded-3xl p-8 lg:p-12 hover:border-[#63C14B] transition-all group shadow-2xl relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#63C14B]/5 rounded-bl-[100px] -mr-10 -mt-10 pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 mb-10 relative z-10">
                    <div className="w-20 h-20 bg-[#63C14B] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#63C14B]/20">
                        <Building2 size={40} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-black leading-tight mb-2">Sponsorship Account</h3>
                        <p className="text-neutral-500 text-lg">Direct transfer to our official corporate account.</p>
                    </div>
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="flex flex-col border-b md:border-b-0 md:border-r border-neutral-200 pb-4 md:pb-0 md:pr-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Bank Name</span>
                                <span className="text-xl md:text-2xl text-black font-bold">{bankDetails.bankName}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Account Name</span>
                                <span className="text-xl md:text-2xl text-black font-bold">{bankDetails.accountName}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-3 text-center md:text-left">Account Number</span>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex-1 w-full bg-[#63C14B]/10 rounded-2xl p-5 border border-[#63C14B]/20 flex items-center justify-center md:justify-start">
                                <span className="text-4xl md:text-5xl text-[#63C14B] font-mono font-bold tracking-widest">
                                    {bankDetails.accountNumber}
                                </span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="w-full md:w-auto p-5 rounded-2xl bg-black text-white hover:bg-[#63C14B] hover:text-black transition-all font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg"
                            >
                                {copied ? (
                                    <>
                                        <Check size={20} /> Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={20} /> Copy Number
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-neutral-400 text-sm">
                    Please use your name or organization as the reference when making a transfer.
                </p>
            </div>
        </div>
    );
}
