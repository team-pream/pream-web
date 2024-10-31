import { GetProductsParamType } from '@/types';
import { api } from '@/api/api';
import { Category, Seller } from '@/types';
export interface Product {
  id: number;
  title: string;
  price: number;
  status: string;
  condition: string;
  images: string[];
  description: string;
  createdAt: string;
  category: Category;
  seller: Seller;
  likesCount: number;
  isLiked: boolean;
}

export const getProducts = async (params: GetProductsParamType) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const getCuration = async () => {
  const response = await api.get('/products/curation');
  return response.data;
};
export const getProduct = async (productId: string): Promise<Product> => {
  const response = await api.get(`/products/${productId}`);
  const productData = response.data;
  if (productData.status === 'RESERVED') {
    productData.status = '예약중';
  }
  if (productData.status === 'SOLD_OUT') {
    productData.status = '판매완료';
  }
  return response.data;
};
