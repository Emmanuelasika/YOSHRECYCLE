import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitlePrefix',
            title: 'Hero Title Prefix',
            type: 'string',
            initialValue: 'We Are',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight',
            type: 'string',
            initialValue: 'Yosh Recycle',
        }),
        defineField({
            name: 'heroDescription1',
            title: 'Hero Description 1',
            type: 'text',
            initialValue: 'Yosh Recycle is an indigenous waste recovery and recycling enterprise committed to environmental sustainability and social impact in Nigeria.',
        }),
        defineField({
            name: 'heroDescription2',
            title: 'Hero Description 2',
            type: 'text',
            initialValue: 'Founded with a vision to tackle the plastic waste crisis in Abuja, we have grown into a community-powered movement. We bridge the gap between household waste and industrial raw materials, creating value at every step of the chain.',
        }),

        defineField({
            name: 'challengeTitlePrefix',
            title: 'Challenge Title Prefix',
            type: 'string',
            initialValue: 'The Urban',
        }),
        defineField({
            name: 'challengeTitleHighlight',
            title: 'Challenge Title Highlight',
            type: 'string',
            initialValue: 'Waste Crisis',
        }),
        defineField({
            name: 'challengeDescription',
            title: 'Challenge Description',
            type: 'text',
            initialValue: 'Abuja generates over 13,000 tonnes of waste daily. Much of this ends up clogging our waterways, polluting our streets, and endangering public health.',
        }),
        defineField({
            name: 'challengeStats',
            title: 'Challenge Stats',
            type: 'string',
            initialValue: '13,000 tonnes',
        }),

        defineField({
            name: 'solutionTitlePrefix',
            title: 'Solution Title Prefix',
            type: 'string',
            initialValue: 'Our',
        }),
        defineField({
            name: 'solutionTitleHighlight',
            title: 'Solution Title Highlight',
            type: 'string',
            initialValue: 'Solution',
        }),
        defineField({
            name: 'solutionDescription',
            title: 'Solution Description',
            type: 'text',
            initialValue: 'We turn "waste" into a valuable resource. By incentivizing collection and streamlining the recycling process, we support local collectors and provide high-quality feedstock for manufacturing.',
        }),
        defineField({
            name: 'solutionList',
            title: 'Solution List Points',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ["Incentivized Collection", "Community Efficiency", "Industrial Feedstock", "Cleaner Neighborhoods"],
        }),

        defineField({
            name: 'beforeImage',
            title: 'Before Image',
            type: 'image',
        }),
        defineField({
            name: 'afterImage',
            title: 'After Image',
            type: 'image',
        }),
        defineField({
            name: 'beforeLabel',
            title: 'Before Label',
            type: 'string',
            initialValue: 'The Crisis',
        }),
        defineField({
            name: 'afterLabel',
            title: 'After Label',
            type: 'string',
            initialValue: 'The Future',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'About Page Content',
            }
        },
    },
})
