import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error?.response?.data);
  },
);

axios.defaults.headers.common.Authorization =
  'Bearer ' + localStorage.getItem('token');

export default axios;
