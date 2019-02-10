import React, { Component, Fragment } from 'react'
import {Link} from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faKey } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { TweenLite } from 'gsap'

library.add(fab)


class LeftPane extends Component {
    state =  {
        blogText: null,
        myTween: null
    }

    componentDidMount(){
        this.myTween = TweenLite.from(this.blogText, 1, {y: 100});
    }

    render() {
        const {edges} = this.props
        const latestPost = edges[0].node.frontmatter

        return (

        <Fragment>
            
        <div className="container">
            <div ref={div => this.blogText = div}>
            {/* <h3 className="blog-heading">latest</h3> */}
                <div className="blog-post">
                    <h3 className="blog-title">{latestPost.title}</h3>
                    <p className="date">{latestPost.date}</p>
                    <p className="blog-description">{latestPost.excerpt}</p>
                    {/* <Link to={latestPost.path} className="button">
                        READ
                    </Link> */}
     
                  
                </div>

                <hr/>
                
                <br/>
                <br/>
                    <Link to="/all-posts" state={{edges}} className="all-posts">view all posts</Link>

            </div>
        </div>
        
        <div className="social">
                <FontAwesomeIcon icon={['fab','github']} className="social-links"/>
                <FontAwesomeIcon icon={['fab','linkedin-in']} className="social-links"/>
        </div>
        
        </Fragment>

    
        );
    }
}


export default LeftPane;