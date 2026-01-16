import { defineField, defineType } from 'sanity'

export const sponsorPage = defineType({
    name: 'sponsorPage',
    title: 'Sponsor Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitlePrefix',
            title: 'Hero Title Prefix',
            type: 'string',
            initialValue: 'Sponsor A',
            description: 'The first part of the title (white text)',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight',
            type: 'string',
            initialValue: 'Brand Bag',
            description: 'The second part of the title (gradient colored)',
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
            name: 'accountDetails',
            title: 'Bank Account Details',
            type: 'object',
            fields: [
                { name: 'bankName', type: 'string', title: 'Bank Name', initialValue: 'Zenith Bank' },
                { name: 'accountName', type: 'string', title: 'Account Name', initialValue: 'Yosh Recycling Limited' },
                { name: 'accountNumber', type: 'string', title: 'Account Number', initialValue: '1229706340' },
            ],
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
