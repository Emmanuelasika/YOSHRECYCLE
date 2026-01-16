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
  heroTitlePart1,
  heroTitleHighlight,
  heroTitlePart2,
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
  whyTitlePrefix,
  whyTitleHighlight,
  whySubtitle,
  whyList[] {
    title,
    desc,
    image
  },
  impactTitle,
  impactSubtitle,
  impactStats,
  processTitlePrefix,
  processTitleHighlight,
  processDescription,
  processSteps[] {
    id,
    title,
    desc,
    icon
  },
  servicesTitlePrefix,
  servicesTitleHighlight,
  servicesDescription,
  servicesList[] {
    title,
    description,
    image,
    tag
  },
  guideTitlePrefix,
  guideTitleHighlight,
  guideSubtitle,
  guideSteps[] {
    num,
    action,
    desc,
    color,
    image
  },
  productsTitlePrefix,
  productsTitleHighlight,
  productsDescription,
  productsList[] {
    title,
    subtitle,
    desc,
    image
  },
  galleryTitlePrefix,
  galleryTitleHighlight,
  galleryImages,
  testimonialsTitle,
  testimonialsList,
  sponsorTitlePart1,
  sponsorTitleHighlight,
  sponsorTitlePart2,
  sponsorDescription,
  sponsorBadgeValue,
  sponsorBadgeLabel,
  teamTitlePrefix,
  teamTitleHighlight,
  teamDescription,
  blogPreviewTitlePrefix,
  blogPreviewTitleHighlight
}`;

// Get about page content
export const ABOUT_PAGE_QUERY = groq`*[_type == "aboutPage"][0] {
  heroTitlePrefix,
  heroTitleHighlight,
  heroDescription1,
  heroDescription2,
  challengeTitlePrefix,
  challengeTitleHighlight,
  challengeDescription,
  challengeStats,
  solutionTitlePrefix,
  solutionTitleHighlight,
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
    heroTitlePrefix,
    heroTitleHighlight,
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
  heroTitlePrefix,
  heroTitleHighlight,
  sidebarTitle,
  sidebarDescription,
  faqs[] {
    category,
    question,
    answer
  }
}`;

export const CONTACT_PAGE_QUERY = groq`*[_type == "contactPage"][0] {
  heroTitlePrefix,
  heroTitleHighlight,
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
  heroTag,
  heroTitlePrefix,
  heroTitleHighlight,
  heroDescription
}`;
