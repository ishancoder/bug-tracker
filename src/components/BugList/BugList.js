import React, {Component} from "react";
import PropTypes from "prop-types";
import BugItem from "../BugItem/BugItem";
import EmptyInfo from "../EmptyInfo/EmptyInfo";
import "./BugList.css";

class BugList extends Component {

    getBugsByResovled = (resolved, message)=> {
        let filtered =  this.props.bugs.filter((bugInstance)=>{
            return bugInstance.resolved === resolved;
        });
        if(filtered.length === 0)
            return <EmptyInfo message={message}/>
        return filtered.map((instance)=><BugItem key={instance._id} bug={instance}/>);
    };

    render() {
        return (
        <div className="bug-list">
            <div>
                <h4>Unresovled</h4>
                {this.getBugsByResovled(false, "No Unresolved Bugs: Yay!")}
            </div>
            <div>
                <h4>Resolved</h4>
                {this.getBugsByResovled(true, "This is empty")}
            </div>
        </div>);
    }
}

BugList.propTypes = {
    bugs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BugList;