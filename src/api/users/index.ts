import { api } from '@/api/api';
import {
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
  PatchAuthOnboardingBody,
  GetUsersMeResponse,
  PatchUsersMeBody,
} from '@/types/users';

export const patchUsersOnboarding = async (body: PatchAuthOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body);
  return response.data;
};

export const postUsersCheckNickname = async (body: PostUsersCheckNicknameBody) => {
  const response = await api.post('/user/check-nickname', body);
  return response.data;
};

// TODO: User와 Pet 분리
export const postUsersPet = async (body: PostUsersPetBody) => {
  const response = await api.post('/user/pet', body);
  return response.data;
};

export const getUsersMe = async () => {
  const response = await api.get<GetUsersMeResponse>('/users/profile');
  return response.data;
};

export const patchUsersme = async (body: PatchUsersMeBody) => {
  const response = await api.patch('/users/me', body);
  return response.data;
};
