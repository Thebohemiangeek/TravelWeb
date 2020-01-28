/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
siteMetadata: {
title:"BackRoads",
description:"Explore awesome worldwide touers & discover what makes each of them unique.Forget your daily routine & say yes to adventure",
author: '@john',
twitterUsername:"@John66234053",
image:"/defaultBcg.jpeg",
siteUrl: 'https://netlify.com',
},

plugins:[`gatsby-plugin-styled-components`,
`gatsby-plugin-react-helmet`,{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    // Learn about environment variables: https://gatsby.dev/env-vars
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
},{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.netlify.com',
      sitemap: 'https://www.netlify.com/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },`gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`, 
     `gatsby-plugin-transition-link`,
     `gatsby-plugin-playground`,
     `gatsby-plugin-sitemap`,
],
}
