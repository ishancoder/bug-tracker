import React, { Component } from 'react';
import RepoList from "../RepoList/RepoList";
import AddButton from "../AddButton/AddButton";
import AddRepoModal from "../AddRepoModal/AddRepoModal";
import {fetchRepos} from "../../actions/actions";
import {toggleModal, modalDataChange, toggleEditing} from "../../actions/AddRepoModalAction";
import {connect} from "react-redux";
import './App.css';

const mapStateToProps = state => {
  return {
    repos: state.repos,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
    toggleModal: () => {
      dispatch(toggleEditing(false));
      dispatch(toggleModal());
    },
    modalDataChange: (data) => dispatch(modalDataChange(data))
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <div className="app-container">
        <AddRepoModal/>
        <div className="app">
          <div className="header">
            Let's Keep Track of Bugs! <span role="img" aria-label="Ant Emoji" aria-labelledby="jsx-ally/accessible-emoji">🦗</span>
          </div>
          <RepoList repos={this.props.repos}/>
        </div>
        <AddButton onClick={this.props.toggleModal}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
