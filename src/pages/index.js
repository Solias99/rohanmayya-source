import React from "react"
import { graphql, Link } from 'gatsby'

import LeftPane from '../components/LeftPane'
import RightPane from '../components/RightPane'

import './../styles/home.scss'


const Layout = ({data}) => {
    // console.log(edges)
    const { edges } = data.allMarkdownRemark
    return(
       <div>
           {/* {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <div key={frontmatter.path}>
                        <Link to={frontmatter.path}>
                        {frontmatter.title}
                        </Link>
                    </div>
                )
           })} */}
    <div id="triangle-right"></div>
    <LeftPane edges={edges} />
    <RightPane />
        



       </div>
    )
}

export const query = graphql`
    query HomepageQuery{
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
        ){
            edges{
                node{
                    frontmatter{
                        title
                        path
                        date
                        excerpt
                    }
                }
            }
        }
    }
`

export default Layout