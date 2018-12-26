import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

const NavLinks = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            activeStyle={{
              color: "red",
            }}
          >
           Home
          </Link>
        </li>
        <li>
          <Link
            to="/page-2"
            activeStyle={{
              color: "red",
            }}
          >
           Second page
          </Link>
        </li>
        <li>
          <Link
            to="/page-3"
            activeStyle={{
              color: "red",
            }}
          >
           Third page
          </Link>
        </li>
        <li>
          <Link
            to="/sounds"
            activeStyle={{
              color: "red",
            }}
          >
           Sounds
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavLinks
