// api/detail.ts
import { api } from '../api';

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

export const getProduct = async (productId: number): Promise<Product> => {
  const response = await api.get(`/products/${productId}`, {
    // headers: {
    //   Authorization: `Bearer ${AccessToken}`,
    // }, //아직 로그인과 연결안됨
  });
  return response.data;
};
