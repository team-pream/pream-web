import { Category } from '@/types/categories';

export interface GetProductsParams {
  category?: number;
  status?: number;
}

export interface GetProductsResponse {
  totalCount: number;
  products: ProductListProduct[];
}

export interface ProductListProduct {
  categoryId: number;
  id: number;
  description: string;
  title: string;
  images: string[];
  isLiked: boolean;
  price: number;
  sellerId: string;
  status: string;
}

export interface GetProductsCurationResponse {
  new: ProductsCurationProduct[];
  random: ProductsCurationProduct[];
  cheap: ProductsCurationProduct[];
  popular: ProductsCurationProduct[];
}

export type ProductStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD_OUT';

export interface ProductsCurationProduct {
  id: number;
  title: string;
  price: number;
  status: ProductStatus;
  images: string[];
  categoryId: number;
}

export interface GetProductsDetailResponse {
  id: number;
  title: string;
  price: number;
  status: string;
  condition: string;
  images: string[];
  description: string;
  createdAt: string;
  category: Pick<Category, 'id' | 'name'>;
  seller: {
    id: string;
    nickname: string;
  };
  likesCount: number;
  isLiked: boolean;
}