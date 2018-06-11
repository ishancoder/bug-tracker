import axios from "axios";

export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_REPOS_REJECTED = "FETCH_REPOS_REJECTED";
export const FETCH_REPOS_FULFILLED = "FETCH_REPOS_FULFILLED";
export const FETCH_REPOS_PENDING = "FETCH_REPOS_PENDING";

export const REMOVE_REPO = "REMOVE_REPO";
export const REMOVE_REPO_PENDING = "REMOVE_REPO_PENDING";
export const REMOVE_REPO_REJECTED = "REMOVE_REPO_REJECTED";
export const REMOVE_REPO_FULFILLED = "REMOVE_REPO_FULFILLED";

export const UPDATE_REPO = "UPDATE_REPO";
export const UPDATE_REPO_PENDING = "UPDATE_REPO_PENDING";
export const UPDATE_REPO_REJECTED = "UPDATE_REPO_REJECTED";
export const UPDATE_REPO_FULFILLED = "UPDATE_REPO_FULFILLED";

export const ADD_REPO_PENDING = "ADD_REPO_PENDING";
export const ADD_REPO = "ADD_REPO";
export const ADD_REPO_FULFILLED = "ADD_REPO_FULFILLED";
export const ADD_REPO_REJECTED = "ADD_REPO_REJECTED";

export const FETCH_REPO_DETAIL = "FETCH_REPO_DETAIL";
export const FETCH_REPO_DETAIL_REJECTED = "FETCH_REPO_DETAIL_REJECTED";
export const FETCH_REPO_DETAIL_PENDING = "FETCH_REPO_DETAIL_PENDING";

export const ADD_BUG = "ADD_BUG";
export const REMOVE_BUG = "REMOVE_BUG";
export const UPDATE_BUG = "UDPATE_BUG";

export function fetchRepos() {
    return {
        type: FETCH_REPOS,
        payload: axios.get("http://localhost:3000/repos")
    }
}

export function addRepo(repo) {
    return {
        type: ADD_REPO,
        payload: axios.post("http://localhost:3000/repos", repo)
    }
}

export function removeRepo(repo) {
    return {
        type: REMOVE_REPO,
        payload: axios.delete("http://localhost:3000/repos/" + repo._id),
        meta: {_id: repo._id}
    }
}