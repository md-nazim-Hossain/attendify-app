import CookieManager from '@react-native-cookies/cookies';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + CookieManager.get('accessToken'),
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
  'Bearer ' + CookieManager.get('accessToken');

export default axios;
