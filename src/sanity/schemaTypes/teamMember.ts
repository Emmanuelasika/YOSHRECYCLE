import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'img', // match the prop name 'img' or map it later. keeping 'image' is standard sanity, but I'll map it.
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter URL',
            type: 'url',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Used to sort the team members',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'img',
        },
    },
})
