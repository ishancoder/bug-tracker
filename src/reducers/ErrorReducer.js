import * as actionType from "../actions/actions";

const ErrorReducer = (state={}, action) => {
    switch(action.type) {
        case actionType.FETCH_REPOS_REJECTED:
        case actionType.FETCH_REPO_DETAIL_REJECTED:
        case actionType.ADD_REPO_REJECTED:
        case actionType.ADD_BUG_REJECTED:
        case actionType.REMOVE_BUG_REJECTED:
        case actionType.REMOVE_REPO_REJECTED:
        case actionType.TOGGLE_RESOLVE_REJECTED:
        case actionType.UPDATE_REPO_REJECTED:
            state = {...action.payload};
            break;
        case actionType.FETCH_REPOS_REJECTED:
        case actionType.FETCH_REPO_DETAIL_REJECTED:
        case actionType.ADD_REPO_REJECTED:
        case actionType.ADD_BUG_REJECTED:
        case actionType.REMOVE_BUG_REJECTED:
        case actionType.REMOVE_REPO_REJECTED:
        case actionType.TOGGLE_RESOLVE_REJECTED:
        case actionType.UPDATE_REPO_REJECTED:
            state = {};
            break;
        default:
            break;
    }
    return state;
};

export default ErrorReducer;