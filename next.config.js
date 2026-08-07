/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  env: {
    // Server-side only envs can be mirrored here if needed
  },
  webpack: (config) => {
    // Mystic‑coded aliasing for cosmology engines
    config.resolve.alias["~cosmology"] = require("path").resolve(
      __dirname,
      "src/lib/cosmology-core"
    );
    config.resolve.alias["~lineage"] = require("path").resolve(
      __dirname,
      "src/lib/lineage-mapper"
    );
    config.resolve.alias["~kwardatiq"] = require("path").resolve(
      __dirname,
      "src/lib/kwardatiq-engine"
    );
    return config;
  }
};

module.exports = nextConfig;
