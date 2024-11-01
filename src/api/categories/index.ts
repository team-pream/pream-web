import { api } from '@/api/api';
import { GetCategoriesResponse } from '@/types';

export const getCategories = async () => {
  const response = await api.get<GetCategoriesResponse>('/categories');
  return response.data;
};
