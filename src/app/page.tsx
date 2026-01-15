import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Impact } from "@/components/home/Impact";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { RecycleGuide } from "@/components/home/RecycleGuide";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { SponsorCta } from "@/components/home/SponsorCta";
import { Products } from "@/components/home/Products";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { Team } from "@/components/home/Team";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Mission />
            <WhyItMatters />
            <Impact />
            <Gallery />
            <Services />
            <Process />
            <RecycleGuide />
            <Products />
            <Testimonials />
            <SponsorCta />
            <Team />
            <BlogPreview />
        </main>
    );
}
