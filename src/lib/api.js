import axios from 'axios';

const baseUrl = 'https://5dd14f8d15bbc2001448d07d.mockapi.io';

export function getUser(userId) {
  return axios.get(`${baseUrl}/user/${userId}`);
}

export function createUser(user) {
  return axios.post(`${baseUrl}/user`, user);
}