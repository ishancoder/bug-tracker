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
export const FETCH_REPO_DETAIL_FULFILLED = "FETCH_REPO_DETAIL_FULFILLED";
export const FETCH_REPO_DETAIL_REJECTED = "FETCH_REPO_DETAIL_REJECTED";
export const FETCH_REPO_DETAIL_PENDING = "FETCH_REPO_DETAIL_PENDING";

export const ADD_BUG = "ADD_BUG";
export const ADD_BUG_FULFILLED = "ADD_BUG_FULFILLED";
export const ADD_BUG_REJECTED = "ADD_BUG_REJECTED";
export const ADD_BUG_PENDING = "ADD_BUG_PENDING";

export const REMOVE_BUG = "REMOVE_BUG";
export const REMOVE_BUG_FULFILLED = "REMOVE_BUG_FULFILLED";
export const REMOVE_BUG_REJECTED = "REMOVE_BUG_REJECTED";
export const REMOVE_BUG_PENDING = "REMOVE_BUG_PENDING";

export const UPDATE_BUG = "UPDATE_BUG";
export const UPDATE_BUG_FULFILLED = "UPDATE_BUG_FULFILLED";
export const UPDATE_BUG_REJECTED = "UPDATE_BUG_REJECTED";
export const UPDATE_BUG_PENDING = "UPDATE_BUG_PENDING";

export const TOGGLE_RESOLVE = "TOGGLE_RESOLVE";
export const TOGGLE_RESOLVE_FULFILLED = "TOGGLE_RESOLVE_FULFILLED";
export const TOGGLE_RESOLVE_REJECTED = "TOGGLE_RESOLVE_REJECTED";
export const TOGGLE_RESOLVE_PENDING = "TOGGLE_RESOLVE_PENDING";

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

export function removeRepo(repoId) {
    return {
        type: REMOVE_REPO,
        payload: axios.delete("http://localhost:3000/repos/" + repoId),
        meta: {_id: repoId}
    }
}

export function fetchRepoDetail(repoId) {
    return {
        type: FETCH_REPO_DETAIL,
        payload: axios.get("http://localhost:3000/repos/" + repoId)
    }
}

export function updateRepo(repoId, newRepoDetail) {
    return {
        type: UPDATE_REPO,
        payload: axios.put("http://localhost:3000/repos/" + repoId, newRepoDetail),
        meta: {_id: repoId}
    }
}

export function addBug(repoId, bug) {
    return {
        type: ADD_BUG,
        payload: axios.post("http://localhost:3000/repos/" + repoId + "/bugs", bug)
    }
}

export function removeBug(repoId, bugId) {
    return {
        type: REMOVE_BUG,
        payload: axios.delete("http://localhost:3000/repos/" + repoId + "/bugs/" + bugId),
        meta: {bugId}
    }
}

export function toggleResolve(repoId, bugId) {
    return {
        type: TOGGLE_RESOLVE,
        payload: axios.put("http://localhost:3000/repos/" + repoId + "/bugs/" + bugId +"/resolve"),
        meta: {bugId}
    }
}