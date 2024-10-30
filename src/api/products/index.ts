import { GetProductsParamType } from '@/types';
import { api } from '@/api/api';

export const getProducts = async (params: GetProductsParamType) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const getCuration = async () => {
  const response = await api.get('/products/curation');
  return response.data;
};
