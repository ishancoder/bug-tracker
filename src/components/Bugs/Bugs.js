import React, {Component} from "react";
import BugList from "../BugList/BugList";
import { fetchRepoDetail } from "../../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Bugs.css";
import AddBugForm from "../AddBugForm/AddBugForm";

const mapStateToProps = state => {
    return {
        repo: state.currentRepo
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRepoDetail: () => dispatch(fetchRepoDetail(ownProps.match.params.repo_id))
    };
};

class Bugs extends Component {
    componentWillMount() {
        this.props.fetchRepoDetail();
    }

    render() {
        return (
            <div className="bugs">
                <div className="header">
                    <div>
                        <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                    </div>
                    <div className="header-title">
                        <span>{this.props.repo.name}</span>
                        <a href={this.props.repo.url}>{this.props.repo.url}</a>
                    </div>
                </div>
                <AddBugForm repo={this.props.repo}/>
                <div className="bug-list-container">
                    <BugList bugs={this.props.repo.bugs} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);