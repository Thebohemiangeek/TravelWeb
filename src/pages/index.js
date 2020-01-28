import React from "react"
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import FeaturedTours from '../components/Home/FeaturedTours'
import Seo from '../components/Seo'
export default ({data}) => <React.Fragment>
<Layout>
  <Seo title="Homepage" description="This is our homepage"/>
<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
<Banner title="continue exploring" info="loren ipsum dolor sit amet">
<AniLink fade to="/tours" className="btn-white">explore tours</AniLink>
</Banner>
</StyledHero>
<About />
<Services/>
<FeaturedTours/>>
</Layout>
</React.Fragment>

export const query= graphql`
query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90 maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  
  }
`