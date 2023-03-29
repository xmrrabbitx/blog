import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'TEST IS OK'}
  });

  export default API;