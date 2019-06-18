import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_SRV_URL,
});

export default api;
