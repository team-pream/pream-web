import { GetProductsParamType } from '@/types';
import { api } from '@/api/api';
import { ProductStatus, ProductCondition, Category, Seller } from '@/types';
export interface Product {
  id: number;
  title: string;
  price: number;
  status: ProductStatus;
  condition: ProductCondition;
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
  if (productData.status === 'AVAILABLE') {
    productData.status = '예약중';
  }
  return response.data;
};
