import React, { Component } from "react";
import "./Body.scss";
import step0 from "../../images/0.jpg";
import step2 from "../../images/2.jpg";
import step3 from "../../images/3.jpg";
import step4 from "../../images/4.jpg";
import step5 from "../../images/5.jpg";
import step6 from "../../images/6.jpg";

class Body extends Component{
    static defaultProps = {
        images: [step0,step2, step3, step4, step5, step6]
    };
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return(
            <div className={"Body"}>
                <nav className='nav-content'>
                    <span className='mistake-number'>
						Guessed wrong: {this.props.mistake}
					</span>
                </nav>
                <img src={this.props.images[this.props.mistake]}
                     alt={this.props.images[this.props.mistake]}
                />
            </div>
        );
    }
}
export default Body;
