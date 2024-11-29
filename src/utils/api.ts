import axios from './axios';

export const api = {
  get: <T>(url: string, params?: object) => {
    axios.get<T>(url, {params});
  },
  post: <T>(url: string, data?: object) => {
    axios.post<T>(url, data);
  },
  put: <T>(url: string, data?: object) => {
    axios.put<T>(url, data);
  },
  delete: <T>(url: string) => {
    axios.delete<T>(url);
  },
  patch: <T>(url: string, data?: object) => {
    axios.patch<T>(url, data);
  },
};
