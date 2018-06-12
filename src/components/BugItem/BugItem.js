import React, {Component} from "react";
import {removeBug, toggleResolve} from "../../actions/actions";
import {connect} from "react-redux";
import "./BugItem.css";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeBug: ()=>dispatch(removeBug(ownProps.bug.repo, ownProps.bug._id)),
        toggleResolve: ()=>dispatch(toggleResolve(ownProps.bug.repo, ownProps.bug._id))
    }
}

class BugItem extends Component {
    getCriticalityAvatar = (cLevel) => {
        switch(cLevel) {
            case 0:
                return "🐜";
            case 1:
                return "🐝";
            case 2:
                return "🐞";
            case 3:
                return "🦗";
            default:
                return "?";
        }
    };

    render() {
        return (
            <div className="bug-item">
                <div className="criticality">
                    <span>{this.getCriticalityAvatar(this.props.bug.criticality)}</span>
                </div>
                <div className="bug-name">
                    <span>{this.props.bug.bugName}</span>
                </div>
                <div className="actions">
                    <label>Resolved:</label><input type="checkbox" onChange={this.props.toggleResolve} defaultChecked={this.props.bug.resolved}/>
                    <span onClick={this.props.removeBug}><i className="fas fa-trash"></i></span>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(BugItem);