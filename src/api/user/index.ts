import { api } from '@/api/api';
import { PostCheckNicknameBody } from '@/types/user';
import { PostUserPetBody } from '@/types/user';
import { PatchUserOnboardingBody } from '@/types/user';

export const patchUserOnboarding = async (body: PatchUserOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body);
  return response.data;
};

export const postUserCheckNickname = async (body: PostCheckNicknameBody) => {
  const response = await api.post('/user/check-nickname', body);
  return response.data;
};

export const postUserPet = async (body: PostUserPetBody) => {
  const response = await api.post('/user/pet', body);
  return response.data;
};

export const getUserName = async () => {
  const response = await api.get('/user/profile');
  return response.data;
};
