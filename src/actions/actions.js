import axios from "axios";

export const FETCH_REPOS = "FETCH_REPOS";
export const FETCH_REPOS_REJECTED = "FETCH_REPOS_REJECTED";
export const FETCH_REPOS_FULFILLED = "FETCH_REPOS_FULFILLED";
export const FETCH_REPOS_PENDING = "FETCH_REPOS_PENDING";

export const REMOVE_REPO = "REMOVE_REPO";
export const ADD_REPO = "ADD_REPO";

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