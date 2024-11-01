import { AppBarBack, MypageUploadImage } from '@/assets/icons';
import { AppBar, Button, Dialog, Input, Layout, RadioGroup, Text } from '@/components';
import { useNavigate } from 'react-router-dom';
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
import { useState } from 'react';
import theme from '@/styles/theme';

export default function PetProfile() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('DOG');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const data = {
    name: null,
  }; //추후 api 연동 후 삭제

  const PET_TYPE_OPTION = [
    {
      value: 'DOG',
      node: (
        <Button variant="capsule" status={selected === 'DOG' ? 'active' : 'disabled'}>
          강아지
        </Button>
      ),
    },
    {
      value: 'CAT',
      node: (
        <Button variant="capsule" status={selected === 'CAT' ? 'active' : 'disabled'}>
          고양이
        </Button>
      ),
    },
  ];

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="17px"
            cursor="pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div css={profileEditWrapper}>
        <div>
          {!data || !data?.name ? (
            <Text typo="title1">댕냥이 등록</Text>
          ) : (
            <Text typo="title1">댕냥이 정보 수정</Text>
          )}
          <hr css={hr} />
        </div>
        <div css={profileImageWrapper}>
          <img src="/images/petprofile.png" alt="profile" css={imageIcon} />
          <div css={uploadIconWrapper}>
            <MypageUploadImage css={uploadIcon} />
          </div>
        </div>
        <div css={radioStyle}>
          <RadioGroup
            name="petType"
            options={PET_TYPE_OPTION}
            selectedValue="DOG"
            onChange={(value: string) => {
              setSelected(value);
            }}
            style={{ gap: '12px' }}
          ></RadioGroup>
        </div>
        <div css={formStyle}>
          <Input label="이름" placeholder="반려동물의 이름을 입력해주세요"></Input>
        </div>
      </div>
      <div css={buttonWrapper}>
        {!data || !data?.name ? (
          <>
            <div css={fixedButtonWrapper}>
              <Button size="xl">등록하기</Button>
            </div>
          </>
        ) : (
          <>
            <div css={fixedButtonWrapper}>
              <Button size="xl">수정하기</Button>
            </div>
            <div onClick={openDialog} css={DeleteButton}>
              <Text typo="subtitle2" color={theme.colors.gray300}>
                삭제하기
              </Text>
              {isDialogOpen && (
                <Dialog
                  title="프로필 삭제"
                  description="프로필을 삭제하시겠습니까?"
                  primaryActionLabel="Save"
                  secondaryActionLabel="Cancle"
                  onPrimaryAction={() => {
                    console.log('click');
                  }}
                  onSecondaryAction={closeDialog}
                />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
