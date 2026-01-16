import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'text',
            initialValue: 'Get In \nTouch',
            rows: 2,
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            initialValue: 'Have questions about our process, interested in sponsorship, or want to partner with us? We\'d love to hear from you.',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            initialValue: 'Abuja, Nigeria',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            initialValue: 'hello@yoshrecycle.org',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            initialValue: '+234 916 393 7111',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter URL',
            type: 'url',
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook URL',
            type: 'url',
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact Page Content',
            }
        },
    },
})
