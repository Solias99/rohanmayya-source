import React from "react"
import { graphql, Link } from 'gatsby'

import LeftPane from '../components/LeftPane'
import RightPane from '../components/RightPane'

import './../styles/skeleton/css/skeleton.css'
import './../styles/home.scss'


const Layout = ({data}) => {
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

    <div class="row">
           <div class="six columns left-pane">
                <LeftPane edges={edges} />
           </div>
           <div class="six columns right-pane">
                <RightPane />
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