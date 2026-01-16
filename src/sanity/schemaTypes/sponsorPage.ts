import { defineField, defineType } from 'sanity'

export const sponsorPage = defineType({
    name: 'sponsorPage',
    title: 'Sponsor Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'text',
            initialValue: 'Sponsor A \nBrand Bag',
            rows: 2,
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            initialValue: 'Transform your corporate social responsibility into tangible environmental action. Put your logo in the hands of the community.',
        }),
        defineField({
            name: 'statsHomesReached',
            title: 'Stats: Homes Reached',
            type: 'string',
            initialValue: '5,000+',
        }),
        defineField({
            name: 'statsPlasticCollected',
            title: 'Stats: Plastic Collected',
            type: 'string',
            initialValue: '200k+',
        }),
        defineField({
            name: 'benefitsTitle',
            title: 'Benefits Title',
            type: 'string',
            initialValue: 'Why Support Us?',
        }),
        defineField({
            name: 'benefitsDescription',
            title: 'Benefits Description',
            type: 'text',
            initialValue: 'Your sponsorship funds the critical infrastructure needed to collect, sort, and process waste at the source.',
        }),
        defineField({
            name: 'benefitsList',
            title: 'Benefits List',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                "Your logo prominently displayed on recycling bags distributed to thousands of households",
                "Direct association with environmental sustainability and community impact",
                "Measurable social impact reports (kg collected, families impacted)",
                "Tax-deductible CSR contribution benefits",
                "Digital features on our social media and website"
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Sponsor Page Content',
            }
        },
    },
})
