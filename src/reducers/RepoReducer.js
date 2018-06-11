import * as actionTypes from "../actions/actions";

const repoReducer = (state=[], action) => {
    switch(action.type) {
        case actionTypes.FETCH_REPOS_FULFILLED:
            state = [...action.payload.data]
            break;
        case actionTypes.ADD_REPO_FULFILLED:
            state = [...state, action.payload.data]
            break;
        case actionTypes.REMOVE_REPO_FULFILLED:
            let found_element = state.find((x)=>x._id === action.meta._id);
            let index = state.indexOf(found_element);
            let newState = [...state];
            newState.splice(index, 1);
            state = [...newState];
            break;
        default:
            break;
    }
    return state;
};

export default repoReducer;