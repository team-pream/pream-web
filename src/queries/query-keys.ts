import { ParamType } from '@/types';

export const QUERY_KEYS = {
  GET_CATEGORIES: () => ['GET_CATEGORIES'],
  GET_PRODUCTS: (params: ParamType) => ['GET_PRODUCTS', params],
} as const;
