import axios from "axios";
const baseURL = 'https://baeintech.herokuapp.com'

// initializing the axios instance with custom configs
const api = axios.create({
  withCredentials: true,
  baseURL: baseURL
});

export default api;
