/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
        hooks: path.join(__dirname, 'src/hooks')
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: ['300', '400', '700', '900'],
            subsets: [`latin`],
          },
          {
            family: `Oswald`,
            variants: ['300', '400', '500', '600', '700'],
            subsets: [`latin`],
          },
        ],
      },
    }
  ]
}
