import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`
const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{ language: "English" }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
{/*       facebook card
 */}  
       <meta name="og:url" content={siteUrl} />
       <meta name="og:type" content="website" />
       <meta name="og:description" content={siteDescription} />

       <meta name="og:image" content={`${siteUrl}${image}`} />
       <meta name="og:image:width" content="400" />
       <meta name="og:image:height" content="300" />

     {/* 
      twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default Seo
