// src/api/user.ts
import { api } from '@/api/api';
import { PatchUserOnboardingBody } from '@/types';

export const patchUserOnboarding = async (body: PatchUserOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body);
  return response.data;
};
