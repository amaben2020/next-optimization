https://vercel.com/blog/guide-to-fast-websites-with-next-js-tips-for-maximizing-server-speeds
Fonts: https://cruip.com/how-to-add-custom-fonts-in-next-js-and-tailwind-css-templates/
This covers performance tips such as
Fonts loading
Video
Image

2. Caching

- https://www.js-craft.io/blog/nextjs-13-fetching-data-using-the-cache-and-revalidating-flags/
- https://www.educative.io/answers/what-are-different-next-js-data-caching-strategies
  force-cache: Next fetches once at build time and never again until another next build. This is not suitable for data that changes frequently.

{ next: { revalidate: 10 } }: Use this for the case when we have data that changes, but now very often. For example, you may want to refresh the comments on a blog each 15 min.
