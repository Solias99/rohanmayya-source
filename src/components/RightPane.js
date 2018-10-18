import React, {Component} from 'react';
import { TweenLite } from 'gsap'

class RightPane extends Component {
    
    state = {
        myDetails: null,
        myTween: null
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.from(this.myDetails, 1, {y: 100, delay: 1, autoAlpha: 0});
    }

    render(){
        return(
        <div className="split right">

            <div ref={div => this.myDetails = div} className="centered">
                <p className="name">Hi, I'm Rohan Mayya</p>
                <p className="description">CS student and fullstack developer. Check out my <span>portfolio</span></p>
            </div>
            <p className="contact">Want to work with me? Drop me a message at <span>rohan.mayya@gmail.com</span></p>
        </div>
        )
    }
}


export default RightPane;