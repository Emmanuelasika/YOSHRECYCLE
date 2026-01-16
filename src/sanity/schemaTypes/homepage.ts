import { defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero' },
        { name: 'mission', title: 'Mission' },
        { name: 'impact', title: 'Impact' },
        { name: 'services', title: 'Services' },
        { name: 'gallery', title: 'Gallery' },
        { name: 'testimonials', title: 'Testimonials' },
        { name: 'sponsor', title: 'Sponsor CTA' },
        { name: 'team', title: 'Team' },
        { name: 'blog', title: 'Blog' },
    ],
    fields: [
        // Hero Section
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
            initialValue: 'Community Powered Recycling',
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

        // Gallery Section
        defineField({
            name: 'galleryTitle',
            title: 'Gallery Title',
            type: 'string',
            group: 'gallery',
            initialValue: 'Work in Action.',
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
            name: 'sponsorTitle',
            title: 'Sponsor CTA Title',
            type: 'string',
            group: 'sponsor',
            initialValue: 'Sponsor A Brand Bag Campaign',
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
