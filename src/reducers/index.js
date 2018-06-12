import {combineReducers} from "redux";

import bugReducer from "./BugReducer";
import repoReducer from "./RepoReducer";
import addRepoModalReducer from "./AddRepoModalReducer";
import repoDetailsReducer from "./RepoDetailReducer";

const reducer = combineReducers({
    bugs: bugReducer, 
    repos: repoReducer,
    model: addRepoModalReducer,
    currentRepo: repoDetailsReducer,
});

export default reducer;
