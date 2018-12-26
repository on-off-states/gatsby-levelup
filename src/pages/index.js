import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import NavLinks from '../components/nav-links'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Gatsby test drive</h1>
    <p>First roll with Gatsby to see how it all hangs.</p>
    <p>Starting from the default starter, poking around and testing out with some example content and functionality to explore possibilities and compare with Hugo.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <NavLinks />   
  </Layout>
)

export default IndexPage
