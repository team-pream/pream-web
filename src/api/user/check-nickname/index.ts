import { api } from '@/api/api';
import { PostCheckNicknameBody } from '@/types';

export const postUserCheckNickname = async (body: PostCheckNicknameBody) => {
  const response = await api.post('/user/check-nickname', body);
  return response.data;
};
