import { api, formApi } from '@/api/api';
import {
  PostUsersCheckNicknameBody,
  PatchAuthOnboardingBody,
  GetUsersMeResponse,
  PatchUsersAddressBody,
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

export const getUsersProfile = async () => {
  const response = await api.get<GetUsersMeResponse>('/users/profile');
  return response.data;
};

export const patchUsersAddress = async (body: PatchUsersAddressBody) => {
  const response = await api.patch('/users/address', body);
  return response.data;
};

export const patchUsersMe = async (body: PatchUsersMeBody) => {
  const response = await api.patch('/users/me', body);
  return response.data;
};

export const patchUsersPet = async (body: FormData) => {
  const response = await formApi.patch('/users/pet', body);
  return response.data;
};

export const deleteUsersPet = async () => {
  const response = await api.delete('/users/pet');
  return response.data;
};

export const postUsersPet = async (body: FormData) => {
  const response = await formApi.post('/users/pet', body);
  return response.data;
};
