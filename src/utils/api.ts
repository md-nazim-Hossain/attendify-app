import {AxiosResponse} from 'axios';
import axios from './axios';

export const api = {
  get: <T>(url: string, params?: object): Promise<AxiosResponse<T>> => {
    return axios.get<T>(url, {params});
  },
  post: <T>(url: string, data: any): Promise<AxiosResponse<T>> => {
    return axios.post<T>(url, data);
  },
  put: <T>(url: string, data?: any): Promise<AxiosResponse<T>> => {
    return axios.put<T>(url, data);
  },
  delete: <T>(url: string) => {
    return axios.delete<T>(url);
  },
  patch: <T>(url: string, data?: any) => {
    return axios.patch<T>(url, data);
  },
};
