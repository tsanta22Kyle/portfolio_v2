/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "cdn.simpleicons.org", "api.iconify.design"],
  },
  experimental: {
    mdxRs: true,
  },
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
