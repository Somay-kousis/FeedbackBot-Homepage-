/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add trailing slash for better static hosting compatibility
  trailingSlash: true,
  // Optional: Configure base path if deploying to subdirectory
  // basePath: '/your-subdirectory',
};

export default nextConfig;