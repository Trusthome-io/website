import type { NextConfig } from 'next';

// Export statique (servi par Netlify) : pas de serveur, pas d'optimisation d'image à la volée.
// Les photos de public/img sont redimensionnées en amont (1600 px max).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
