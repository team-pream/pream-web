import { api } from '@/api';
import { CheckNicknameRequestBody } from '@/types';

export const postCheckNickname = async (body: CheckNicknameRequestBody, accessToken: string) => {
  const response = await api.post('/user/check-nickname', body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response;
};
