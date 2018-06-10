import {combineReducers} from "redux";

import bugReducer from "./BugReducer";
import repoReducer from "./RepoReducer";

const reducer = combineReducers({
    bugs: bugReducer, 
    repos: repoReducer
});

export default reducer;
