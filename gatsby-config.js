module.exports = {
    siteMetadata: {
        title: 'Rohan Mayya',
        description: 'My portfolio website.'
    },
    plugins:[
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
            //   path: path.join(__dirname, `src`, `content`, `assets`),
             path: `${__dirname}/src/content/assets`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 1300,
                  },
                },
              ],
            },
          },
    ]
}