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
                hooks: path.join(__dirname, 'src/hooks'),
                model: path.join(__dirname, 'src/model'),
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Lato:300,400,700,900`, `Oswald:300,400,500,600,700`],
            },
        },
    ],
}
