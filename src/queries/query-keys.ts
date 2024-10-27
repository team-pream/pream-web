export const QUERY_KEYS = {
  GET_CATEGORIES: () => ['GET_CATEGORIES'],
  GET_PRODUCTS: (categoryId: number, statusId: number | null) => [
    'GET_PRODUCTS',
    categoryId,
    statusId,
  ],
} as const;
