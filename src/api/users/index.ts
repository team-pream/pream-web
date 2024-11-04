import { api } from '@/api/api';
import {
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
  PatchAuthOnboardingBody,
  GetUsersMeResponse,
  PatchUsersAddressBody,
} from '@/types/users';

export const patchUsersOnboarding = async (body: PatchAuthOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body);
  return response.data;
};

export const postUsersCheckNickname = async (body: PostUsersCheckNicknameBody) => {
  const response = await api.post('/user/check-nickname', body);
  return response.data;
};

export const postUsersPet = async (body: PostUsersPetBody) => {
  const response = await api.post('/user/pet', body);
  return response.data;
};

export const getUsersMe = async () => {
  const response = await api.get<GetUsersMeResponse>('/users/profile');
  console.log('User Info:', response.data);
  return response.data;
};

export const patchUsersAddress = async (body: PatchUsersAddressBody) => {
  const response = await api.patch('/users/address', body);
  return response.data;
};
