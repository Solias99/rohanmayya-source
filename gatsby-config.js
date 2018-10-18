module.exports = {
    siteMetadata: {
        title: 'Rohan Mayya',
        description: 'My portfolio website.'
    },
    plugins:[
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}