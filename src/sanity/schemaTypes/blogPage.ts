import { defineField, defineType } from 'sanity'

export const blogPage = defineType({
    name: 'blogPage',
    title: 'Blog Listing Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTag',
            title: 'Hero Tag',
            type: 'string',
            initialValue: 'Latest Updates',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'text',
            initialValue: 'Our \nBlog',
            rows: 2,
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            initialValue: 'Documenting our mission to rid the world of waste, one community at a time.',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Blog Listing Page Content',
            }
        },
    },
})
