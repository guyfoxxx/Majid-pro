/** @type {import('next').NextConfig} */
const nextConfig = {
  // خروجی استاتیک برای هاست‌های رایگان (InfinityFree, GitHub Pages, Netlify, Cloudflare Pages)
  output: "export",

  // چون خروجی استاتیک است، بهینه‌سازی سرور-محور تصاویر Next.js غیرفعال می‌شود
  images: {
    unoptimized: true,
  },

  // آدرس‌های خروجی به‌صورت پوشه (index.html داخل هر مسیر) تا روی Apache/htdocs درست کار کند
  trailingSlash: true,

  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
