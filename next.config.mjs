/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Khaled_Portofolio',
  assetPrefix: '/Khaled_Portofolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig