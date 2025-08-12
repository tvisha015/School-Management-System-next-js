/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: "images.pexels.com"}], // whitelist Pexels
  },
};

export default nextConfig;