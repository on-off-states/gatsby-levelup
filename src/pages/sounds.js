import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Sounds = () => (
  <Layout>
    <SEO title="Sounds" />
    <h1>Sounds</h1>
    <p>‘Sonic Journalism’ is the aural equivalent of photojournalism. It describes the practice where field recordings play a major role in the discussion and documentation of places, issues and events and where listening to sounds of all kinds strongly informs the approach to research and following narratives whilst on location.</p>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/page-2/">Page 2</Link></li>
          <li><Link to="/page-3/">Page 3</Link></li>
        </ul>
      </nav>
    <Link to="/">Go back to the homepage</Link>
    
  </Layout>
)

export default Sounds

   