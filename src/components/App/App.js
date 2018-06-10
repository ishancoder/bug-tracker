import React, { Component } from 'react';
import RepoList from "../RepoList/RepoList";
import AddButton from "../AddButton/AddButton";
import {fetchRepos} from "../../actions/actions";
import {connect} from "react-redux";
import './App.css';

const mapStateToProps = state => {
  return {
    repos: state.repos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(fetchRepos())
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <div className="app-container">
        <div className="app">
          <RepoList repos={this.props.repos} />
        </div>
        <AddButton />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
