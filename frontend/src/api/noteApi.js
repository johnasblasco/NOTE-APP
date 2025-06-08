import axios from 'axios';

const API = axios.create({
  baseURL: 'https://note-app-9rjm.onrender.com/api/notes',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchNotes = () => API.get('/');
export const createNote = (noteData) => API.post('/', noteData);
export const updateNote = (id, noteData) => API.put(`/${id}`, noteData);
export const deleteNote = (id) => API.delete(`/${id}`);
