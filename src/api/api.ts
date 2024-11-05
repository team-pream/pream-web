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

    // Access 토큰이 유효하지 않거나 만료된 사용자인 경우
    if (error.response.status === 401 && errorCode === -825) {
      try {
        const refreshToken = localStorage.getItem('refresh');

        // Refresh Token을 사용하여 새로운 Access Token 요청
        const postResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/reissue`,
          {},
          {
            headers: { Authorization: `Bearer ${refreshToken}` },
          }
        );

        const NewAccessToken = postResponse.data.accessToken;
        localStorage.setItem('access', NewAccessToken);

        // 새로운 Access Token을 헤더에 추가하여 요청을 재시도할 수 있도록 설정
        api.defaults.headers.common.Authorization = `Bearer ${NewAccessToken}`;
        originalRequest.headers = `Bearer ${NewAccessToken}`;

        // 원래의 요청을 재시도
        return api(originalRequest);
      } catch (error) {
        console.log('errorCode:', errorCode);
        // Refresh 토큰이 만료되었을 경우
        if (errorCode === -825) {
          window.location.href = '../login'; // 로그인 페이지로 redirect
        }
        return Promise.reject(error);
      }
    }
    // Authorization header가 없는 경우
    else if (errorCode == -954) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      window.location.href = './login';
    }

    return Promise.reject(error);
  }
);
