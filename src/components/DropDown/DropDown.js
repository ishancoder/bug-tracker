import React, {Component} from "react";
import PropTypes from "prop-types";
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

DropDown.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    options: PropTypes.object.isRequired
};

export default DropDown;