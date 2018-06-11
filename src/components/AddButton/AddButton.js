import React, {Component} from "react";
import "./AddButton.css";

class AddButton extends Component {
    render() {
        return(<button style={{...this.props.style}} className="add-button" onClick={this.props.onClick}><i className="fas fa-plus"></i></button>)
    }
}

export default AddButton;