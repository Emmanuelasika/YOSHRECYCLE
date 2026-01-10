"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

// Submit Button Component
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="group flex items-center justify-center gap-2 w-full bg-[#63C14B] text-black font-bold py-4 rounded-full hover:bg-[#52a33d] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
        >
            {pending ? (
                <>
                    <Loader2 className="animate-spin" /> Sending...
                </>
            ) : (
                <>
                    Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </button>
    );
}

interface FormState {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
}

const initialState: FormState = {
    success: false,
    message: "",
    errors: {}
};

export function ContactForm() {
    // React 19 useActionState (assuming React 19 from package.json)
    // If not React 19, we'd use useFormState from react-dom
    const [state, formAction] = useActionState<FormState, FormData>(sendEmail, initialState);

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast.success(state.message);
                // Optional: Reset form here if needed, usually requires ref
                // document.getElementById("contact-form")?.reset(); 
                // But native form action resets automatically often on success if controlled.
                // Let's rely on toast for now.
            } else {
                toast.error(state.message);
            }
        }
    }, [state]);

    return (
        <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full bg-neutral-100 border border-neutral-200 p-4 rounded-xl text-black focus:outline-none focus:border-[#63C14B] focus:ring-1 focus:ring-[#63C14B] transition-all placeholder:text-neutral-400"
                    />
                    {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        required
                        className="w-full bg-neutral-100 border border-neutral-200 p-4 rounded-xl text-black focus:outline-none focus:border-[#63C14B] focus:ring-1 focus:ring-[#63C14B] transition-all placeholder:text-neutral-400"
                    />
                    {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                <div className="relative">
                    <select
                        id="subject"
                        name="subject"
                        defaultValue=""
                        required
                        className="w-full bg-neutral-100 border border-neutral-200 p-4 rounded-xl text-black focus:outline-none focus:border-[#63C14B] focus:ring-1 focus:ring-[#63C14B] transition-all appearance-none cursor-pointer"
                    >
                        <option value="" disabled className="text-neutral-500">Select a Topic</option>
                        <option value="Sponsorship">Sponsorship Inquiry</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Collection">Request Collection</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                        <ArrowRight size={16} className="rotate-90" />
                    </div>
                </div>
                {state.errors?.subject && <p className="text-red-500 text-xs">{state.errors.subject[0]}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="How can we help?"
                    required
                    className="w-full bg-neutral-100 border border-neutral-200 p-4 rounded-xl text-black focus:outline-none focus:border-[#63C14B] focus:ring-1 focus:ring-[#63C14B] transition-all resize-none placeholder:text-neutral-400"
                />
                {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
            </div>

            {/* HONEYPOT FIELD (Hidden) */}
            <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

            <SubmitButton />
        </form>
    );
}
