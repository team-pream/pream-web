import {
  PatchAuthOnboardingBody,
  PostUsersCheckNicknameBody,
  PostUsersPetBody,
} from '@/types/users';
import { GetProductsParams } from '@/types/products';

export const QUERY_KEYS = {
  GET_CATEGORIES: ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: GetProductsParams) => ['GET_PRODUCTS', params],
  PATCH_AUTH_ONBOARDING: (body: PatchAuthOnboardingBody) => ['PATCH_AUTH_ONBOARDING', body],
  POST_USERS_CHECK_NICKNAME: (body: PostUsersCheckNicknameBody) => ['POST_CHECK_NICKNAME', body],
  POST_PETS_PROFILE: (body: PostUsersPetBody) => ['POST_PET_PROFILE', body],
  GET_USERS_ME: ['GET_USERS_ME'],
  GET_PRODUCTS_CURATION: ['GET_PRODUCTS_CURATION'],
  GET_PRODUCTS_DETAIL: (productId: string) => ['GET_PRODUCTS_DETAIL', productId],
} as const;
