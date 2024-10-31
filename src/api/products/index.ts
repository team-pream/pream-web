import { GetProductsParamType } from '@/types/product';
import { api } from '@/api/api';

export const getProducts = async (params: GetProductsParamType) => {
  const response = await api.get('/products', { params });
  return response.data;
};
