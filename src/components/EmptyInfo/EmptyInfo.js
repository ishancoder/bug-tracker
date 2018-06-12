import React, {Component} from "react";
import "./EmptyInfo.css";

class EmptyInfo extends Component {
    render() {
        return (
            <div className="empty-info-message">
                <i className="far fa-clipboard"></i>
                <h3>{this.props.message}</h3>
            </div>
        );
    }
}

export default EmptyInfo;