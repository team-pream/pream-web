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
