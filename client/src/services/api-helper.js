import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

const getToken = () => {
  const token = localStorage.getItem('jwt');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  return resp.data
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data
}

export const fetchComments = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const createComment = async (data) => {
  getToken();
  const { id, ...newComment } = data;
  const resp = await api.post(`/stays/${id}/comments`, newComment)
  return resp.data;
}

export const updateComment = async (data) => {
  getToken();
  const { id, ...commentData } = data;
  await api.put(`/comments/${id}`, commentData)
}

export const deleteComment = async (id) => {
  getToken();
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
}

export const stayInfo = async (id) => {
  const resp = await api.get(`/stays/${id}`);
  return resp.data;
}




