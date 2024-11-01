export interface PatchUserOnboardingBody {
  email: string;
  nickname: string;
  phone: string;
}

export interface PostCheckNicknameBody {
  nickname: string;
}

export interface PostUserPetBody {
  name: string;
  petType: string;
}
