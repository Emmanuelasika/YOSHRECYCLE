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

interface HomepageData {
    heroTitle?: string;
    heroSubtitle?: string;
    heroVideoUrl?: string;
    heroPrimaryButtonLabel?: string;
    heroPrimaryButtonLink?: string;
    heroSecondaryButtonLabel?: string;
    heroSecondaryButtonLink?: string;
    missionTitle?: string;
    missionStat1Value?: string;
    missionStat1Label?: string;
    missionStat2Value?: string;
    missionStat2Label?: string;
    whyTitle?: string;
    whySubtitle?: string;
    whyList?: { title: string; desc: string; img: string }[];
    impactTitle?: string;
    impactSubtitle?: string;
    impactStats?: { val: string; label: string }[];
    processTitle?: string;
    processDescription?: string;
    processSteps?: { id: string; title: string; desc: string; icon: string }[];
    servicesTitle?: string;
    servicesDescription?: string;
    servicesList?: { title: string; description: string; image: string; tag: string }[];
    guideTitle?: string;
    guideSubtitle?: string;
    guideSteps?: { num: string; action: string; desc: string; color: string; img: string }[];
    productsTitle?: string;
    productsDescription?: string;
    productsList?: { title: string; subtitle: string; desc: string; img: string }[];
    galleryTitle?: string;
    galleryImages?: string[];
    testimonialsTitle?: string;
    testimonialsList?: { quote: string; author: string; role: string }[];
    sponsorTitle?: string;
    sponsorDescription?: string;
    sponsorBadgeValue?: string;
    sponsorBadgeLabel?: string;
    teamTitle?: string;
    teamDescription?: string;
    blogPreviewTitle?: string;
}

interface HomeDefaultProps {
    data?: HomepageData | null;
}

export function HomeDefault({ data }: HomeDefaultProps) {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title={data?.heroTitle}
                subtitle={data?.heroSubtitle}
                videoUrl={data?.heroVideoUrl}
                ctaPrimaryLabel={data?.heroPrimaryButtonLabel}
                ctaPrimaryLink={data?.heroPrimaryButtonLink}
                ctaSecondaryLabel={data?.heroSecondaryButtonLabel}
                ctaSecondaryLink={data?.heroSecondaryButtonLink}
            />
            <Mission
                title={data?.missionTitle}
                stat1Value={data?.missionStat1Value}
                stat1Label={data?.missionStat1Label}
                stat2Value={data?.missionStat2Value}
                stat2Label={data?.missionStat2Label}
            />
            <WhyItMatters
                title={data?.whyTitle ?? undefined}
                subtitle={data?.whySubtitle ?? undefined}
                reasonsList={data?.whyList ?? undefined}
            />
            <Impact
                title={data?.impactTitle ?? undefined}
                subtitle={data?.impactSubtitle ?? undefined}
                stats={data?.impactStats ?? undefined}
            />
            <Gallery
                title={data?.galleryTitle ?? undefined}
                images={data?.galleryImages ?? undefined}
            />
            <Services
                title={data?.servicesTitle ?? undefined}
                description={data?.servicesDescription ?? undefined}
                servicesList={data?.servicesList ?? undefined}
            />
            <Process
                title={data?.processTitle ?? undefined}
                description={data?.processDescription ?? undefined}
                stepsList={data?.processSteps ?? undefined}
            />
            <RecycleGuide
                title={data?.guideTitle ?? undefined}
                subtitle={data?.guideSubtitle ?? undefined}
                guidesList={data?.guideSteps ?? undefined}
            />
            <Products
                introTitle={data?.productsTitle ?? undefined}
                introDesc={data?.productsDescription ?? undefined}
                productsList={data?.productsList ?? undefined}
            />
            <Testimonials
                title={data?.testimonialsTitle}
                testimonialsList={data?.testimonialsList}
            />
            <SponsorCta
                title={data?.sponsorTitle}
                description={data?.sponsorDescription}
                badgeValue={data?.sponsorBadgeValue}
                badgeLabel={data?.sponsorBadgeLabel}
            />
            <Team
                title={data?.teamTitle}
                description={data?.teamDescription}
            />
            <BlogPreview
                title={data?.blogPreviewTitle}
            />
        </main>
    );
}

