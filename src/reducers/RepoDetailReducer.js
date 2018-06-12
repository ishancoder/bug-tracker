import * as actionType from "../actions/actions";
import _ from "lodash";

const findBugById = (bugArray, id) => {
    return bugArray.indexOf(bugArray.find((elem)=>elem._id === id));
};

const RepoDetailReducer = (state={bugs: []}, action) => {
    let idx, bugs;
    switch(action.type) {
        case actionType.FETCH_REPO_DETAIL_FULFILLED:
            action.payload.data.bugs.sort((a, b)=> a.criticality < b.criticality);
            state = {...action.payload.data};
            break;
        case actionType.ADD_BUG_FULFILLED:
            bugs = [...state.bugs, action.payload.data];
            bugs.sort((a, b)=>a.criticality < b.criticality);
            state = {...state, bugs};
            break;
        case actionType.REMOVE_BUG_FULFILLED:
            bugs = [...(state.bugs)];
            idx = findBugById(bugs, action.meta.bugId);
            bugs.splice(idx, 1);
            state = {...state, bugs};
            break;
        case actionType.TOGGLE_RESOLVE_FULFILLED:
            bugs = _.cloneDeep(state.bugs);
            idx = findBugById(bugs, action.meta.bugId);
            bugs[idx].resolved = action.payload.data.resolved;
            state = {...state, bugs};
            break;
        default:
            break;
    }
    return state;
};

export default RepoDetailReducer;