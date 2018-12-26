import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavLinks from '../components/nav-links';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Second page</h1>
    <p>A second test page component.</p>
    <NavLinks />
  </Layout>
)

export default SecondPage
