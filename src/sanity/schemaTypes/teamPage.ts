import { defineField, defineType } from 'sanity'

export const teamPage = defineType({
    name: 'teamPage',
    title: 'Team Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTag',
            title: 'Hero Tag',
            type: 'string',
            initialValue: 'Our People',
        }),
        defineField({
            name: 'heroTitlePrefix',
            title: 'Hero Title Prefix',
            type: 'string',
            initialValue: 'The Minds',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight',
            type: 'string',
            initialValue: 'Behind Yosh',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            initialValue: 'We are a collective of environmentalists, engineers, and community leaders driven by a single purpose: to redefine waste in Africa.',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Team Page Content',
            }
        },
    },
})
