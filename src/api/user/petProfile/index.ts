import { api } from '@/api';
import { PetProfileRequestBody } from '@/types';

export const postPetProfile = async (body: PetProfileRequestBody, accessToken: string) => {
  const response = await api.post('/user/pet', body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return response;
};
