import React, {Component, Fragment} from 'react';
import { TweenLite } from 'gsap'

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
        <div className="container centered">
                <div ref={div => this.myDetails = div}>
                    <p className="name">Hi, I'm Rohan Mayya.</p>
                    <p className="description">CS student and fullstack developer. Check out my <span>portfolio</span></p>
                </div>
     

                <div class="contact-div">
                    <p className="contact">Want to work with me? Drop me a message at <span>rohan.mayya@gmail.com</span></p>
                </div>
            </div>
            </Fragment>
        )
    }
}


export default RightPane;