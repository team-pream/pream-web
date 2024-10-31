import { PatchUserOnboardingBody, PostCheckNicknameBody, PostUserPetBody } from '@/types/user';
import { GetProductsParamType } from '@/types/product';

export const QUERY_KEYS = {
  GET_CATEGORIES: () => ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: GetProductsParamType) => ['GET_PRODUCTS', params],
  PATCH_ONBOARDING: (body: PatchUserOnboardingBody) => ['PATCH_ONBOARDING', body],
  POST_CHECKNICKNAME: (body: PostCheckNicknameBody) => ['POST_CHECKNICKNAME', body],
  POST_PETPROFILE: (body: PostUserPetBody) => ['POST_PETPROFILE', body],
  GET_USERNAME: ['GET_USERNAME'],
} as const;
