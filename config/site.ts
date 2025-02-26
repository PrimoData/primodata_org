export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Primo Data',
  author: 'Primo Data', // Add author name
  mainNav: [
    {
      title: 'Companies',
      href: '/blockchain-data',
      description: 'Blockchain data for companies',
    },
    // {
    //   title: 'ETH Speed',
    //   href: '/eth-performance',
    //   description: 'Ethereum performance',
    // },
    // {
    //   title: 'Guides',
    //   href: '/guides',
    //   description: 'Learn about Primo Data',
    // },
  ],
  links: {
    twitter: 'https://twitter.com/primo_data',
    github: 'https://github.com/PrimoData',
  },
};
