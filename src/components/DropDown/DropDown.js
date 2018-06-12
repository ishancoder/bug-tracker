import React, {Component} from "react";
import "./DropDown.css";

class DropDown extends Component {
    render() {
        return (
            <select value={this.props.value} name={this.props.name} className="drop-down" onChange={this.props.handleChange}>
                {Object.keys(this.props.options).map((ops)=> <option key={ops} value={this.props.options[ops]}>{ops}</option>)}
            </select>
        );
    }
}

export default DropDown;