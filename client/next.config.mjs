import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: [
      "github.com",
      "lh3.googleusercontent.com",
      "ambrapaliaidata.blob.core.windows.net",
    ],
  },
};

export default withMDX(nextConfig);
