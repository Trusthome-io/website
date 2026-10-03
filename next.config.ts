import type { NextConfig } from "next";

// Static export → déployable tel quel sur GitHub Pages (dossier out/).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
