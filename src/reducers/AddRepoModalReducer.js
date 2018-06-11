import * as repoBugActions from "../actions/actions";
import * as actionTypes from "../actions/AddRepoModalAction";

const initState = {
    editing: false,
    open: false,
    data: {name: "", url: ""}
};

const AddRepoModalReducer = function(state={...initState}, action) {
    switch(action.type) {
        case actionTypes.TOGGLE_EDITING:
            state = {...state, editing: action.payload};
            break;
        case actionTypes.TOGGLE_MODAL:
            state = {...initState, open: !state.open};
            break;
        case actionTypes.MODAL_DATA_CHANGE:
            state = {...state, data: action.payload};
            break;
        case repoBugActions.ADD_REPO_FULFILLED:
            state = {...initState};
            break;
        default:
            break;
    }
    return state;
}

export default AddRepoModalReducer;