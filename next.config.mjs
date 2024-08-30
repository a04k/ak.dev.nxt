/** @type {import('next').NextConfig} */
const nextConfig = {
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ak-dev-cms.onrender.com/api/:path*',
      },
    ]
  },
  
};

export default nextConfig;
