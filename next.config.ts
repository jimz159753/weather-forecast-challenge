import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.weather.gov',
        port: '',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'forecast.weather.gov',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
