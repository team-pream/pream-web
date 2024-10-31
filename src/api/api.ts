import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    // TODO: 토큰 사용방법 변경 (현재는 임시로 localStorage에 저장)
    Authorization: `Bearer ${localStorage.getItem('access')}`,
  },
});
