import React, {Component} from "react";
import "./Input.css";

class Input extends Component {
    render() {
        return(
            <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="input-text" type="text" placeholder={this.props.placeholder}/>
        );
    }
}

export default Input;