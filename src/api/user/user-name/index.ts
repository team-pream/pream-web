import { api } from '@/api/api';

export const getUserName = async () => {
  const response = await api.get('/user/profile');
  return response.data;
};
