import React, { Component } from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Tours from '../components/Tours/Tours'
import Seo from '../components/Seo'


export default class tours extends Component {
    render() {
        return (
            <Layout>
              <Seo title="Tours"/>
<StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}/>             
           <Tours/>
            </Layout>
        )
    }
}


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