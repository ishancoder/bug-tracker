import React, {Component} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {addRepo} from "../../actions/actions";
import {toggleModal, modalDataChange} from "../../actions/AddRepoModalAction";
import {connect} from "react-redux";
import "./AddRepoModal.css";

const mapStateToProps = state => {
    return {
        data: state.model.data,
        editing: state.model.editing,
        open: state.model.open
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addRepo: (repo) => dispatch(addRepo(repo)),
        toggleModal: () => dispatch(toggleModal()),
        modalDataChange: (data) => dispatch(modalDataChange(data))
    };
};

class AddRepoModal extends Component {
    handleChange = (event) => {
        if(event.target.name === "name") {
            this.props.modalDataChange({...this.props.data, name: event.target.value});
        } else if(event.target.name === "url") {
            this.props.modalDataChange({...this.props.data, url: event.target.value});
        }
    };

    handleClose = () => {
        this.props.toggleModal();
    };

    handleAdd = () => {
        this.props.addRepo(this.props.data);
    };

    render() {
        return (
            <div className={"add-repo-modal "+ (this.props.open ? "show" : "")}>
                <span onClick={this.handleClose} style={{position: "absolute", top: "20px", right: "20px", fontSize:"2em", cursor: "pointer"}}><i className="fas fa-times"></i></span>
                <h3>{(this.props.editing) ? "Edit " : "Add"} Repository Details</h3>
                <Input name="name" value={this.props.data.name} handleChange={this.handleChange} placeholder="Repository Name..." />
                <Input name="url" value={this.props.data.url} handleChange={this.handleChange} placeholder="Repository URL..." />
                <Button value="ADD" onClick={this.handleAdd}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRepoModal);