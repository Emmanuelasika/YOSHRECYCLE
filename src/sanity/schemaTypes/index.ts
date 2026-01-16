import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { homepage } from './homepage'
import { aboutPage } from './aboutPage'
import { sponsorPage } from './sponsorPage'
import { teamMember } from './teamMember'
import { teamPage } from './teamPage'
import { faqPage } from './faqPage'
import { contactPage } from './contactPage'
import { blogPage } from './blogPage'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, homepage, aboutPage, sponsorPage, teamMember, teamPage, faqPage, contactPage, blogPage],
}
