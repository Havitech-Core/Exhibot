/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch rendering/hook issues early
  experimental: {
    reactCompiler: false, // Disable to avoid React 19 conflicts (if still using it)
  },
  webpack: (config) => {
    // Remove source-map-loader (not needed; we'll ignore source map warnings instead)
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  },
};

export default nextConfig;
