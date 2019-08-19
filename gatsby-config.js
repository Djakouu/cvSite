module.exports = {
  siteMetadata: {
    title: 'Mohamed Kimouche - resume',
    author: 'Mohamed Kimouche'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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