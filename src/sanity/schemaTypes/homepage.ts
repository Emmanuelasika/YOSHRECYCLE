import { defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero' },
        { name: 'mission', title: 'Mission' },
        { name: 'whyItMatters', title: 'Why It Matters' },
        { name: 'impact', title: 'Impact' },
        { name: 'process', title: 'Process' },
        { name: 'services', title: 'Services' },
        { name: 'recycleGuide', title: 'Recycle Guide' },
        { name: 'products', title: 'Products' },
        { name: 'gallery', title: 'Gallery' },
        { name: 'testimonials', title: 'Testimonials' },
        { name: 'sponsor', title: 'Sponsor CTA' },
        { name: 'team', title: 'Team' },
        { name: 'blog', title: 'Blog' },
    ],
    fields: [
        // Hero Section
        defineField({
            name: 'heroTitlePart1',
            title: 'Hero Title Part 1',
            type: 'string',
            group: 'hero',
            initialValue: 'Community',
            description: 'First line/part (White text)',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight',
            type: 'string',
            group: 'hero',
            initialValue: 'Powered',
            description: 'Middle part (Green text)',
        }),
        defineField({
            name: 'heroTitlePart2',
            title: 'Hero Title Part 2',
            type: 'string',
            group: 'hero',
            initialValue: 'Recycling',
            description: 'Last part (White text)',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            group: 'hero',
            initialValue: 'We are a community powered plastic recycling initiative. We collect at source, reduce waste, and protect the planet.',
        }),
        defineField({
            name: 'heroVideo',
            title: 'Hero Video',
            type: 'file',
            group: 'hero',
            options: {
                accept: 'video/*'
            }
        }),
        defineField({
            name: 'heroPrimaryButtonLabel',
            title: 'Primary Button Label',
            type: 'string',
            group: 'hero',
            initialValue: 'Our Mission',
        }),
        defineField({
            name: 'heroPrimaryButtonLink',
            title: 'Primary Button Link',
            type: 'string',
            group: 'hero',
            initialValue: '/about',
        }),
        defineField({
            name: 'heroSecondaryButtonLabel',
            title: 'Secondary Button Label',
            type: 'string',
            group: 'hero',
            initialValue: 'Sponsor a Bag',
        }),
        defineField({
            name: 'heroSecondaryButtonLink',
            title: 'Secondary Button Link',
            type: 'string',
            group: 'hero',
            initialValue: '/sponsor',
        }),

        // Mission Section
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'text',
            group: 'mission',
            initialValue: 'To rid Nigeria of plastic waste, one state at a time.',
        }),
        defineField({
            name: 'missionStat1Value',
            title: 'Mission Stat 1 Value',
            type: 'string',
            group: 'mission',
            initialValue: '350+ Tons',
        }),
        defineField({
            name: 'missionStat1Label',
            title: 'Mission Stat 1 Label',
            type: 'string',
            group: 'mission',
            initialValue: 'Plastic recovered annually from local communities.',
        }),
        defineField({
            name: 'missionStat2Value',
            title: 'Mission Stat 2 Value',
            type: 'string',
            group: 'mission',
            initialValue: 'Zero Cost',
        }),
        defineField({
            name: 'missionStat2Label',
            title: 'Mission Stat 2 Label',
            type: 'string',
            group: 'mission',
            initialValue: 'Free collection for households and businesses.',
        }),

        // Why It Matters Section
        defineField({
            name: 'whyTitlePrefix',
            title: 'Why Title Prefix',
            type: 'string',
            group: 'whyItMatters',
            initialValue: 'Why It',
        }),
        defineField({
            name: 'whyTitleHighlight',
            title: 'Why Title Highlight',
            type: 'string',
            group: 'whyItMatters',
            initialValue: 'Matters',
        }),
        defineField({
            name: 'whySubtitle',
            title: 'Why It Matters Subtitle',
            type: 'string',
            group: 'whyItMatters',
            initialValue: 'Abuja produces over 13,000 tonnes of waste daily. We are the defense line.',
        }),
        defineField({
            name: 'whyList',
            title: 'Why It Matters List',
            type: 'array',
            group: 'whyItMatters',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'image', type: 'image', title: 'Image' },
                    ],
                },
            ],
        }),

        // Impact Section
        defineField({
            name: 'impactTitle',
            title: 'Impact Title',
            type: 'string',
            group: 'impact',
            initialValue: 'Real Numbers.',
        }),
        defineField({
            name: 'impactSubtitle',
            title: 'Impact Subtitle',
            type: 'string',
            group: 'impact',
            initialValue: 'Measurable impact on our environment and our local economy.',
        }),
        defineField({
            name: 'impactStats',
            title: 'Impact Stats',
            type: 'array',
            group: 'impact',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'val', type: 'string', title: 'Value' },
                        { name: 'label', type: 'string', title: 'Label' },
                    ],
                },
            ],
        }),

        // Process Section
        defineField({
            name: 'processTitlePrefix',
            title: 'Process Title Prefix',
            type: 'string',
            group: 'process',
            initialValue: 'The',
        }),
        defineField({
            name: 'processTitleHighlight',
            title: 'Process Title Highlight',
            type: 'string',
            group: 'process',
            initialValue: 'Process',
        }),
        defineField({
            name: 'processDescription',
            title: 'Process Description',
            type: 'text',
            group: 'process',
            initialValue: 'A transparent, verified workflow that turns community waste into global value.',
        }),
        defineField({
            name: 'processSteps',
            title: 'Process Steps',
            type: 'array',
            group: 'process',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'id', type: 'string', title: 'Step Number (e.g. 01)' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon Name',
                            options: {
                                list: [
                                    { title: 'Package', value: 'Package' },
                                    { title: 'Truck', value: 'Truck' },
                                    { title: 'Recycle', value: 'Recycle' },
                                    { title: 'School', value: 'School' },
                                ]
                            }
                        },
                    ],
                },
            ],
        }),

        // Services Section
        defineField({
            name: 'servicesTitle',
            title: 'Services Title',
            type: 'string',
            group: 'services',
            initialValue: 'What We Do',
        }),
        defineField({
            name: 'servicesDescription',
            title: 'Services Description',
            type: 'text',
            group: 'services',
            initialValue: 'Bridging the gap between community waste and industrial value through three core pillars.',
        }),
        defineField({
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            group: 'services',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'tag', type: 'string', title: 'Tag' },
                    ],
                },
            ],
        }),

        // Recycle Guide Section
        defineField({
            name: 'guideTitlePrefix',
            title: 'Guide Title Prefix',
            type: 'string',
            group: 'recycleGuide',
            initialValue: 'How To',
        }),
        defineField({
            name: 'guideTitleHighlight',
            title: 'Guide Title Highlight',
            type: 'string',
            group: 'recycleGuide',
            initialValue: 'Prepare',
        }),
        defineField({
            name: 'guideSubtitle',
            title: 'Guide Subtitle',
            type: 'string',
            group: 'recycleGuide',
            initialValue: '3 simple steps to ensure your plastic waste is ready for a new life.',
        }),
        defineField({
            name: 'guideSteps',
            title: 'Guide Steps',
            type: 'array',
            group: 'recycleGuide',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'num', type: 'string', title: 'Step Number' },
                        { name: 'action', type: 'string', title: 'Action Title' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'color', type: 'string', title: 'Tailwind Color Class' },
                        { name: 'image', type: 'image', title: 'Image' },
                    ],
                },
            ],
        }),

        // Products Section
        defineField({
            name: 'productsTitlePrefix',
            title: 'Products Title Prefix',
            type: 'string',
            group: 'products',
            initialValue: 'Our',
        }),
        defineField({
            name: 'productsTitleHighlight',
            title: 'Products Title Highlight',
            type: 'string',
            group: 'products',
            initialValue: 'Products',
        }),
        defineField({
            name: 'productsDescription',
            title: 'Products Description',
            type: 'text',
            group: 'products',
            initialValue: 'We supply the manufacturing industry with high-quality recycled raw materials.',
        }),
        defineField({
            name: 'productsList',
            title: 'Products List',
            type: 'array',
            group: 'products',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'subtitle', type: 'string', title: 'Subtitle' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'image', type: 'image', title: 'Image' },
                    ],
                },
            ],
        }),

        // Gallery Section
        defineField({
            name: 'galleryTitlePrefix',
            title: 'Gallery Title Prefix',
            type: 'string',
            group: 'gallery',
            initialValue: 'Work in',
        }),
        defineField({
            name: 'galleryTitleHighlight',
            title: 'Gallery Title Highlight',
            type: 'string',
            group: 'gallery',
            initialValue: 'Action',
        }),
        defineField({
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            group: 'gallery',
            of: [{ type: 'image' }],
        }),

        // Testimonials Section
        defineField({
            name: 'testimonialsTitle',
            title: 'Testimonials Title',
            type: 'string',
            group: 'testimonials',
            initialValue: 'What our communities say about Yosh Recycle',
        }),
        defineField({
            name: 'testimonialsList',
            title: 'Testimonials',
            type: 'array',
            group: 'testimonials',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'quote', type: 'text', title: 'Quote' },
                        { name: 'author', type: 'string', title: 'Author' },
                        { name: 'role', type: 'string', title: 'Role' },
                    ],
                },
            ],
        }),

        // Sponsor CTA Section
        defineField({
            name: 'sponsorTitlePart1',
            title: 'Sponsor CTA Title Part 1',
            type: 'string',
            group: 'sponsor',
            initialValue: 'Sponsor A',
        }),
        defineField({
            name: 'sponsorTitleHighlight',
            title: 'Sponsor CTA Title Highlight',
            type: 'string',
            group: 'sponsor',
            initialValue: 'Brand Bag',
        }),
        defineField({
            name: 'sponsorTitlePart2',
            title: 'Sponsor CTA Title Part 2',
            type: 'string',
            group: 'sponsor',
            initialValue: 'Campaign',
        }),
        defineField({
            name: 'sponsorDescription',
            title: 'Sponsor CTA Description',
            type: 'text',
            group: 'sponsor',
        }),
        defineField({
            name: 'sponsorBadgeValue',
            title: 'Badge Value',
            type: 'string',
            group: 'sponsor',
            initialValue: '50kg+',
        }),
        defineField({
            name: 'sponsorBadgeLabel',
            title: 'Badge Label',
            type: 'string',
            group: 'sponsor',
            initialValue: 'Plastic Capacity',
        }),

        // Team Section
        defineField({
            name: 'teamTitle',
            title: 'Team Title',
            type: 'string',
            group: 'team',
            initialValue: 'The Team',
        }),
        defineField({
            name: 'teamDescription',
            title: 'Team Description',
            type: 'text',
            group: 'team',
            initialValue: 'Driven by passion, united by a vision for a cleaner planet.',
        }),

        // Blog Preview Section
        defineField({
            name: 'blogPreviewTitle',
            title: 'Blog Preview Title',
            type: 'string',
            group: 'blog',
            initialValue: 'Latest Blog',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Homepage Content',
            }
        },
    },
})
