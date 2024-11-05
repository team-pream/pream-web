import { api } from '../api';

// Access Token 유효성 확인 API 호출
export const getAuthStatus = async () => {
  return await api.get('auth/status');
};

// Access Token 재발급 API 호출
export const postReIssueAccessToken = async (refreshToken: string) => {
  const response = await api.post('auth/reissue', null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return response.data.accessToken;
};
