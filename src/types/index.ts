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

export interface PatchUserOnboardingBody {
  email: string;
  nickname: string;
  phone: string;
}

export interface PostCheckNicknameBody {
  nickname: string;
}

export interface PostUserPetBody {
  name?: string;
  petType?: string;
}
