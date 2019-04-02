/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <div
            style={{
              display: `flex`,
              marginTop: 32,
              marginBottom: 32,
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="Rohan Mayya"
              style={{
                marginRight: 20,
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p style={{fontStyle: 'italic', fontSize: 13, fontWeight: 'lighter'}}>
              Hi there! I'm Rohan, your friendly neighbourhood fullstack developer. Follow me on <a href="https://github.com/Solias99" className="github-black-link">Github!</a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio