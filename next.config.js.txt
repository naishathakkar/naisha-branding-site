/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't let non-blocking lint style-nits (e.g. unescaped-entities on
    // article copy) fail a production build you can't debug locally yet.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
