import { api } from '@/api/api';
import { PostUserPetBody } from '@/types';

export const postUserPet = async (body: PostUserPetBody, accessToken: string) => {
  const response = await api.post('/user/pet', body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
