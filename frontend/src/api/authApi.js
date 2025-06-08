import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://note-app-9rjm.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Automatically attach token if present
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
