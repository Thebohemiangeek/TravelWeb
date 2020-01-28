import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Contact from '../components/Contact/Contact'
import Seo from '../components/Seo'

export default function contact({data}) {
    return (
        <Layout><Seo title="contact page"/>
<StyledHero img={data.contactBcg.childImageSharp.fluid} />     
<Contact/>
   </Layout>
    )
}


export const query= graphql`
query {
    contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90 maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  
  }
`