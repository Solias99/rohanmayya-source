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
        }
    ]
}