// api/detail.ts
import { api } from '..';

export interface Category {
  id: number;
  name: string;
}

export interface Seller {
  id: string;
  nickname: string;
}

export interface Product {
  id: number;
  name: string;
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

export const getProduct = async (productId: string): Promise<Product> => {
  const response = await api.get(`/products/${productId}`);
  return response.data;
};
