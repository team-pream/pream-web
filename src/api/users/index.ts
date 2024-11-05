import { api } from '@/api/api';
import {
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
  PatchAuthOnboardingBody,
  GetUsersMeResponse,
  PatchUsersAddressBody,
  PatchUsersMeBody,
  PatchUsersPetBody,
  PostUserPetBody,
} from '@/types/users';

export const patchUsersOnboarding = async (body: PatchAuthOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body);
  return response.data;
};

export const postUsersCheckNickname = async (body: PostUsersCheckNicknameBody) => {
  const response = await api.post('/user/check-nickname', body);
  return response.data;
};

export const getUsersMe = async () => {
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

// TODO: User와 Pet 분리
export const postUserPet = async (body: PostUserPetBody) => {
  const response = await api.post('/user/pet', body);
  return response.data;
};

export const patchUsersPet = async (body: PatchUsersPetBody) => {
  const response = await api.patch('/users/pet', body);
  return response.data;
};

export const deleteUsersPet = async () => {
  const response = await api.delete('/users/pet');
  return response.data;
};

export const postUsersPet = async (body: PostUsersPetBody) => {
  const response = await api.post('/users/pet', body);
  return response.data;
};
