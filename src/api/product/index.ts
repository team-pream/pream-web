import { api, formApi } from '@/api/api';
import { GetProductsParamsType } from '@/types/product';

export const getProducts = async (params: GetProductsParamsType) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const postProductsUpload = async (body: FormData) => {
  const response = await formApi.post('/products/upload', body);
  return response.data;
};
