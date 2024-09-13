import axios from 'axios';
import { useApiStore, useStore } from '../store';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // when token expired, logout to re-login
      const { logout } = useStore.getState();
      logout();
    }
    return Promise.reject(error);
  }
);

export const UserLogin = async (userName: string, password: string) => {
  const { baseUrl } = useApiStore.getState();

  console.log("baseURl := " + baseUrl)
  try {
    const response = await API.post(``, {
      userName,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to login', error);
    throw error;
  }
};