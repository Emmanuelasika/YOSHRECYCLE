import { defineField, defineType } from 'sanity'

export const faqPage = defineType({
    name: 'faqPage',
    title: 'FAQ Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'text',
            initialValue: 'Common \nQuestions',
            rows: 2,
        }),
        defineField({
            name: 'sidebarTitle',
            title: 'Sidebar Title',
            type: 'text',
            initialValue: 'Everything you need to know about our process, logistics, and impact.',
        }),
        defineField({
            name: 'sidebarDescription',
            title: 'Sidebar Description',
            type: 'text',
            initialValue: 'Can\'t find the answer you\'re looking for? Our team is ready to help you directly.',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'category', type: 'string', title: 'Category' },
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' },
                    ]
                }
            ],
            initialValue: [
                {
                    category: "Collections",
                    question: "What types of materials do you collect?",
                    answer: "We primarily collect PET plastic bottles (water/soda bottles), HDPE plastics (jerry cans, shampoo bottles), and Aluminum cans. Please ensure they are empty and ideally crushed before placing them in your bag."
                },
                {
                    category: "Logistics",
                    question: "How do I request a pickup?",
                    answer: "Once your bag is full, you can request a pickup through our website contact form or by calling/WhatsApping our dedicated line. Our logistics team will schedule a collection within 48 hours."
                },
                // ... others can be added in Studio
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'FAQ Page Content',
            }
        },
    },
})
