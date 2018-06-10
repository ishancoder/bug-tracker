import React, {Component} from "react";
import RepoItem from "../RepoItem/RepoItem";
import "./RepoList.css";

class RepoList extends Component {
    render() {
        return (
            <div className="repo-list-container">
                {
                    this.props.repos.map((repoInstance)=><RepoItem key={repoInstance._id} repo={repoInstance}/>)
                }
            </div>
        );
    }
}

export default RepoList;