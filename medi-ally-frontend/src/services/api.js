import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

/** Axios instance with base config */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor — attach token
api.interceptors.request.use((config) => {
  const user = localStorage.getItem('mediAlly-user');
  if (user) {
    config.headers.Authorization = `Bearer mock-token-${JSON.parse(user).id}`;
  }
  return config;
});

// Response interceptor — handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('mediAlly-user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
