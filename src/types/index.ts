export interface GetProductsParamType {
  category?: number;
  status?: number;
}

export interface ProductType {
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
