/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "aniket-food-ordering-app.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
