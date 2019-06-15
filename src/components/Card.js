import React, {Component} from "react";

class Card extends Component{
    constructor(props) {
        super(props);
    }
	render() {
        let c ="";
        if (this.props.gender ==="male") {
            c = "blue"
        }
        else {
            c = "yellow"
        }
		return(
            <div style={{borderColor: c, borderWidth: 2, display: 'inline-block', borderStyle: 'solid', margin: 10}}>
                <img src={this.props.imageLink}/>
                <h1>{this.props.name}</h1>
                <h2>{this.props.function}</h2>
            </div>
        );
	}
}

export default Card;