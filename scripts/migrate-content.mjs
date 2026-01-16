import { createClient } from 'next-sanity';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

function getLocalAuthToken() {
    try {
        const configPath = path.join(os.homedir(), '.config', 'sanity', 'config.json');
        if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            return config.authToken;
        }
    } catch (e) {
        return null;
    }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_ACCESS_TOKEN || process.env.SANITY_TOKEN || getLocalAuthToken();

if (!projectId || !dataset) {
    console.error("Missing projectId or dataset in environment variables.");
    process.exit(1);
}

if (!token) {
    console.error("Missing SANITY_API_WRITE_TOKEN or SANITY_TOKEN.");
    const configPath = path.join(os.homedir(), '.config', 'sanity', 'config.json');
    console.error(`Also failed to read token from ${configPath}`);
    console.error("Please provide a token with write access or run with `npx sanity exec <script> --with-user-token` if logged in.");
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'images');
const VIDEO_DIR = path.join(process.cwd(), 'public', 'assets', 'videos');
const PRODUCTS_DIR = path.join(process.cwd(), 'public', 'assets', 'products');

async function uploadImage(filename) {
    const filePath = path.join(ASSETS_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`Image not found: ${filename}`);
        return null;
    }
    const buffer = fs.readFileSync(filePath);
    const asset = await client.assets.upload('image', buffer, { filename });
    return asset._id;
}

async function uploadProductImage(filename) {
    const filePath = path.join(PRODUCTS_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`Product Image not found: ${filename}`);
        return null;
    }
    const buffer = fs.readFileSync(filePath);
    const asset = await client.assets.upload('image', buffer, { filename });
    return asset._id;
}

async function uploadFile(filename, type = 'file') {
    const filePath = path.join(type === 'image' ? ASSETS_DIR : VIDEO_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filename}`);
        return null;
    }
    const buffer = fs.readFileSync(filePath);
    const asset = await client.assets.upload(type, buffer, { filename });
    return asset._id;
}

async function migrate() {
    console.log("Starting migration...");

    try {
        // --- HOMEPAGE ---
        console.log("Migrating Homepage...");
        const service1ImgId = await uploadImage('service_household_white.png');
        const service2ImgId = await uploadImage('service_commercial_v2.png');
        const service3ImgId = await uploadImage('service_factory_v2.png');

        // Why Items
        const why1ImgId = await uploadImage('pollution_river.png');
        const why2ImgId = await uploadImage('recycling_worker.png');
        const why3ImgId = await uploadImage('future_child.png');

        // Guide Items
        const guide1ImgId = await uploadImage('recycle_drain_black.png');
        const guide2ImgId = await uploadImage('recycle_squash_black.png');
        const guide3ImgId = await uploadImage('recycle_cap_black.png');

        // Product Items
        const prod1ImgId = await uploadProductImage('hot-washed.png');
        const prod2ImgId = await uploadProductImage('cold-washed.png');
        const prod3ImgId = await uploadProductImage('bales.png');

        // const heroVideoId = await uploadFile('video-2.mp4', 'file');
        const heroVideoId = undefined; // Skipping video for now as it hangs

        const galleryImages = [
            'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg',
            'gallery-5.jpg', 'gallery-6.jpg', 'gallery-7.jpg', 'gallery-8.jpg'
        ];
        const galleryImageIds = [];
        for (const img of galleryImages) {
            const id = await uploadImage(img);
            if (id) galleryImageIds.push(id);
        }

        await client.createOrReplace({
            _id: 'homepage',
            _type: 'homepage',
            heroTitlePart1: 'Community',
            heroTitleHighlight: 'Powered',
            heroTitlePart2: 'Recycling',
            heroSubtitle: 'We are a community powered plastic recycling initiative. We collect at source, reduce waste, and protect the planet.',
            heroVideo: heroVideoId ? { _type: 'file', asset: { _ref: heroVideoId } } : undefined,
            heroPrimaryButtonLabel: 'Our Mission',
            heroPrimaryButtonLink: '/about',
            heroSecondaryButtonLabel: 'Sponsor a Bag',
            heroSecondaryButtonLink: '/sponsor',
            missionTitle: 'To rid Nigeria of plastic waste, one state at a time.',
            missionStat1Value: '350+ Tons',
            missionStat1Label: 'Plastic recovered annually from local communities.',
            missionStat2Value: 'Zero Cost',
            missionStat2Label: 'Free collection for households and businesses.',

            whyTitlePrefix: 'Why It',
            whyTitleHighlight: 'Matters',
            whySubtitle: 'Abuja produces over 13,000 tonnes of waste daily. We are the defense line.',
            whyList: [
                {
                    _key: 'w1',
                    title: 'Stop Pollution',
                    desc: 'Preventing plastics from clogging our drains and polluting our precious waterways.',
                    image: why1ImgId ? { _type: 'image', asset: { _ref: why1ImgId } } : undefined
                },
                {
                    _key: 'w2',
                    title: 'Create Jobs',
                    desc: 'Building a green economy that provides stable employment for women and youth.',
                    image: why2ImgId ? { _type: 'image', asset: { _ref: why2ImgId } } : undefined
                },
                {
                    _key: 'w3',
                    title: 'Future Proof',
                    desc: 'Educating the next generation to value resources and protect their environment.',
                    image: why3ImgId ? { _type: 'image', asset: { _ref: why3ImgId } } : undefined
                }
            ],

            impactTitle: 'Real Numbers.',
            impactSubtitle: 'Measurable impact on our environment and our local economy.',
            impactStats: [
                { _key: 'stat1', val: '350+', label: 'Tons Recovered' },
                { _key: 'stat2', val: '5k+', label: 'Households Reached' },
                { _key: 'stat3', val: '80+', label: 'Partner Schools' },
            ],

            processTitlePrefix: 'The',
            processTitleHighlight: 'Process',
            processDescription: 'A transparent, verified workflow that turns community waste into global value.',
            processSteps: [
                {
                    _key: 'p1',
                    id: '01',
                    title: 'Distribute Bags',
                    desc: 'We empower the community by providing branded, heavy-duty collection bags to households, schools, and local businesses.',
                    icon: 'Package'
                },
                {
                    _key: 'p2',
                    id: '02',
                    title: 'Collect at Source',
                    desc: 'Our logistics team executes scheduled pickups directly from the source, ensuring materials remain clean, sorted, and high-quality.',
                    icon: 'Truck'
                },
                {
                    _key: 'p3',
                    id: '03',
                    title: 'Sell to Recyclers',
                    desc: 'We verify and transport materials to vetted local recycling facilities, closing the loop and contributing to the circular economy.',
                    icon: 'Recycle'
                },
                {
                    _key: 'p4',
                    id: '04',
                    title: 'Community Education',
                    desc: 'Beyond collection, we run workshops and awareness drive to instill a culture of sustainability in the next generation.',
                    icon: 'School'
                }
            ],

            servicesTitle: 'What We Do',
            servicesDescription: 'Bridging the gap between community waste and industrial value through three core pillars.',
            servicesList: [
                {
                    _key: 'srv1',
                    title: 'Household Collection',
                    description: 'We provide households with free recycling bags and collect them weekly, rewarding consistency with points.',
                    image: service1ImgId ? { _type: 'image', asset: { _ref: service1ImgId } } : undefined,
                    tag: 'Residential'
                },
                {
                    _key: 'srv2',
                    title: 'Commercial Recovery',
                    description: 'Partnering with hotels, restaurants, and offices to implement seamless waste sorting and recovery systems.',
                    image: service2ImgId ? { _type: 'image', asset: { _ref: service2ImgId } } : undefined,
                    tag: 'Commercial'
                },
                {
                    _key: 'srv3',
                    title: 'Industrial Feedstock',
                    description: 'Processing recovered plastics into high-quality flakes and pellets for manufacturing use.',
                    image: service3ImgId ? { _type: 'image', asset: { _ref: service3ImgId } } : undefined,
                    tag: 'Industrial'
                }
            ],

            guideTitlePrefix: 'How To',
            guideTitleHighlight: 'Prepare',
            guideSubtitle: '3 simple steps to ensure your plastic waste is ready for a new life.',
            guideSteps: [
                {
                    _key: 'g1',
                    num: '01',
                    action: 'Drain',
                    desc: 'Empty all liquid contents. Clean bottles ensure 100% recyclability and prevent contamination.',
                    color: 'bg-blue-500',
                    image: guide1ImgId ? { _type: 'image', asset: { _ref: guide1ImgId } } : undefined
                },
                {
                    _key: 'g2',
                    num: '02',
                    action: 'Squash',
                    desc: 'Crush the bottle flat. This saves 3x the space in your bin and our collection trucks.',
                    color: 'bg-orange-500',
                    image: guide2ImgId ? { _type: 'image', asset: { _ref: guide2ImgId } } : undefined
                },
                {
                    _key: 'g3',
                    num: '03',
                    action: 'Cap On',
                    desc: 'Put the cap back on after squashing. We recycle both the bottle (PET) and the cap (HDPE).',
                    color: 'bg-[#63C14B]',
                    image: guide3ImgId ? { _type: 'image', asset: { _ref: guide3ImgId } } : undefined
                }
            ],

            productsTitlePrefix: 'Our',
            productsTitleHighlight: 'Products',
            productsDescription: 'We supply the manufacturing industry with high-quality recycled raw materials.',
            productsList: [
                {
                    _key: 'pr1',
                    title: 'Hot Washed',
                    subtitle: 'PET Flakes',
                    desc: 'Premium purity (<50ppm PVC) for high-end fiber application.',
                    image: prod1ImgId ? { _type: 'image', asset: { _ref: prod1ImgId } } : undefined
                },
                {
                    _key: 'pr2',
                    title: 'Cold Washed',
                    subtitle: 'PET Flakes',
                    desc: 'Industrial grade flakes for strapping and non-food packaging.',
                    image: prod2ImgId ? { _type: 'image', asset: { _ref: prod2ImgId } } : undefined
                },
                {
                    _key: 'pr3',
                    title: 'Pressed Bales',
                    subtitle: 'HDPE/PET',
                    desc: 'High density bales sorted by color and polymer type.',
                    image: prod3ImgId ? { _type: 'image', asset: { _ref: prod3ImgId } } : undefined
                },
            ],

            galleryTitlePrefix: 'Work in',
            galleryTitleHighlight: 'Action',
            galleryImages: galleryImageIds.map(id => ({ _key: id, _type: 'image', asset: { _ref: id } })),
            testimonialsTitle: 'What our communities say about Yosh Recycle',
            testimonialsList: [
                {
                    _key: 't1',
                    quote: 'Yosh Recycle has transformed how our estate handles waste. The pickup is reliable and the team is always courteous.',
                    author: 'Mrs. Adewale',
                    role: 'Gwarinpa Resident'
                },
                {
                    _key: 't2',
                    quote: 'Partnering with Yosh for our CSR initiative was seamless. Seeing the direct impact on the environment is fulfilling.',
                    author: 'John Okechukwu',
                    role: 'Corporate Partner'
                }
            ],
            sponsorTitlePart1: 'Sponsor A',
            sponsorTitleHighlight: 'Brand Bag',
            sponsorTitlePart2: 'Campaign',
            sponsorBadgeValue: '50kg+',
            sponsorBadgeLabel: 'Plastic Capacity',
            teamTitle: 'The Team',
            teamDescription: 'Driven by passion, united by a vision for a cleaner planet.',
            blogPreviewTitle: 'Latest Blog'
        });

        // --- ABOUT PAGE ---
        console.log("Migrating About Page...");
        const aboutBeforeImgId = await uploadImage('about_river_polluted_v2.png');
        const aboutAfterImgId = await uploadImage('about_river_clean_v2.png');

        await client.createOrReplace({
            _id: 'aboutPage',
            _type: 'aboutPage',
            heroTitle: "We Are \nYosh Recycle",
            heroDescription1: "Yosh Recycle is an indigenous waste recovery and recycling enterprise committed to environmental sustainability and social impact in Nigeria.",
            heroDescription2: "Founded with a vision to tackle the plastic waste crisis in Abuja, we have grown into a community-powered movement. We bridge the gap between household waste and industrial raw materials, creating value at every step of the chain.",
            challengeTitle: "The Urban \nWaste Crisis",
            challengeDescription: "Abuja generates over 13,000 tonnes of waste daily. Much of this ends up clogging our waterways, polluting our streets, and endangering public health.",
            challengeStats: "13,000 tonnes",
            solutionTitle: "Our Solution",
            solutionDescription: "We turn \"waste\" into a valuable resource. By incentivizing collection and streamlining the recycling process, we support local collectors and provide high-quality feedstock for manufacturing.",
            solutionList: ["Incentivized Collection", "Community Efficiency", "Industrial Feedstock", "Cleaner Neighborhoods"],
            beforeImage: aboutBeforeImgId ? { _type: 'image', asset: { _ref: aboutBeforeImgId } } : undefined,
            afterImage: aboutAfterImgId ? { _type: 'image', asset: { _ref: aboutAfterImgId } } : undefined,
            beforeLabel: "The Crisis",
            afterLabel: "The Future"
        });

        // --- SPONSOR PAGE ---
        console.log("Migrating Sponsor Page...");
        await client.createOrReplace({
            _id: 'sponsorPage',
            _type: 'sponsorPage',
            heroTitlePrefix: "Sponsor A",
            heroTitleHighlight: "Brand Bag",
            heroSubtitle: "Transform your corporate social responsibility into tangible environmental action. Put your logo in the hands of the community.",
            statsHomesReached: "5,000+",
            statsPlasticCollected: "200k+",
            accountDetails: {
                bankName: "Zenith Bank",
                accountName: "Yosh Recycling Limited",
                accountNumber: "1229706340"
            },
            benefitsTitle: "Why Support Us?",
            benefitsDescription: "Your sponsorship funds the critical infrastructure needed to collect, sort, and process waste at the source.",
            benefitsList: [
                "Your logo prominently displayed on recycling bags distributed to thousands of households",
                "Direct association with environmental sustainability and community impact",
                "Measurable social impact reports (kg collected, families impacted)",
                "Tax-deductible CSR contribution benefits",
                "Digital features on our social media and website"
            ]
        });

        // --- TEAM PAGE ---
        console.log("Migrating Team Page...");
        await client.createOrReplace({
            _id: 'teamPage',
            _type: 'teamPage',
            heroTag: "Our People",
            heroTitle: "The Minds \nBehind Yosh",
            heroDescription: "We are a collective of environmentalists, engineers, and community leaders driven by a single purpose: to redefine waste in Africa."
        });

        // --- TEAM MEMBERS ---
        console.log("Migrating Team Members...");
        const team1ImgId = await uploadImage('team-1.jpg');
        const team2ImgId = await uploadImage('team-2.jpg');

        const teamMembers = [
            {
                _id: 'member-yewande',
                _type: 'teamMember',
                name: "Yewande Sobowale",
                role: "Founder/CEO",
                img: team1ImgId ? { _type: 'image', asset: { _ref: team1ImgId } } : undefined,
                bio: "Yewande is a visionary environmental entrepreneur with over a decade of experience in sustainable waste management. Her passion for a cleaner Abuja drives Yosh Recycle's innovative 'community-first' approach.",
                instagram: "https://www.instagram.com/yewigreyblake?igsh=MWN1M2hwaWt4a2EwdA==",
                order: 1
            },
            {
                _id: 'member-gerji',
                _type: 'teamMember',
                name: "Gerji Geoffrey Merji",
                role: "Head Of Operations",
                img: team2ImgId ? { _type: 'image', asset: { _ref: team2ImgId } } : undefined,
                bio: "Overseeing our daily logistics and processing, our Operations Lead ensures that every kilogram of plastic collected is efficiently sorted and processed for reuse.",
                order: 2
            }
        ];

        for (const member of teamMembers) {
            await client.createOrReplace(member);
        }

        // --- FAQ PAGE ---
        console.log("Migrating FAQ Page...");
        await client.createOrReplace({
            _id: 'faqPage',
            _type: 'faqPage',
            heroTitle: "Common \nQuestions",
            sidebarTitle: "Everything you need to know about our process, logistics, and impact.",
            sidebarDescription: "Can't find the answer you're looking for? Our team is ready to help you directly.",
            faqs: [
                {
                    _key: 'faq1',
                    category: "Collections",
                    question: "What types of materials do you collect?",
                    answer: "We primarily collect PET plastic bottles (water/soda bottles), HDPE plastics (jerry cans, shampoo bottles), and Aluminum cans. Please ensure they are empty and ideally crushed before placing them in your bag."
                },
                {
                    _key: 'faq2',
                    category: "Logistics",
                    question: "How do I request a pickup?",
                    answer: "Once your bag is full, you can request a pickup through our website contact form or by calling/WhatsApping our dedicated line. Our logistics team will schedule a collection within 48 hours."
                },
                {
                    _key: 'faq3',
                    category: "Pricing",
                    question: "Is the collection bag free?",
                    answer: "Yes! We provide the initial recycling bag for free to registered households. If you manage an estate or commercial facility, please contact us for bulk arrangements."
                },
                {
                    _key: 'faq4',
                    category: "Rewards",
                    question: "Do you pay for the waste collected?",
                    answer: "For residential pickups, we operate a rewards point system where you earn points redeemable for household items or cash. For large commercial quantities, we offer competitive rates per kg."
                },
                {
                    _key: 'faq5',
                    category: "About Us",
                    question: "Where are your operations located?",
                    answer: "Our headquarters and main processing hub are in Abuja, but we have collection partners and logistics teams operating across key areas of Abuja and other states."
                },
                {
                    _key: 'faq6',
                    category: "Partnership",
                    question: "How can my company partner with Yosh?",
                    answer: "We offer several partnership models, from 'Sponsor a Bag' to workplace recycling programs. Visit our Sponsor page or Contact us directly to discuss a bespoke partnership."
                }
            ]
        });

        // --- CONTACT PAGE ---
        console.log("Migrating Contact Page...");
        await client.createOrReplace({
            _id: 'contactPage',
            _type: 'contactPage',
            heroTitle: "Get In \nTouch",
            heroDescription: "Have questions about our process, interested in sponsorship, or want to partner with us? We'd love to hear from you.",
            address: "Abuja, Nigeria",
            email: "hello@yoshrecycle.org",
            phone: "+234 916 393 7111",
            instagram: "https://www.instagram.com/yoshrecycle?igsh=MWtjamRkN2xpbWh6Ng==",
            twitter: "https://x.com/YoshRecycle",
            facebook: "https://www.facebook.com/profile.php?id=61551544979983",
            linkedin: "https://www.linkedin.com/company/109765401"
        });

        // --- BLOG PAGE ---
        console.log("Migrating Blog Page...");
        await client.createOrReplace({
            _id: 'blogPage',
            _type: 'blogPage',
            heroTag: "Latest Updates",
            heroTitle: "Our \nBlog",
            heroDescription: "Documenting our mission to rid the world of waste, one community at a time."
        });

        console.log("Migration completed successfully!");

    } catch (error) {
        fs.writeFileSync('migration_error.txt', error.stack || String(error));
        console.error("Migration failed:", error);
        process.exit(1);
    }
}

migrate().catch(error => {
    console.error("Top level error:", error);
    fs.writeFileSync('migration_error_top.txt', error.stack || String(error));
    process.exit(1);
});
