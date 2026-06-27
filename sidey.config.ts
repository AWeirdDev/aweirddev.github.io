// sidey.config.ts

export const sideyConfig = {
  site: {
    // The main title displayed in browser tabs and search engine results
    title: "AWeirdDev",

    // A short fallback summary of your site used for SEO and social share cards
    description:
      "im a portable restroom somewhere in taipei near a baseball field",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://aweird.me",

    // Your name, utilized in copyright strings and author meta tags
    author: "AWeirdDev",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "en",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/" },
    { label: "Writings", href: "/writings" },
    { label: "RSS", href: "/rss.xml", external: true },
  ],
}

export type SideyConfigType = typeof sideyConfig
