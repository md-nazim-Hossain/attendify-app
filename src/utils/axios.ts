import CookieManager from '@react-native-cookies/cookies';
import Axios from 'axios';

const url = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';
const axios = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

axios.interceptors.request.use(async config => {
  const cookies = await CookieManager.get(url);
  const accessToken = cookies?.accessToken?.value;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error?.response?.data);
  },
);

export default axios;
