import React, {Component, Fragment} from 'react';
import { TweenLite } from 'gsap'
import { Link } from 'gatsby'

class RightPane extends Component {
    
    state = {
        myDetails: null,
        myTween: null
    }

    componentDidMount(){
        this.myTween = TweenLite.from(this.myDetails, 1, {y: 100, delay: 1, autoAlpha: 0});
    }

    render(){
        return(

            <Fragment>
                {/* <div className="centered"> */}
                    <div ref={div => this.myDetails = div} className="centered">
                         <p className="name">Hi, I'm Rohan Mayya.</p>
                         <p className="description">CS student and fullstack developer. Check out my <Link to="/portfolio" className="portfolio-link">portfolio</Link></p>
                    </div>
            
                    <p className="contact">Want to work with me? Drop me a message at <span>rohan.mayya@gmail.com</span></p>

            </Fragment>

        )
    }
}


export default RightPane;