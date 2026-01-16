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
    heroTitlePart1?: string;
    heroTitleHighlight?: string;
    heroTitlePart2?: string;
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
    whyTitlePrefix?: string;
    whyTitleHighlight?: string;
    whySubtitle?: string;
    whyList?: { title: string; desc: string; img: string }[];
    impactTitle?: string;
    impactSubtitle?: string;
    impactStats?: { val: string; label: string }[];
    processTitlePrefix?: string;
    processTitleHighlight?: string;
    processDescription?: string;
    processSteps?: { id: string; title: string; desc: string; icon: string }[];
    servicesTitlePrefix?: string;
    servicesTitleHighlight?: string;
    servicesDescription?: string;
    servicesList?: { title: string; description: string; image: string; tag: string }[];
    guideTitlePrefix?: string;
    guideTitleHighlight?: string;
    guideSubtitle?: string;
    guideSteps?: { num: string; action: string; desc: string; color: string; img: string }[];
    productsTitlePrefix?: string;
    productsTitleHighlight?: string;
    productsDescription?: string;
    productsList?: { title: string; subtitle: string; desc: string; img: string }[];
    galleryTitlePrefix?: string;
    galleryTitleHighlight?: string;
    galleryImages?: string[];
    testimonialsTitle?: string;
    testimonialsList?: { quote: string; author: string; role: string }[];
    sponsorTitlePart1?: string;
    sponsorTitleHighlight?: string;
    sponsorTitlePart2?: string;
    sponsorDescription?: string;
    sponsorBadgeValue?: string;
    sponsorBadgeLabel?: string;
    teamTitlePrefix?: string;
    teamTitleHighlight?: string;
    teamDescription?: string;
    blogPreviewTitlePrefix?: string;
    blogPreviewTitleHighlight?: string;
}

interface HomeDefaultProps {
    data?: HomepageData | null;
}

export function HomeDefault({ data }: HomeDefaultProps) {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                titlePart1={data?.heroTitlePart1}
                titleHighlight={data?.heroTitleHighlight}
                titlePart2={data?.heroTitlePart2}
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
                titlePrefix={data?.whyTitlePrefix ?? undefined}
                titleHighlight={data?.whyTitleHighlight ?? undefined}
                subtitle={data?.whySubtitle ?? undefined}
                reasonsList={data?.whyList ?? undefined}
            />
            <Impact
                title={data?.impactTitle ?? undefined}
                subtitle={data?.impactSubtitle ?? undefined}
                stats={data?.impactStats ?? undefined}
            />
            <Gallery
                titlePrefix={data?.galleryTitlePrefix ?? undefined}
                titleHighlight={data?.galleryTitleHighlight ?? undefined}
                images={data?.galleryImages ?? undefined}
            />
            <Services
                titlePrefix={data?.servicesTitlePrefix ?? undefined}
                titleHighlight={data?.servicesTitleHighlight ?? undefined}
                description={data?.servicesDescription ?? undefined}
                servicesList={data?.servicesList ?? undefined}
            />
            <Process
                titlePrefix={data?.processTitlePrefix ?? undefined}
                titleHighlight={data?.processTitleHighlight ?? undefined}
                description={data?.processDescription ?? undefined}
                stepsList={data?.processSteps ?? undefined}
            />
            <RecycleGuide
                titlePrefix={data?.guideTitlePrefix ?? undefined}
                titleHighlight={data?.guideTitleHighlight ?? undefined}
                subtitle={data?.guideSubtitle ?? undefined}
                guidesList={data?.guideSteps ?? undefined}
            />
            <Products
                introTitlePrefix={data?.productsTitlePrefix ?? undefined}
                introTitleHighlight={data?.productsTitleHighlight ?? undefined}
                introDesc={data?.productsDescription ?? undefined}
                productsList={data?.productsList ?? undefined}
            />
            <Testimonials
                title={data?.testimonialsTitle}
                testimonialsList={data?.testimonialsList}
            />
            <SponsorCta
                titlePart1={data?.sponsorTitlePart1}
                titleHighlight={data?.sponsorTitleHighlight}
                titlePart2={data?.sponsorTitlePart2}
                description={data?.sponsorDescription}
                badgeValue={data?.sponsorBadgeValue}
                badgeLabel={data?.sponsorBadgeLabel}
            />
            <Team
                titlePrefix={data?.teamTitlePrefix}
                titleHighlight={data?.teamTitleHighlight}
                description={data?.teamDescription}
            />
            <BlogPreview
                titlePrefix={data?.blogPreviewTitlePrefix}
                titleHighlight={data?.blogPreviewTitleHighlight}
            />
        </main>
    );
}

