import React, {Component} from "react";
import PropTypes from "prop-types";
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
            return <i style={{color: "black"}} className="fas fa-question"></i>
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

RepoItem.propTypes = {
    repo: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        activeBugs: PropTypes.number.isRequired,
        bugs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
};

export default connect(null, mapDispatchToProps)(RepoItem);