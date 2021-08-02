import axios from 'axios';

export function getUser(username) { 
  return axios.get(`/githubApi/search/users?q=${username}`).then(response => response.data);
}

export function getUserByFetch(username) {
  return fetch(`/githubApi/search/users?q=${username}`).then(response => response.json());
}