
// axiosConfig.js - Axios interceptor for automatic token handling
import axios from 'axios';
import { authService } from './authService';

// Request interceptor to add auth token
axios.interceptors.request.use(
  (config) => {
    const authHeaders = authService.getAuthHeader();
    config.headers = { ...config.headers, ...authHeaders };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      authService.clearAuth();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axios;