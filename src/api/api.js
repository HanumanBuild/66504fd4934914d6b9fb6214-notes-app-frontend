// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_NOTES_APP_BACKEND_URL,
});

export default api;