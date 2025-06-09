/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/campaigns/flats-in-kottayam',
  images: {
    unoptimized: true, // Required for static export when using next/image
  },
  output: 'export', // Enables static HTML export
};

export default nextConfig;
