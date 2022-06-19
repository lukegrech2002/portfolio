const BLOG = {
  title: "Luke Grech",
  author: "Luke Grech",
  email: "lukegrech2002@gmail.com",
  link: "https://lukegrech.com",
  description: "Portfolio & Blog",
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: "auto", // ['light', 'dark', 'auto'],
  font: "sans-serif",
  lightBackground: "#ffffff",
  darkBackground: "#18181B", 
  path: "",
  postsPerPage: 7,
  sortByDate: false,
  showArchive: true,
  autoCollapsedNavBar: false,
  // ogImageGenerateURL: '', // The link to generate OG image, don't end with a slash
  socialLink: "https://instagram.com/lukegrc",
  seo: {
    keywords: ["Blog", "Website", "Notion"],
    googleSiteVerification: "", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID,
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN,
  analytics: {
    provider: "ga",
    gaConfig: {
      apiKey: "AIzaSyCGcYiW8aPh6hD3tDE-xwDGYQ_CVv8w5ik",
      authDomain: "portfolio-website-3d202.firebaseapp.com",
      projectId: "portfolio-website-3d202",
      storageBucket: "portfolio-website-3d202.appspot.com",
      messagingSenderId: "503415706034",
      appId: "1:503415706034:web:94413304d22e82a75654ab",
      ///
      measurementId: "G-CP9M1NS7YF",
    },
  },
  isProd: process.env.VERCEL_ENV,
};

module.exports = BLOG;
