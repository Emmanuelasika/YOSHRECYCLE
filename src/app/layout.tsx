import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yosh Recycle | Redefining Waste",
  description: "Yosh Recycle is an indigenous waste recovery and recycling enterprise committed to environmental sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, "antialiased selection:bg-[#63C14B] selection:text-white bg-white text-black")}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
