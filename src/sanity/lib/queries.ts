import { groq } from "next-sanity";

// Get all posts
// Get all posts (Paginated)
export const PAGINATED_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "excerpt": body[0].children[0].text
}`;

// Get total count of posts
export const POSTS_COUNT_QUERY = groq`count(*[_type == "post" && defined(slug.current)])`;

// Keep original for back-compat if needed, but we'll switch to using the paginated one
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "excerpt": body[0].children[0].text
}`;

// Get recent 3 posts for homepage
export const RECENT_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "excerpt": body[0].children[0].text
}`;

// Get a single post by slug
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  mainImage,
  publishedAt,
  body,
  author
}`;

// Get homepage content
export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0] {
  heroTitle,
  heroSubtitle,
  "heroVideoUrl": heroVideo.asset->url,
  heroPrimaryButtonLabel,
  heroPrimaryButtonLink,
  heroSecondaryButtonLabel,
  heroSecondaryButtonLink,
  missionTitle,
  missionStat1Value,
  missionStat1Label,
  missionStat2Value,
  missionStat2Label,
  whyTitle,
  whySubtitle,
  whyList[] {
    title,
    desc,
    image
  },
  impactTitle,
  impactSubtitle,
  impactStats,
  processTitle,
  processDescription,
  processSteps[] {
    id,
    title,
    desc,
    icon
  },
  servicesTitle,
  servicesDescription,
  servicesList[] {
    title,
    description,
    image,
    tag
  },
  guideTitle,
  guideSubtitle,
  guideSteps[] {
    num,
    action,
    desc,
    color,
    image
  },
  productsTitle,
  productsDescription,
  productsList[] {
    title,
    subtitle,
    desc,
    image
  },
  galleryTitle,
  galleryImages,
  testimonialsTitle,
  testimonialsList,
  sponsorTitle,
  sponsorDescription,
  sponsorBadgeValue,
  sponsorBadgeLabel,
  teamTitle,
  teamDescription,
  blogPreviewTitle
}`;

// Get about page content
export const ABOUT_PAGE_QUERY = groq`*[_type == "aboutPage"][0] {
  heroTitle,
  heroDescription1,
  heroDescription2,
  challengeTitle,
  challengeDescription,
  challengeStats,
  solutionTitle,
  solutionDescription,
  solutionList,
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel
}`;

// Get sponsor page content
export const SPONSOR_PAGE_QUERY = groq`*[_type == "sponsorPage"][0] {
  heroTitlePrefix,
  heroTitleHighlight,
  heroSubtitle,
  statsHomesReached,
  statsPlasticCollected,
  accountDetails {
    bankName,
    accountName,
    accountNumber
  },
  benefitsTitle,
  benefitsDescription,
  benefitsList
}`;

// Get team page content
export const TEAM_PAGE_QUERY = groq`{
  "page": *[_type == "teamPage"][0] {
    heroTag,
    heroTitle,
    heroDescription
  },
  "members": *[_type == "teamMember"] | order(order asc) {
    name,
    role,
    img,
    bio,
    linkedin,
    twitter,
    instagram
  }
}`;

export const FAQ_PAGE_QUERY = groq`*[_type == "faqPage"][0] {
  heroTitle,
  sidebarTitle,
  sidebarDescription,
  faqs[] {
    category,
    question,
    answer
  }
}`;

export const CONTACT_PAGE_QUERY = groq`*[_type == "contactPage"][0] {
  heroTitle,
  heroDescription,
  address,
  email,
  phone,
  instagram,
  twitter,
  facebook,
  linkedin
}`;

export const BLOG_PAGE_QUERY = groq`*[_type == "blogPage"][0] {
  heroTag,
  heroTitle,
  heroDescription
}`;
