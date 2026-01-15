import { groq } from "next-sanity";

// Get all posts
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
