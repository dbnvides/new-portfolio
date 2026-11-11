import type { NextConfig } from "next";

// cacheComponents left off: the site is fully static and PPR would turn
// notFound() for unknown slugs into a soft 404 (HTTP 200).
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
