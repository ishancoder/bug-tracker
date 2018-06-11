import React, {Component} from "react";
import RepoItem from "../RepoItem/RepoItem";
import "./RepoList.css";

class RepoList extends Component {
    render() {
        return (
            <div className="repo-list-container">
                {
                    (this.props.repos.length) ? this.props.repos.map((repoInstance)=><RepoItem key={repoInstance._id} repo={repoInstance}/>) :
                    <div className="no-repo-message">
                        <i className="far fa-clipboard"></i>
                        <h3>No Repositories to show... Start by adding new Repository</h3>
                    </div>
                }
            </div>
        );
    }
}

export default RepoList;