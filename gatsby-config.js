module.exports = {
    siteMetadata: {
        title: `Jay Patel`,
        description: `Hello there👋, I am Jay Patel a pre - final year undergrad student at Sardar Vallabhbhai Patel Institute of Technology.I am a full - stack web developer.I am exploring various technologies in Web Development.And learning new technologies on a required basis.I have a simple motto.Pick a project definition and then explore the definition.After exploring decide which technologies will be used to make the way of user experience smooth.If I know the technology which will be used in developing.Else I learn required technologies and implement them directly on the project.And at the end of the completing project, I had lots of new skills / concepts which I never used or never had.Currently I am working as a Web Developer at my own projects and sometimes on freelance projects just for exploring and learning new things about client requirements.Also, I am Data Science, Machine Learning, Artificial Intelligence enthusiast.`,
        author: `@imjp.dev`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/jay.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-smoothscroll`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}