import React, { Component } from 'react'
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
        // use the node ref to create the animation
        this.myTween = TweenLite.from(this.blogText, 1, {y: 100});
    }

    render() {
        const {edges} = this.props
        const latestPost = edges[0].node.frontmatter
        console.log(edges)

        return (
        
    <div className="split left">
        <div ref={div => this.blogText = div}>
            <h3 className="blog-heading">latest post</h3>
            <div className="blog-post">
                <p className="date">{latestPost.date}</p>
                <h3 className="blog-title">{latestPost.title}</h3>
                <p className="blog-description">{latestPost.excerpt}</p>
                <Link to={latestPost.path} className="button">
                    READ
                </Link>
       
            </div>

        </div>
        <Link to="/all-posts" state={{edges}} className="all-posts">VIEW ALL POSTS</Link>

        <div className="social">
                <FontAwesomeIcon icon={['fab','github']} className="social-links"/>
                <FontAwesomeIcon icon={['fab','linkedin-in']} className="social-links"/>
        </div>
    </div>
    
        );
    }
}


export default LeftPane;