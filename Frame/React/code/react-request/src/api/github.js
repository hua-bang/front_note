import axios from 'axios';

export function getUser(username) { 
  return axios.get(`/githubApi/search/users?q=${username}`);
}