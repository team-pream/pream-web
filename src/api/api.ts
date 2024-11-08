import axios from 'axios';
import { ERROR_CODE } from '@/constants/error-code';
import { ROUTE_PATHS } from '@/constants/routes';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

formApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 에러코드에 따른 에러처리
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config; // 현재 요청 객체를 저장하여 재시도 시 사용
    const errorCode = error.response.data?.errorCode;

    if (
      error.response.status === ERROR_CODE.UNAUTHORIZED &&
      errorCode === ERROR_CODE.ACCESS_TOKEN_EXPIRED
    ) {
      const refreshToken = localStorage.getItem('refresh');

      try {
        // Refresh Token을 사용하여 새로운 Access Token 요청
        const postResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/reissue`,
          {},
          {
            headers: { Authorization: `Bearer ${refreshToken}` },
          }
        );

        const newAccessToken = postResponse.data.accessToken;
        localStorage.setItem('access', newAccessToken);

        // 새로운 Access Token을 헤더에 추가하여 요청을 재시도할 수 있도록 설정
        api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers = `Bearer ${newAccessToken}`;

        // 원래의 요청을 재시도
        return api(originalRequest);
      } catch (e) {
        if (e.response.data.errorCode === ERROR_CODE.REFRESH_TOKEN_EXPIRED) {
          alert('로그인 시간이 지났어요. 다시 로그인 해주세요');
          window.location.href = ROUTE_PATHS.LOGIN;
          localStorage.clear();
        }
      }
    }
    return Promise.reject(error);
  }
);

formApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errorCode = error.response.data?.errorCode;

    if (
      error.response.status === ERROR_CODE.UNAUTHORIZED &&
      errorCode === ERROR_CODE.ACCESS_TOKEN_EXPIRED
    ) {
      const refreshToken = localStorage.getItem('refresh');

      try {
        const postResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/reissue`,
          {},
          {
            headers: { Authorization: `Bearer ${refreshToken}` },
          }
        );

        const newAccessToken = postResponse.data.accessToken;
        localStorage.setItem('access', newAccessToken);

        api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (e) {
        if (e.response.data.errorCode === ERROR_CODE.REFRESH_TOKEN_EXPIRED) {
          alert('로그인 시간이 지났어요. 다시 로그인 해주세요');
          window.location.href = ROUTE_PATHS.LOGIN;
          localStorage.clear();
        }
      }
    } else if (errorCode == ERROR_CODE.AUTHORIZATION_HEADER_MISSING) {
      alert('로그인 시간이 지났어요. 다시 로그인 해주세요.');
      window.location.href = ROUTE_PATHS.LOGIN;
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
