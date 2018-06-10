import React, {Component} from "react";
import "./RepoItem.css";

class RepoItem extends Component {
    render() {
        return (
            <div className="repo-item">
                <h3>{this.props.repo.name}</h3>
                <span><i className="fas fa-bug"></i> BUGS :- {this.props.repo.bugs.length}</span>
            </div>
        );
    }
}

export default RepoItem;