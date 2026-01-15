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
