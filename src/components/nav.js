import React from "react"
import { Link } from "gatsby"

class Page extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/another-page/"
          activeStyle={{
            color: "red",
          }}
          innerRef={el => {
            this.myLink = el
          }}
          state={{
            pleasant: "reasonably",
          }}
        >
          Another page
        </Link>
      </div>
    )
  }
}