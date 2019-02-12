import React, { Fragment } from "react"
import {Link, graphql} from 'gatsby'


import '../styles/blog-post.scss'

const Template = ({data, pageContext}) => {
    console.log(pageContext)
    const {next,prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const date = markdownRemark.frontmatter.date
    const html = markdownRemark.html

    return (
        <Fragment>
            <div className="blog-post-heading">
                <h1 className="blog-post-title">{title}</h1>
                <h3 className="blog-post-date">{date}</h3>
            </div>
        

        <div className="blog-post-container">
            <div className="blog-post-text"
                dangerouslySetInnerHTML={{__html: html}} 
            />
            
        </div>

        <div className="blog-post-links">
            {prev &&
                <Link to={prev.frontmatter.path} className="blog-post-prev-link">
                    Previous
                </Link>
            }
            {next &&
                <Link to={next.frontmatter.path} className="blog-post-next-link">
                    Next
                </Link>
            }
        </div>

        </Fragment>
    )
}


export const query = graphql`
query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug }}){
        html
        frontmatter{
            title
            date
        }
    }
}
`
export default Template