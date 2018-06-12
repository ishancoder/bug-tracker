import React, {Component} from "react";
import {toggleModal, toggleEditing, modalDataChange} from "../../actions/AddRepoModalAction";
import {connect} from "react-redux";
import { removeRepo } from "../../actions/actions";
import { Link } from "react-router-dom";
import "./RepoItem.css";

const mapDispatchToProps = dispatch => {
    return {
        editRepoDetail: (repo) => {
            dispatch(toggleModal());
            dispatch(toggleEditing(true));
            dispatch(modalDataChange(repo));
        },
        removeRepo: (repo) => dispatch(removeRepo(repo))
    };
};

class RepoItem extends Component {
    getRepoAvatar = () => {
        if(this.props.repo.url.indexOf("github.com") >= 0) {
            return <i style={{color: "black"}} className="fab fa-github"></i>
        } else if(this.props.repo.url.indexOf("bitbucket.com") >= 0) {
            return <i style={{color: "blue"}} className="fab fa-bitbucket"></i>
        } else {
            return <i style={{color: "black"}} className="fab fa-github"></i>
        }
    };

    handleEdit = ()=> {
        this.props.editRepoDetail(this.props.repo);
    };

    handleDelete = ()=> {
        this.props.removeRepo(this.props.repo._id);
    };

    render() {
        return (
            <div className="repo-item">
                <Link className="repo-link" to={"/repos/" + this.props.repo._id}>
                <div className="repo-type">
                    {this.getRepoAvatar()}
                </div>
                <div className="content">
                    <h3>{this.props.repo.name}</h3>
                    <span><i className="fas fa-bug"></i> Unresolved Bugs : {this.props.repo.activeBugs}</span>
                </div>
                </Link>
                <div className="actions">
                    <span onClick={this.handleEdit}><i className="fas fa-pencil-alt"></i></span> 
                    <span onClick={this.handleDelete}><i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(RepoItem);