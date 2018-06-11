import {combineReducers} from "redux";

import bugReducer from "./BugReducer";
import repoReducer from "./RepoReducer";
import addRepoModalReducer from "./AddRepoModalReducer";

const reducer = combineReducers({
    bugs: bugReducer, 
    repos: repoReducer,
    model: addRepoModalReducer,
});

export default reducer;
