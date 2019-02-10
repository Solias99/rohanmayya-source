import React from "react"
import { graphql, Link } from 'gatsby'

import LeftPane from '../components/LeftPane'
import RightPane from '../components/RightPane'

import './../styles/home.scss'


const Layout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return(
       <div>
        <div id="triangle-right"></div>
            <div className="row">

            <div className="grid">
                <div className="left-pane">
                    <LeftPane edges={edges} />
                </div>

                <div className="right-pane">
                    <RightPane />
                </div>
            </div>

            </div>
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