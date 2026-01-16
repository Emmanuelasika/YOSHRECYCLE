import { defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        // Hero Section
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Community Powered Recycling',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            initialValue: 'We are a community powered plastic recycling initiative. We collect at source, reduce waste, and protect the planet.',
        }),
        defineField({
            name: 'heroVideo',
            title: 'Hero Video',
            type: 'file',
            options: {
                accept: 'video/*'
            }
        }),
        defineField({
            name: 'heroPrimaryButtonLabel',
            title: 'Primary Button Label',
            type: 'string',
            initialValue: 'Our Mission',
        }),
        defineField({
            name: 'heroPrimaryButtonLink',
            title: 'Primary Button Link',
            type: 'string',
            initialValue: '/about',
        }),
        defineField({
            name: 'heroSecondaryButtonLabel',
            title: 'Secondary Button Label',
            type: 'string',
            initialValue: 'Sponsor a Bag',
        }),
        defineField({
            name: 'heroSecondaryButtonLink',
            title: 'Secondary Button Link',
            type: 'string',
            initialValue: '/sponsor',
        }),

        // Mission Section
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'text',
            initialValue: 'To rid Nigeria of plastic waste, one state at a time.',
        }),
        defineField({
            name: 'missionStat1Value',
            title: 'Mission Stat 1 Value',
            type: 'string',
            initialValue: '350+ Tons',
        }),
        defineField({
            name: 'missionStat1Label',
            title: 'Mission Stat 1 Label',
            type: 'string',
            initialValue: 'Plastic recovered annually from local communities.',
        }),
        defineField({
            name: 'missionStat2Value',
            title: 'Mission Stat 2 Value',
            type: 'string',
            initialValue: 'Zero Cost',
        }),
        defineField({
            name: 'missionStat2Label',
            title: 'Mission Stat 2 Label',
            type: 'string',
            initialValue: 'Free collection for households and businesses.',
        }),

        // Impact Section
        defineField({
            name: 'impactTitle',
            title: 'Impact Title',
            type: 'string',
            initialValue: 'Real Numbers.',
        }),
        defineField({
            name: 'impactSubtitle',
            title: 'Impact Subtitle',
            type: 'string',
            initialValue: 'Measurable impact on our environment and our local economy.',
        }),
        defineField({
            name: 'impactStats',
            title: 'Impact Stats',
            type: 'array',
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
            initialValue: 'What We Do',
        }),
        defineField({
            name: 'servicesDescription',
            title: 'Services Description',
            type: 'text',
            initialValue: 'Bridging the gap between community waste and industrial value through three core pillars.',
        }),
        defineField({
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
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
            initialValue: 'Work in Action.',
        }),
        defineField({
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),

        // Testimonials Section
        defineField({
            name: 'testimonialsTitle',
            title: 'Testimonials Title',
            type: 'string',
            initialValue: 'What our communities say about Yosh Recycle',
        }),
        defineField({
            name: 'testimonialsList',
            title: 'Testimonials',
            type: 'array',
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
            initialValue: 'Sponsor A Brand Bag Campaign',
        }),
        defineField({
            name: 'sponsorDescription',
            title: 'Sponsor CTA Description',
            type: 'text',
        }),
        defineField({
            name: 'sponsorBadgeValue',
            title: 'Badge Value',
            type: 'string',
            initialValue: '50kg+',
        }),
        defineField({
            name: 'sponsorBadgeLabel',
            title: 'Badge Label',
            type: 'string',
            initialValue: 'Plastic Capacity',
        }),

        // Team Section
        defineField({
            name: 'teamTitle',
            title: 'Team Title',
            type: 'string',
            initialValue: 'The Team',
        }),
        defineField({
            name: 'teamDescription',
            title: 'Team Description',
            type: 'text',
            initialValue: 'Driven by passion, united by a vision for a cleaner planet.',
        }),

        // Blog Preview Section
        defineField({
            name: 'blogPreviewTitle',
            title: 'Blog Preview Title',
            type: 'string',
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
