import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, // لا تتجاهل أخطاء TypeScript
  },
  eslint: {
    ignoreDuringBuilds: false, // لا تتجاهل أخطاء ESLint
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // إزالة console في الإنتاج
  },
};

export default nextConfig;
