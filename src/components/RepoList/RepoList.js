import React, {Component} from "react";
import PropTypes from "prop-types";
import RepoItem from "../RepoItem/RepoItem";
import EmptyInfo from "../EmptyInfo/EmptyInfo";
import "./RepoList.css";

class RepoList extends Component {
    render() {
        return (
            <div className="repo-list-container">
                {
                    (this.props.repos.length) ? this.props.repos.map((repoInstance)=><RepoItem key={repoInstance._id} repo={repoInstance}/>) :
                    <EmptyInfo message="No Repository to show... Start by adding some." />
                }
            </div>
        );
    }
}

RepoList.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RepoList;