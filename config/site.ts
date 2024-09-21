export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FuselagemUI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "Planegazers",
  email: "planegazers@gmail.com",
  siteUrl: "https://www.fuselagem.com.br",
  creator: "@fuselagem-ui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextui.org",
    siteName: "FuselagemUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "FuselagemUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuselagemUI - Beautiful, fast and modern React UI Library",
    description: "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@fuselagem-ui",
  },
  links: {
    github: "https://github.com/rafael-angonese/fuselagem",
    docs: "http://fuselagem.com.br",
    portfolio: "https://www.planegazers.com",
  },
};
