import * as actionTypes from "../actions/actions";

const repoReducer = (state=[], action) => {
    console.log(action.type);
    switch(action.type) {
        case actionTypes.FETCH_REPOS_FULFILLED:
            state = [...action.payload.data]
            break;
        default:
            break;
    }
    return state;
};

export default repoReducer;