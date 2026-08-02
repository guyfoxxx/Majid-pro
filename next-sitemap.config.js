/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://majidfekrmand.ir",
  generateRobotsTxt: true,
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://majidfekrmand.ir/sitemap.xml"],
  },
};
