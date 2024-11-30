import {config as url} from '@/config';
import CookieManager from '@react-native-cookies/cookies';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: url.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
});

axios.interceptors.request.use(async config => {
  const cookies = await CookieManager.get(url.API_BASE_URL);
  const accessToken = cookies?.accessToken?.value;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    console.log({error});
    return Promise.reject(error?.response?.data);
  },
);

export default axios;
