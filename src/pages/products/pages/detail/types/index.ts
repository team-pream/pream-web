export interface ProductDetail {
  title: string;
  price: number;
  status: string;
  condition: string;
  images: string[];
  description: string;
  seller: {
    id: string;
    nickname: string;
  };
  likesCount: number;
  isLiked: boolean;
}