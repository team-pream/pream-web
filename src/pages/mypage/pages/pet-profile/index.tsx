import { AppBarBack, MypageUploadImage } from '@/assets/icons';
import { AppBar, Button, Dialog, Input, Layout, RadioGroup, Text } from '@/components';
import { useNavigate } from 'react-router-dom';
import {
  useGetUsersMeQuery,
  usePostUsersPetMutation,
  usePatchUsersPetMutation,
  useDeleteUsersPetMutation,
} from '@/queries/users';
import {
  buttonWrapper,
  DeleteButton,
  fixedButtonWrapper,
  formStyle,
  hr,
  imageIcon,
  profileEditWrapper,
  profileImageWrapper,
  radioStyle,
  uploadIcon,
  uploadIconWrapper,
} from './index.styles';
import { useState, useRef } from 'react';
import theme from '@/styles/theme';

export default function PetProfile() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { data } = useGetUsersMeQuery();

  const initialPetType = data?.pet?.type || 'DOG';
  const [selectedPetType, setSelectedPetType] = useState<string>(initialPetType);
  const [petName, setPetName] = useState<string>(data?.pet?.name || '');
  const [profileImage, setProfileImage] = useState<string>(
    data?.pet?.image || '/images/petprofile.png'
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: updatePetProfile } = usePatchUsersPetMutation(() => {
    navigate('/mypage', { state: { editSuccess: true } });
  });

  const { mutate: deletePetProfile } = useDeleteUsersPetMutation(() => {
    navigate('/mypage', { state: { editSuccess: true } });
  });

  const { mutate: registerPetProfile } = usePostUsersPetMutation(() => {
    navigate('/mypage', { state: { editSuccess: true } });
  });

  const handleDeletePetProfile = () => {
    deletePetProfile(); // 삭제 API 호출
  };

  const PET_TYPE_OPTION = [
    {
      value: 'DOG',
      node: (
        <Button variant="capsule" status={selectedPetType === 'DOG' ? 'active' : 'disabled'}>
          강아지
        </Button>
      ),
    },
    {
      value: 'CAT',
      node: (
        <Button variant="capsule" status={selectedPetType === 'CAT' ? 'active' : 'disabled'}>
          고양이
        </Button>
      ),
    },
  ];

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleImageClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const petData = {
      image: profileImage,
      name: petName,
      petType: selectedPetType as 'DOG' | 'CAT',
    };

    if (!data?.pet) {
      // 등록 로직
      registerPetProfile(petData);
    } else {
      // 수정 로직
      updatePetProfile(petData);
    }
  };

  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" onClick={() => navigate(-1)} />} />
      <div css={profileEditWrapper}>
        <div>
          {!data?.pet ? (
            <Text typo="title1">댕냥이 등록</Text>
          ) : (
            <Text typo="title1">댕냥이 정보 수정</Text>
          )}
          <hr css={hr} />
        </div>
        <div css={profileImageWrapper} onClick={handleImageClick}>
          <img src={profileImage} alt="profile" css={imageIcon} />
          <div css={uploadIconWrapper}>
            <MypageUploadImage css={uploadIcon} />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <div css={radioStyle}>
          <RadioGroup
            name="petType"
            options={PET_TYPE_OPTION}
            selectedValue={selectedPetType}
            onChange={(value: string) => setSelectedPetType(value)}
            style={{ gap: '12px' }}
          />
        </div>
        <div css={formStyle}>
          <Input
            label="이름"
            placeholder="반려동물의 이름을 입력해주세요"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
      </div>
      <div css={buttonWrapper}>
        <div css={fixedButtonWrapper}>
          <Button size="xl" onClick={handleSubmit}>
            {!data?.pet ? '등록하기' : '수정하기'}
          </Button>
        </div>
        {/* Conditional rendering of the Delete button */}
        {data?.pet && (
          <div onClick={openDialog} css={DeleteButton}>
            <Text typo="subtitle2" color={theme.colors.gray300}>
              삭제하기
            </Text>
            {isDialogOpen && (
              <Dialog
                title="프로필 삭제"
                description="프로필을 삭제하시겠습니까?"
                primaryActionLabel="Delete"
                secondaryActionLabel="Cancel"
                onPrimaryAction={handleDeletePetProfile}
                onSecondaryAction={closeDialog}
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
