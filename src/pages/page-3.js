import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
        </ul>
      </nav>
    <Link to="/">Go back to the homepage</Link>
    
  </Layout>
)
export default ThirdPage


   