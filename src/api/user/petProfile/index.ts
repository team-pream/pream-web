import { api } from '@/api/api';
import { PostUserPetBody } from '@/types';

export const postUserPet = async (body: PostUserPetBody) => {
  const response = await api.post('/user/pet', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
