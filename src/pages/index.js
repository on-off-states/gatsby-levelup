import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Gatsby test drive</h1>
    <p>First roll with Gatsby to see how it all hangs.</p>
    <p>Starting from the default starter, poking around and testing out with some example content and functionality to explore possibilities and compare with Hugo.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <nav>
        <ul>
          <li><Link to="/page-2/">Go to page 2</Link></li>
          <li><Link to="/page-3/">Go to page 3</Link></li>
          <li><Link to="/sounds/">Sounds</Link></li>
        </ul>
      </nav>
    
    
  </Layout>
)

export default IndexPage
