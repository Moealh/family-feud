/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsonl$/,
      type: 'asset/source',
    });
    return config;
  },
}

export default nextConfig; 