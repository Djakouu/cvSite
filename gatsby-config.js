module.exports = {
  siteMetadata: {
    title: 'Mohamed Kimouche - resume',
    author: 'Mohamed Kimouche',
    description: 'An online resume. Full-stack developer. Profile, Experience, Abilities, Projects, Interest, Contact. Multilanguages: English, Français, Deutsch.',
    url: 'mohamedkimouche.com',
    twitterUsername: '@mz_kimouche',
    linkedInUrl: 'linkedin.com/in/mohamed-kimouche'
  },
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151421144-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
          family: `Lato`,
          variants: [`300`, `400`, `700`]
          },
        ],
      }
    }
  ]
}