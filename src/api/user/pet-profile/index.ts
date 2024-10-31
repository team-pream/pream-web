import { api } from '@/api/api';
import { PostUserPetBody } from '@/types';

export const postUserPet = async (body: PostUserPetBody) => {
  const response = await api.post('/user/pet', body);
  return response.data;
};
