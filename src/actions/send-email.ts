"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject is too short"),
    message: z.string().min(10, "Message is too short"),
    honeypot: z.string().optional(), // Hidden field for spam bots
});

export async function sendEmail(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        honeypot: formData.get("honeypot"),
    };

    // Honeypot Check: If filled, fail silently (or pretend success)
    if (data.honeypot && data.honeypot.toString().length > 0) {
        return { success: true, message: "Message sent successfully!" };
    }

    // Validate Data
    const result = ContactSchema.safeParse(data);
    if (!result.success) {
        return { success: false, message: "Please check the form for errors.", errors: result.error.flatten().fieldErrors };
    }

    const { name, email, subject, message } = result.data;

    try {
        if (!process.env.RESEND_API_KEY) {
            // Allow testing without API key in dev
            console.log("RESEND_API_KEY missing. Simulating send:", { name, email, message });
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true, message: "Message sent! (Simulation)" };
        }

        const { error } = await resend.emails.send({
            from: "Yosh Contact Form <onboarding@resend.dev>", // Update this when domain is verified
            to: ["hello@yoshrecycle.org"], // Ideally env var
            replyTo: email,
            subject: `New Message: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return { success: false, message: error.message };
        }

        return { success: true, message: "Thank you! We'll be in touch." };
    } catch (err) {
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
