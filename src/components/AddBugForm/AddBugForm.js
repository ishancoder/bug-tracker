import React, {Component} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import {addBug} from "../../actions/actions";
import {connect} from "react-redux";
import "./AddBugForm.css";

const mapStateToProps = state => {
    return {

    };
};


const mapDispatchToProps = dispatch => {
    return {
        addBug: (repoId, bug) => dispatch(addBug(repoId, bug))
    };
}

class AddBugForm extends Component {
    constructor(props) {
        super(props);
        this.state = {bugName: "", criticality: 0, repo: this.props.repo._id}
    }

    handleChange = (event) => {
        if(event.target.name === "bugName") {
            this.setState({...this.state, bugName: event.target.value});
        } else if(event.target.name === "criticality") {
            this.setState({...this.state, criticality: parseInt(event.target.value, 10)});
        }
    };

    handleAdd = (event) => {
        event.preventDefault();
        this.props.addBug(this.props.repo._id, this.state);
        this.setState({bugName: "", criticality: 0, repo: this.props.repo._id});
    };

    render() {
        return (
            <form className="bug-form" onSubmit={this.handleAdd}>
                <DropDown name="criticality" options={{"Ant": 0, "Fly": 1, "Beetle": 2, "Cockroach": 3}} handleChange={this.handleChange}/>
                <Input value={this.state.bugName} name="bugName" placeholder="Bug Name" handleChange={this.handleChange} />
                <Button value="ADD" />
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBugForm);