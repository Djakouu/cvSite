module.exports = {
  siteMetadata: {
    title: 'Mohamed Kimouche - resume',
    author: 'Mohamed Kimouche'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'open sans\:200, 400, 700'
        ],
        display: 'swap'
      }
    }
  ]
}