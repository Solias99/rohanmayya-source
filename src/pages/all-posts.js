import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/all-posts.scss'

const AllPosts = ({data}) => { 
    const { edges } = data.allMarkdownRemark

return(
    <Fragment>
        <div className="back-link">
            <Link to="/"><FontAwesomeIcon icon={'arrow-left'} className="back-icon"/></Link>
        </div>

        <div className="all-posts-container">
                {edges.map(edge =>
                    <Link to={edge.node.frontmatter.path} key={edge.node.frontmatter.date} className="all-posts-links">
                        <div className="card">
                            <h2 className="all-posts-title">{edge.node.frontmatter.title}</h2>
                            <p className="all-posts-excerpt">{edge.node.frontmatter.excerpt}</p>
                            <p className="all-posts-date">{edge.node.frontmatter.date}</p>
                            <br/>
                        </div>
                    </Link>
                )}
        </div>
    </Fragment>


 )
}

export const query = graphql`
    query AllPostsPageQuery{
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

export default AllPosts;