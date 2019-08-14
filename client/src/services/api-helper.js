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

export const fetchReviews = async (id) => {
  const resp = await api.get(`/stays/${id}/reviews`);
  return resp.data;
}

export const createReview = async (stayid, data) => {
  getToken();
  const resp = await api.post(`/stays/${stayid}/reviews`, { ...data, stay_id: stayid })
  return resp.data;
}

export const updateReview = async (data) => {
  getToken();
  const { id, ...reviewData } = data;
  await api.put(`/reviews/${id}`, reviewData)
}

export const deleteReview = async (id) => {
  getToken();
  const resp = await api.delete(`/reviews/${id}`);
  return resp.data;
}

export const stayInfo = async () => {
  const resp = await api.get(`/stays`);
  return resp.data;
}

export const stayDetails = async (id) => {
  const resp = await api.get(`/stays/${id}`);
  console.log(resp.data)
  return resp.data;
}




