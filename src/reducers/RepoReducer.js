import * as actionTypes from "../actions/actions";
import _ from "lodash";

const repoReducer = (state=[], action) => {
    let index, newState;
    switch(action.type) {
        case actionTypes.FETCH_REPOS_FULFILLED:
            state = [...action.payload.data]
            break;
        case actionTypes.ADD_REPO_FULFILLED:
            state = [...state, action.payload.data]
            break;
        case actionTypes.REMOVE_REPO_FULFILLED:
            newState = [...state];
            index = _.findIndex(state, {_id: action.meta._id});
            newState.splice(index, 1);
            state = [...newState];
            break;
        case actionTypes.UPDATE_REPO_FULFILLED:
            newState = _.cloneDeep(state);
            index = _.findIndex(newState, {_id: action.meta._id});
            newState[index] = action.payload.data;
            state = newState;
            break;
        default:
            break;
    }
    return state;
};

export default repoReducer;