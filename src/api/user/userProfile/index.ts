import { api } from '@/api/api';
import { PatchUserOnboardingBody } from '@/types';

export const patchUserOnboarding = async (body: PatchUserOnboardingBody) => {
  const response = await api.patch('/user/onboarding', body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access')}`,
    },
  });
  return response.data;
};
