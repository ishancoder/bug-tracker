import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Input.css";

class Input extends Component {
    render() {
        return(
            <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="input-text" type={this.props.type} placeholder={this.props.placeholder}/>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default Input;