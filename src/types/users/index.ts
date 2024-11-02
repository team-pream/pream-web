export interface PatchAuthOnboardingBody {
  email: string;
  nickname: string;
  phone: string;
}

export interface PostUsersCheckNicknameBody {
  nickname: string;
}

export interface PostUsersPetBody {
  name: string;
  petType: string;
}

export interface GetUsersMeResponse {
  id: string;
  username: string;
  nickname: string;
  phone: string;
  address: PatchUsersAddressBody;
  email: string;
  contact: string;
  pet: GetPetsResponse;
}

export interface GetPetsResponse {
  id: string;
  userId: string;
  name: string;
  image: string;
  petType: 'DOG' | 'CAT';
  createdAt: string;
  updatedAt: string;
}

export interface PatchUsersAddressBody {
  roadAddress: string;
  detailAddress: string;
}
