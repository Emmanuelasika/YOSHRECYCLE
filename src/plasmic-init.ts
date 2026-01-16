import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Hero } from "./components/home/Hero";
import { Mission } from "./components/home/Mission";
import { Impact } from "./components/home/Impact";
import { Services } from "./components/home/Services";
import { Process } from "./components/home/Process";
import { RecycleGuide } from "./components/home/RecycleGuide";
import { WhyItMatters } from "./components/home/WhyItMatters";
import { SponsorCta } from "./components/home/SponsorCta";
import { Products } from "./components/home/Products";
import { Testimonials } from "./components/home/Testimonials";
import { Gallery } from "./components/home/Gallery";
import { Team } from "./components/home/Team";
import { BlogPreview } from "./components/home/BlogPreview";
import { BeforeAfterSlider } from "./components/ui/BeforeAfterSlider";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "vfvQXZYJiX5wrRraw6dXZj",
            token: "poLS1fFHPJHdwjHuqx8LjV7BWPdezYMipCDer7MmQzRe87AdecRF7J77U2euc0NH0YoqQCLh2HZPjQmJJpw7A",
        },
    ],
    preview: true,
});

export function registerAllComponents() {
    PLASMIC.registerComponent(Hero, {
        name: "Hero",
        props: {
            title: { type: "string", defaultValue: "Community Powered Recycling" },
            subtitle: { type: "string", defaultValue: "We are a community powered plastic recycling initiative." },
            videoUrl: { type: "string", defaultValue: "/assets/videos/video-2.mp4", description: "URL to video file" },
            ctaPrimaryLabel: { type: "string", defaultValue: "Our Mission" },
            ctaPrimaryLink: { type: "string", defaultValue: "/about" },
            ctaSecondaryLabel: { type: "string", defaultValue: "Sponsor a Bag" },
            ctaSecondaryLink: { type: "string", defaultValue: "/sponsor" },
        },
    });

    PLASMIC.registerComponent(Mission, {
        name: "Mission",
        props: {
            title: {
                type: "string",
                defaultValue: "To rid Nigeria of plastic waste, one state at a time. We believe waste is a <span class='text-[#63C14B]'>design flaw</span>, not an inevitability."
            },
            stat1Value: { type: "string", defaultValue: "350+ Tons" },
            stat1Label: { type: "string", defaultValue: "Plastic recoverd annually from local communities." },
            stat2Value: { type: "string", defaultValue: "Zero Cost" },
            stat2Label: { type: "string", defaultValue: "Free collection for households and businesses." },
        },
    });

    PLASMIC.registerComponent(Impact, {
        name: "Impact",
        props: {
            title: { type: "string", defaultValue: "Real <br /> <span class='text-[#63C14B]'>Numbers</span>." },
            subtitle: { type: "string", defaultValue: "Measurable impact on our environment and our local economy." },
            stats: {
                type: "array",
                defaultValue: [
                    { val: "205k+", label: "Plastics Collected (kg)" },
                    { val: "5k+", label: "Homes Satisfied" },
                    { val: "25+", label: "Industries Served" },
                ],
                itemType: {
                    type: "object",
                    fields: {
                        val: { type: "string" },
                        label: { type: "string" }
                    }
                }
            },
        },
    });

    PLASMIC.registerComponent(Services, {
        name: "Services",
        props: {
            title: { type: "string", defaultValue: "What <br /> <span class='text-[#63C14B]'>We Do</span>" },
            description: { type: "string", defaultValue: "Bridging the gap between community waste and industrial value through three core pillars." },
            servicesList: {
                type: "array",
                defaultValue: [
                    {
                        title: "Household Collection",
                        description: "Doorstep pickup for homes. We provide the bags, you fill them. Simple, free, and impactful.",
                        image: "/assets/images/service_household_white_logo.png",
                        tag: "Residential"
                    },
                    {
                        title: "Commercial Waste",
                        description: "Tailored recycling programs for schools, offices, and estates. Turn your waste into social capital.",
                        image: "/assets/images/service_commercial_v2.png",
                        tag: "B2B / B2G"
                    },
                    {
                        title: "Material Recovery",
                        description: "Our advanced facility processes raw waste into clean, manufacturing-grade flakes and bales.",
                        image: "/assets/images/service_factory_v2.png",
                        tag: "Industrial"
                    }
                ],
                itemType: {
                    type: "object",
                    fields: {
                        title: { type: "string" },
                        description: { type: "string" },
                        image: { type: "imageUrl" },
                        tag: { type: "string" }
                    }
                }
            },
        },
    });

    PLASMIC.registerComponent(Process, {
        name: "Process",
        props: {
            title: { type: "string", defaultValue: "The <br /> <span class='text-[#63C14B]'>Process</span>" },
            description: { type: "string", defaultValue: "A transparent, verified workflow that turns community waste into global value. Zero landfills, 100% impact." },
            stepsList: {
                type: "array",
                defaultValue: [
                    {
                        id: "01",
                        title: "Distribute Bags",
                        desc: "We empower the community by providing branded, heavy-duty collection bags to households, schools, and local businesses.",
                        icon: "Package"
                    },
                    // ... (rest of defaults omitted for brevity, will be editable in editor)
                ],
                itemType: {
                    type: "object",
                    fields: {
                        id: { type: "string" },
                        title: { type: "string" },
                        desc: { type: "string" },
                        icon: {
                            type: "choice",
                            options: ["Package", "Truck", "Recycle", "School"],
                            defaultValue: "Package"
                        }
                    }
                }
            },
        },
    });

    PLASMIC.registerComponent(RecycleGuide, {
        name: "RecycleGuide",
        props: {
            title: { type: "string", defaultValue: "How To <br /> <span class='text-[#63C14B]'>Prepare</span>" },
            subtitle: { type: "string", defaultValue: "3 simple steps to ensure your plastic waste is ready for a new life." },
            guidesList: {
                type: "array",
                itemType: {
                    type: "object",
                    fields: {
                        num: { type: "string" },
                        action: { type: "string" },
                        desc: { type: "string" },
                        color: { type: "string" },
                        img: { type: "imageUrl" }
                    }
                }
            },
        },
    });

    PLASMIC.registerComponent(WhyItMatters, {
        name: "WhyItMatters",
        props: {
            title: { type: "string", defaultValue: "Why It <br /> <span class='text-[#63C14B]'>Matters</span>" },
            subtitle: { type: "string", defaultValue: "Abuja produces over <span class='text-black font-medium'>13,000 tonnes</span> of waste daily. We are the defense line." },
            reasonsList: {
                type: "array",
                itemType: {
                    type: "object",
                    fields: {
                        title: { type: "string" },
                        desc: { type: "string" },
                        img: { type: "imageUrl" }
                    }
                }
            }
        }
    });

    PLASMIC.registerComponent(SponsorCta, {
        name: "SponsorCta",
        props: {
            title: { type: "string", defaultValue: "Sponsor A <br /> <span class='text-[#63C14B]'>Brand Bag</span> <br /> Campaign" },
            description: { type: "string", defaultValue: "<strong>Make a visible impact.</strong><br /> Your sponsorship..." }, // richText is complex in Plasmic, sticking to string/HTML for now
            badgeValue: { type: "string", defaultValue: "50kg+" },
            badgeLabel: { type: "string", defaultValue: "Plastic Capacity" },
            image: { type: "imageUrl", defaultValue: "/assets/images/yosh_bag_real_v2.png" },
            primaryBtnLabel: { type: "string", defaultValue: "Sponsor Now" },
            primaryBtnLink: { type: "string", defaultValue: "/sponsor" },
            secondaryBtnLabel: { type: "string", defaultValue: "See Impact" },
            secondaryBtnLink: { type: "string", defaultValue: "/about" },
        },
    });

    PLASMIC.registerComponent(Products, {
        name: "Products",
        props: {
            introTitle: { type: "string", defaultValue: "Our <br /> <span class='text-[#63C14B]'>Products</span>" },
            introDesc: { type: "string", defaultValue: "We supply the manufacturing industry with high-quality recycled raw materials." },
            productsList: {
                type: "array",
                itemType: {
                    type: "object",
                    fields: {
                        title: { type: "string" },
                        subtitle: { type: "string" },
                        desc: { type: "string" },
                        img: { type: "imageUrl" }
                    }
                }
            }
        }
    });

    PLASMIC.registerComponent(Testimonials, {
        name: "Testimonials",
        props: {
            title: { type: "string", defaultValue: "What our communities <br /> say about <span class='text-[#63C14B]'>Yosh Recycle</span>" },
            subtitle: { type: "string", defaultValue: "Testimonials" },
            testimonialsList: {
                type: "array",
                itemType: {
                    type: "object",
                    fields: {
                        quote: { type: "string" },
                        author: { type: "string" },
                        role: { type: "string" }
                    }
                }
            }
        }
    });

    PLASMIC.registerComponent(Gallery, {
        name: "Gallery",
        props: {
            title: { type: "string", defaultValue: "Work in <br /> <span class='text-white'>Action</span>." },
            images: {
                type: "array",
                itemType: {
                    type: "imageUrl" // Simplified for list of strings/urls
                }
            }
        }
    });

    PLASMIC.registerComponent(Team, {
        name: "Team",
        props: {
            title: { type: "string", defaultValue: "The <br /> Team" },
            description: { type: "string", defaultValue: "Driven by passion, united by a vision for a cleaner planet." },
            hideHeader: { type: "boolean", defaultValue: false },
        }
    });

    PLASMIC.registerComponent(BlogPreview, {
        name: "BlogPreview",
        props: {
            title: { type: "string", defaultValue: "Latest <br /> <span class='text-[#63C14B]'>Blog</span>" },
            buttonText: { type: "string", defaultValue: "View Blog" },
            buttonUrl: { type: "string", defaultValue: "/blog" },
        }
    });

    PLASMIC.registerComponent(BeforeAfterSlider, {
        name: "BeforeAfterSlider",
        props: {
            beforeImage: { type: "imageUrl", defaultValue: "/assets/images/about_river_polluted_1768049267791.png" },
            afterImage: { type: "imageUrl", defaultValue: "/assets/images/about_river_clean_1768049251442.png" },
            beforeLabel: { type: "string", defaultValue: "The Challenge" },
            afterLabel: { type: "string", defaultValue: "Our Vision" },
        }
    });
}
