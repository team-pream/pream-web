import axios from 'axios';
import { ERROR_CODE } from '@/constants/error-code';
// import { ROUTE_PATHS } from '@/constants/routes';
// showDialog 콜백 함수 타입
export type ShowDialog = (title: string, description: string) => void;
// API 생성
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
// Request Interceptors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
formApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// 공통 Response Error 처리 함수
const handleResponseError = async (error, showDialog, originalRequest) => {
  console.log(error.response.data);
  const errorCode = error.response?.data?.errorCode;
  if (
    error.response?.status === ERROR_CODE.UNAUTHORIZED &&
    errorCode === ERROR_CODE.ACCESS_TOKEN_EXPIRED
  ) {
    const refreshToken = localStorage.getItem('refresh');
    if (!refreshToken) {
      showDialog('세션 만료', '로그인 시간이 지났어요.\n다시 로그인 해주세요.');
      localStorage.clear();
      // window.location.href = ROUTE_PATHS.LOGIN;
      return Promise.reject(error);
    }
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
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (e) {
      if (e.response?.data?.errorCode === ERROR_CODE.REFRESH_TOKEN_EXPIRED) {
        showDialog(
          e.response?.data?.title || '세션 만료',
          e.response?.data?.description || '로그인 시간이 지났어요.\n다시 로그인 해주세요.'
        );
        localStorage.clear();
        // window.location.href = ROUTE_PATHS.LOGIN;
      }
    }
  } else if (errorCode === ERROR_CODE.AUTHORIZATION_HEADER_MISSING) {
    showDialog('세션 만료', '로그인 시간이 지났어요.\n다시 로그인 해주세요.');
    localStorage.clear();
    // window.location.href = ROUTE_PATHS.LOGIN;
  }
  return Promise.reject(error);
};
// Response Interceptors 설정
export const configureApiInterceptors = (showDialog: ShowDialog) => {
  api.interceptors.response.use(
    (response) => response,
    (error) => handleResponseError(error, showDialog, error.config)
  );
  formApi.interceptors.response.use(
    (response) => response,
    (error) => handleResponseError(error, showDialog, error.config)
  );
};
