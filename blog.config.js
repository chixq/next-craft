const BLOG = {
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  craftConfigShareUrl: process.env.CRAFT_CONFIG_SHARE_URL
    ? process.env.CRAFT_CONFIG_SHARE_URL
    : 'https://www.craft.me/s/FAomUyW9l7y6Rq', // The link to share your craft config
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS']
  },
  analytics: {
    provider: 'umami', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://analytics.umami.is/script.js" data-website-id="6a383be5-64f4-424f-bd82-62011f59fbd5', // The url of your Umami script
      websiteId: '6a383be5-64f4-424f-bd82-62011f59fbd5' // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
