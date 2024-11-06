import { AppBarBack, MypageUploadImage } from '@/assets/icons';
import { AppBar, Button, ChipRadioGroup, Dialog, Input, Layout, Text } from '@/components';
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
  uploadIconWrapper,
} from './index.styles';
import { useState, useRef } from 'react';
import theme from '@/styles/theme';

export default function PetProfile() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { data } = useGetUsersMeQuery(true);

  const initialPetType = data?.pet?.petType || 'DOG';
  const [selectedPetType, setSelectedPetType] = useState<string>(initialPetType);
  const [petName, setPetName] = useState<string>(data?.pet?.name || '');
  const [profileImage, setProfileImage] = useState<string>(
    data?.pet?.image || '/images/petprofile.png'
  );
  const [nameError, setNameError] = useState<string>(''); // Error state for pet name
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
    deletePetProfile(); // Call delete API
  };

  const PET_TYPE_OPTION = [
    { value: 'DOG', label: '강아지' },
    { value: 'CAT', label: '고양이' },
  ];

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setTimeout(() => setIsDialogOpen(false), 0);
  };

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 20자를 초과하지 않도록 제한
    if (value.length <= 20) {
      setPetName(value);
    }

    // 유효성 검사 추가
    if (value.length < 1) {
      setNameError('이름은 1자 이상이어야 합니다.');
    } else if (value.length > 20) {
      setNameError('이름은 20자 이하이어야 합니다.');
    } else {
      setNameError(''); // 유효성 검사 통과 시 오류 메시지 초기화
    }
  };

  const handleSubmit = () => {
    const petData = {
      image: profileImage,
      name: petName,
      petType: selectedPetType as 'DOG' | 'CAT',
    };

    if (!data?.pet) {
      // Registration logic
      registerPetProfile(petData);
    } else {
      // Update logic
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
            <MypageUploadImage />
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
          <ChipRadioGroup
            items={PET_TYPE_OPTION}
            defaultValue={selectedPetType}
            onChange={(value: string | number) => setSelectedPetType(value.toString())} // number일 경우 string으로 변환
            wrap={false}
          />
        </div>
        <div css={formStyle}>
          <Input
            label="이름"
            placeholder="반려동물의 이름을 입력해주세요"
            value={petName}
            onChange={handleNameChange} // 수정된 핸들러 사용
            errorMessage={nameError} // 여기에 유효성 검사 오류 메시지를 추가
          />
        </div>
      </div>
      <div css={buttonWrapper}>
        <div css={fixedButtonWrapper}>
          <Button size="xl" onClick={handleSubmit} disabled={!!nameError}>
            {' '}
            {/* Disable if there's an error */}
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
                primaryActionLabel="삭제"
                secondaryActionLabel="취소"
                onPrimaryAction={handleDeletePetProfile}
                onSecondaryAction={closeDialog}
                type="error"
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
