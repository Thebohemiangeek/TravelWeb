import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";import Banner from '../components/Banner'
import Seo from '../components/Seo'

export default function  error()  {
    return (
        <Layout>
            <Seo title="Error"/>>
            <header className={styles.error}>
            <Banner tittle="oops it's a dead end">
            <AniLink fade to="/" className="btn-white">back to home page</AniLink>
            </Banner></header>
        </Layout>
    )
}

