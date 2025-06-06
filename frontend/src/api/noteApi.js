import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/notes',
});

// Intercept each request to inject the token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // now accessed safely at request time
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchNotes = () => API.get('/');
export const createNote = (noteData) => API.post('/', noteData);
export const updateNote = (id, noteData) => API.put(`/${id}`, noteData);
export const deleteNote = (id) => API.delete(`/${id}`);
