module.exports = {
  siteMetadata: {
    name: `React Toulouse #7`,
    title: `Gatsby`,
    date: `27 janvier 2020`,
    author: `Antoine Rousseau`,
    authorUrl: `https://antoine.rousseau.im`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
              tracedSVG: { color: "#663399" },
              wrapperStyle: fluidResult => `width:${fluidResult.presentationWidth / 2}px;`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-presentation`,
        short_name: `gatsby-prez`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/gatsby-icon.png`,
      },
    },
  ],
}
