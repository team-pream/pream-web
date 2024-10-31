import { Category } from '@/types/categories';

export type ProductStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD_OUT';
export type ProductCondition = 'NEW' | 'SLIGHTLY_USED' | 'HEAVILY_USED';

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

export interface PostProductsUploadBody {
  images: File[];
  condition: ProductCondition;
  price: number;
  categoryId: number;
  title: string;
  description: string;
  contact: string;
}
