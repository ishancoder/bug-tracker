import {combineReducers} from "redux";

import bugReducer from "./BugReducer";
import repoReducer from "./RepoReducer";
import addRepoModalReducer from "./AddRepoModalReducer";
import repoDetailsReducer from "./RepoDetailReducer";
import errorReducer from "./ErrorReducer";

const reducer = combineReducers({
    bugs: bugReducer, 
    repos: repoReducer,
    model: addRepoModalReducer,
    currentRepo: repoDetailsReducer,
    error: errorReducer,
});

export default reducer;
