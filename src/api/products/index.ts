import { ParamType } from '@/types';
import { api } from '@/api/api';

export const getProducts = async (params: ParamType) => {
  const response = await api.get('/products', { params });
  return response.data;
};
