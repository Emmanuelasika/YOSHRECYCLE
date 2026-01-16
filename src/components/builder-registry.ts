"use client";

import { Builder } from "@builder.io/react";
import { Hero } from "./home/Hero";
import { Mission } from "./home/Mission";
import { Impact } from "./home/Impact";
import { Services } from "./home/Services";
import { Process } from "./home/Process";
import { RecycleGuide } from "./home/RecycleGuide";
import { WhyItMatters } from "./home/WhyItMatters";
import { SponsorCta } from "./home/SponsorCta";
import { Products } from "./home/Products";
import { Testimonials } from "./home/Testimonials";
import { Gallery } from "./home/Gallery";
import { Team } from "./home/Team";
import { BlogPreview } from "./home/BlogPreview";

export const registerComponents = () => {
    Builder.registerComponent(Hero, {
        name: "Hero",
        inputs: [
            { name: "title", type: "string", defaultValue: "Community Powered Recycling" },
            { name: "subtitle", type: "string", defaultValue: "We are a community powered plastic recycling initiative." },
            { name: "videoUrl", type: "file", allowedFileTypes: ["video"], defaultValue: "/assets/videos/video-2.mp4" },
            { name: "ctaPrimaryLabel", type: "string", defaultValue: "Our Mission" },
            { name: "ctaPrimaryLink", type: "string", defaultValue: "/about" },
            { name: "ctaSecondaryLabel", type: "string", defaultValue: "Sponsor a Bag" },
            { name: "ctaSecondaryLink", type: "string", defaultValue: "/sponsor" },
        ],
    });

    Builder.registerComponent(Mission, {
        name: "Mission",
        inputs: [
            { name: "title", type: "string", defaultValue: "To rid Nigeria of plastic waste, one state at a time. We believe waste is a <span class='text-[#63C14B]'>design flaw</span>, not an inevitability." },
            { name: "stat1Value", type: "string", defaultValue: "350+ Tons" },
            { name: "stat1Label", type: "string", defaultValue: "Plastic recoverd annually from local communities." },
            { name: "stat2Value", type: "string", defaultValue: "Zero Cost" },
            { name: "stat2Label", type: "string", defaultValue: "Free collection for households and businesses." },
        ],
    });

    Builder.registerComponent(Impact, {
        name: "Impact",
        inputs: [
            { name: "title", type: "string", defaultValue: "Real <br /> <span class='text-[#63C14B]'>Numbers</span>." },
            { name: "subtitle", type: "string", defaultValue: "Measurable impact on our environment and our local economy." },
            {
                name: "stats",
                type: "list",
                subFields: [
                    { name: "val", type: "string" },
                    { name: "label", type: "string" },
                ],
                defaultValue: [
                    { val: "205k+", label: "Plastics Collected (kg)" },
                    { val: "5k+", label: "Homes Satisfied" },
                    { val: "25+", label: "Industries Served" },
                ]
            },
        ],
    });

    Builder.registerComponent(Services, {
        name: "Services",
        inputs: [
            { name: "title", type: "string", defaultValue: "What <br /> <span class='text-[#63C14B]'>We Do</span>" },
            { name: "description", type: "string", defaultValue: "Bridging the gap between community waste and industrial value through three core pillars." },
            {
                name: "servicesList",
                type: "list",
                subFields: [
                    { name: "title", type: "string" },
                    { name: "description", type: "string" },
                    { name: "image", type: "file", allowedFileTypes: ["image"] },
                    { name: "tag", type: "string" },
                ],
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
                ]
            }
        ]
    });

    Builder.registerComponent(Process, {
        name: "Process",
        inputs: [
            { name: "title", type: "string", defaultValue: "The <br /> <span class='text-[#63C14B]'>Process</span>" },
            { name: "description", type: "string", defaultValue: "A transparent, verified workflow that turns community waste into global value. Zero landfills, 100% impact." },
            {
                name: "stepsList",
                type: "list",
                subFields: [
                    { name: "id", type: "string" },
                    { name: "title", type: "string" },
                    { name: "desc", type: "string" },
                    {
                        name: "icon",
                        type: "string",
                        enum: ["Package", "Truck", "Recycle", "School"],
                        defaultValue: "Package"
                    },
                ],
                defaultValue: [
                    {
                        id: "01",
                        title: "Distribute Bags",
                        desc: "We empower the community by providing branded, heavy-duty collection bags to households, schools, and local businesses.",
                        icon: "Package"
                    },
                    {
                        id: "02",
                        title: "Collect at Source",
                        desc: "Our logistics team executes scheduled pickups directly from the source, ensuring materials remain clean, sorted, and high-quality.",
                        icon: "Truck"
                    },
                    {
                        id: "03",
                        title: "Sell to Recyclers",
                        desc: "We verify and transport materials to vetted local recycling facilities, closing the loop and contributing to the circular economy.",
                        icon: "Recycle"
                    },
                    {
                        id: "04",
                        title: "Community Education",
                        desc: "Beyond collection, we run workshops and awareness drive to instill a culture of sustainability in the next generation.",
                        icon: "School"
                    },
                ]
            }
        ]
    });

    Builder.registerComponent(RecycleGuide, {
        name: "RecycleGuide",
        inputs: [
            { name: "title", type: "string", defaultValue: "How To <br /> <span class='text-[#63C14B]'>Prepare</span>" },
            { name: "subtitle", type: "string", defaultValue: "3 simple steps to ensure your plastic waste is ready for a new life." },
            {
                name: "guidesList",
                type: "list",
                subFields: [
                    { name: "num", type: "string" },
                    { name: "action", type: "string" },
                    { name: "desc", type: "string" },
                    { name: "color", type: "string", /* Could use enum or color picker, keeping string for tailwind classes */ },
                    { name: "img", type: "file", allowedFileTypes: ["image"] },
                ],
                defaultValue: [
                    { num: "01", action: "Drain", desc: "...", color: "bg-blue-500", img: "/assets/images/recycle_drain_black.png" },
                    { num: "02", action: "Squash", desc: "...", color: "bg-orange-500", img: "/assets/images/recycle_squash_black.png" },
                    { num: "03", action: "Cap On", desc: "...", color: "bg-[#63C14B]", img: "/assets/images/recycle_cap_black.png" },
                ]
            }
        ]
    });

    Builder.registerComponent(WhyItMatters, {
        name: "WhyItMatters",
        inputs: [
            { name: "title", type: "string", defaultValue: "Why It <br /> <span class='text-[#63C14B]'>Matters</span>" },
            { name: "subtitle", type: "string", defaultValue: "Abuja produces over <span class='text-black font-medium'>13,000 tonnes</span> of waste daily. We are the defense line." },
            {
                name: "reasonsList",
                type: "list",
                subFields: [
                    { name: "title", type: "string" },
                    { name: "desc", type: "string" },
                    { name: "img", type: "file", allowedFileTypes: ["image"] },
                ],
                defaultValue: [
                    { title: "Stop Pollution", desc: "...", img: "/assets/images/pollution_river.png" },
                    { title: "Create Jobs", desc: "...", img: "/assets/images/recycling_worker.png" },
                    { title: "Future Proof", desc: "...", img: "/assets/images/future_child.png" },
                ]
            }
        ]
    });

    Builder.registerComponent(SponsorCta, {
        name: "SponsorCta",
        inputs: [
            { name: "title", type: "string", defaultValue: "Sponsor A <br /> <span class='text-[#63C14B]'>Brand Bag</span> <br /> Campaign" },
            { name: "description", type: "richText", defaultValue: "<strong>Make a visible impact.</strong><br /> Your sponsorship..." },
            { name: "badgeValue", type: "string", defaultValue: "50kg+" },
            { name: "badgeLabel", type: "string", defaultValue: "Plastic Capacity" },
            { name: "image", type: "file", allowedFileTypes: ["image"], defaultValue: "/assets/images/yosh_bag_real_v2.png" },
            { name: "primaryBtnLabel", type: "string", defaultValue: "Sponsor Now" },
            { name: "primaryBtnLink", type: "string", defaultValue: "/sponsor" },
            { name: "secondaryBtnLabel", type: "string", defaultValue: "See Impact" },
            { name: "secondaryBtnLink", type: "string", defaultValue: "/about" }
        ]
    });

    Builder.registerComponent(Products, {
        name: "Products",
        inputs: [
            { name: "introTitle", type: "string", defaultValue: "Our <br /> <span class='text-[#63C14B]'>Products</span>" },
            { name: "introDesc", type: "string", defaultValue: "We supply the manufacturing industry with high-quality recycled raw materials." },
            {
                name: "productsList",
                type: "list",
                subFields: [
                    { name: "title", type: "string" },
                    { name: "subtitle", type: "string" },
                    { name: "desc", type: "string" },
                    { name: "img", type: "file", allowedFileTypes: ["image"] },
                ],
                defaultValue: [
                    { title: "Hot Washed", subtitle: "PET Flakes", desc: "...", img: "/assets/products/hot-washed.png" },
                    { title: "Cold Washed", subtitle: "PET Flakes", desc: "...", img: "/assets/products/cold-washed.png" },
                    { title: "Pressed Bales", subtitle: "HDPE/PET", desc: "...", img: "/assets/products/bales.png" },
                ]
            }
        ]
    });

    Builder.registerComponent(Testimonials, {
        name: "Testimonials",
        inputs: [
            { name: "title", type: "string", defaultValue: "What our communities <br /> say about <span class='text-[#63C14B]'>Yosh Recycle</span>" },
            { name: "subtitle", type: "string", defaultValue: "Testimonials" },
            {
                name: "testimonialsList",
                type: "list",
                subFields: [
                    { name: "quote", type: "text" },
                    { name: "author", type: "string" },
                    { name: "role", type: "string" },
                ],
                defaultValue: [
                    { quote: "I love the branded bag system...", author: "Aisha Dimas", role: "Community Leader" },
                    { quote: "Great initiative...", author: "Kolawale Paul", role: "Local Teacher" },
                    { quote: "Proper community recycling...", author: "Sarah Ciroma", role: "Nurse" },
                ]
            }
        ]
    });

    Builder.registerComponent(Gallery, {
        name: "Gallery",
        inputs: [
            { name: "title", type: "string", defaultValue: "Work in <br /> <span class='text-white'>Action</span>." },
            {
                name: "images",
                type: "list",
                subFields: [
                    { name: "image", type: "file", allowedFileTypes: ["image"] },
                ],
                defaultValue: Array.from({ length: 9 }, (_, i) => `/assets/images/gallery-${i + 1}.jpg`) // Simplified default
            }
        ]
    });

    Builder.registerComponent(Team, {
        name: "Team",
        inputs: [
            { name: "title", type: "string", defaultValue: "The <br /> Team" },
            { name: "description", type: "string", defaultValue: "Driven by passion, united by a vision for a cleaner planet." },
            { name: "hideHeader", type: "boolean", defaultValue: false },
        ]
        // Note: Not allowing editing team members list nicely here yet as generic list of objects with images is okay but maybe overkill if they manage it via code usually. 
        // But for consistency I should probably enable it. However, the requirement is "existing pages".
        // Use standard content for now.
    });

    Builder.registerComponent(BlogPreview, {
        name: "BlogPreview",
        inputs: [
            { name: "title", type: "string", defaultValue: "Latest <br /> <span class='text-[#63C14B]'>Blog</span>" },
            { name: "buttonText", type: "string", defaultValue: "View Blog" },
            { name: "buttonUrl", type: "string", defaultValue: "/blog" },
        ]
    });
};
