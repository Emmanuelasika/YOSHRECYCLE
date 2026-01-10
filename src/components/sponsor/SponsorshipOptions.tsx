"use client";

import { useState } from "react";
import { Copy, Check, CreditCard, Building2 } from "lucide-react";
import dynamic from "next/dynamic";
import { toast } from "sonner";

const PaystackButton = dynamic(() => import("react-paystack").then((mod) => mod.PaystackButton), { ssr: false });

export function SponsorshipOptions() {
    const [amount, setAmount] = useState<number>(3000); // Default to approx $2
    const [email, setEmail] = useState("");
    const [name, setName] = useState(""); // New Name State
    const [copied, setCopied] = useState(false);

    // Bank Details
    const bankDetails = {
        bankName: "Access Bank",
        accountName: "Yosh Recycle Limited",
        accountNumber: "1234567890" // Placeholder
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(bankDetails.accountNumber);
        setCopied(true);
        toast.success("Account number copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    // Paystack Config
    // NOTE: This logic assumes the amount is in Kobo for Paystack, so we multiply by 100.
    // However, the user input is in Naira.
    // $2 approx 3000 NGN.
    const componentProps = {
        email,
        amount: amount * 100, // Convert to kobo
        metadata: {
            name, // Pass Name
            phone: "",
            custom_fields: []
        },
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY || "pk_test_sample_key", // Fallback for dev
        text: "Sponsor Now",
        onSuccess: () => {
            toast.success("Thank you for your sponsorship!");
            setAmount(3000);
            setEmail("");
            setName("");
        },
        onClose: () => toast.info("Transaction cancelled"),
    };

    const handlePaystackClick = (e: any) => {
        if (!email) {
            e.preventDefault(); // This might not work on the button component directly, handled via validation usually
            toast.error("Please enter your email address.");
            return;
        }
        if (amount < 3000) {
            // e.preventDefault(); // Cannot prevent default on the library button easily if it doesn't expose it
            // We rely on visual validation or disabling the button
        }
    };

    // Better validation approach: Only render button if valid? 
    // Or just let Paystack handle some, but we want custom min amount check.

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* OPTION 1: BANK TRANSFER (Light Theme) */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:border-[#63C14B] transition-all group shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#63C14B]/10 rounded-full flex items-center justify-center text-[#63C14B]">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black leading-tight">Bank Transfer</h3>
                        <p className="text-neutral-500 text-sm">Zero fees, direct to corporate account</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Bank</span>
                        <span className="text-base text-black font-bold text-right">{bankDetails.bankName}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Account Name</span>
                        <span className="text-base text-black font-bold text-right">{bankDetails.accountName}</span>
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">Account Number</span>
                        <div className="flex items-center justify-between gap-3 bg-neutral-100/50 rounded-xl p-4 border border-neutral-200">
                            <span className="text-3xl text-[#63C14B] font-mono font-bold tracking-wider">
                                {bankDetails.accountNumber}
                            </span>
                            <button
                                onClick={handleCopy}
                                className="p-3 rounded-full bg-white shadow-sm border border-neutral-100 hover:border-[#63C14B] text-neutral-600 hover:text-[#63C14B] transition-all"
                                title="Copy"
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPTION 2: PAYSTACK (Dark/Glass Theme) */}
            <div className="relative bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-[#63C14B] text-black px-3 py-1 rounded-full">
                    Recommended
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#63C14B] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(99,193,75,0.4)]">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white leading-tight">Card Payment</h3>
                        <p className="text-neutral-400 text-sm">Instant secure payment via Paystack</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="grid gap-5">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#63C14B] focus:bg-white/5 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#63C14B] focus:bg-white/5 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                            Sponsorship Amount <span className="text-[#63C14B] ml-2 normal-case">(Min: ₦3,000)</span>
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-lg">₦</span>
                            <input
                                type="number"
                                min="3000"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white focus:outline-none focus:border-[#63C14B] focus:bg-white/5 transition-all font-mono text-xl font-bold"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        {email && name && amount >= 3000 ? (
                            <PaystackButton
                                {...componentProps}
                                className="w-full py-4 bg-[#63C14B] hover:bg-[#52a33d] hover:scale-[1.02] active:scale-[0.98] text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(99,193,75,0.3)] hover:shadow-[0_0_30px_rgba(99,193,75,0.5)]"
                            />
                        ) : (
                            <button
                                disabled
                                className="w-full py-4 bg-white/5 text-neutral-500 font-bold uppercase tracking-widest text-sm rounded-xl cursor-not-allowed border border-white/5"
                            >
                                Fill Details to Sponsor
                            </button>
                        )}
                        {amount < 3000 && (
                            <p className="text-red-500 text-xs mt-3 text-center bg-red-500/10 py-2 rounded-lg font-medium">Minimum amount is ₦3,000</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
