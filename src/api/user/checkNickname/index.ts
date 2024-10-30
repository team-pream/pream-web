import { api } from '@/api/api';
import { PostCheckNicknameBody } from '@/types';

export const postCheckNickname = async (body: PostCheckNicknameBody, accessToken: string) => {
  const response = await api.post('/user/check-nickname', body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
