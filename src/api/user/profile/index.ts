import { api } from '@/api/api';

export const getProfile = async (accessToken: string) => {
  const response = await api.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
