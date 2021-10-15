module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Bookmarks",
    },
    plugins: [{
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "06h855sl",
                dataset: "production",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};