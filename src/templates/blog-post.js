import React, { Fragment } from "react"
import {Link, graphql} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DiscussionEmbed } from "disqus-react";
import { Helmet } from "react-helmet"

import '../styles/github-markdown.scss';
import '../styles/markdown-styles.scss'

import '../styles/blog-post.scss'
import Bio from '../components/Bio'

const Template = ({data, pageContext}) => {
    const {next,prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const date = markdownRemark.frontmatter.date
    const html = markdownRemark.html
    const disqusShortname = "www-rohanmayya-com";
    const disqusConfig = {
      identifier: date,
      title: title,
    };

    
    return (
        <Fragment>
            {/* <div className="back-link">
                <Link to="/"><FontAwesomeIcon icon={'home'} className="back-icon"/></Link>
            </div> */}
            
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href="http://rohanmayya.com" />
        </Helmet>

        <div className="blog-post-container">
            <div className="blog-post-heading">
                <h1 className="blog-post-title">{title}</h1>
                <h3 className="blog-post-date">{date}</h3>
            </div>

            <div className="markdown-body"
                dangerouslySetInnerHTML={{__html: html}} 
            />
        <Bio /> 
        <div className="blog-post-links">
            {prev &&
                <Link to={prev.frontmatter.path} className="blog-post-prev-link">
                    Previous Post
                </Link>
            }
            {next &&
                <Link to={next.frontmatter.path} className="blog-post-next-link">
                    Next Post
                </Link>
            }

        </div>

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

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