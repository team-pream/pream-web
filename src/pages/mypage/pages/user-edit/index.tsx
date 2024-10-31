import { AppBarBack, MypageUploadImage } from '@/assets/icons';
import { AppBar, Button, GNB, Input, Layout, RadioGroup, Text } from '@/components';
import { useNavigate } from 'react-router-dom';
import {
  formStyle,
  imageIcon,
  profileEditWrapper,
  profileImageWrapper,
  radioStyle,
  uploadIcon,
  uploadIconWrapper,
} from './index.styles';
import { useState } from 'react';

export default function UserEdit() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('DOG');
  const PET_TYPE_OPTION = [
    {
      value: 'DOG',
      node: (
        <Button variant="capsule" size="s" status={selected === 'DOG' ? 'active' : 'disabled'}>
          강아지
        </Button>
      ),
    },
    {
      value: 'CAT',
      node: (
        <Button variant="capsule" size="s" status={selected === 'CAT' ? 'active' : 'disabled'}>
          고양이
        </Button>
      ),
    },
  ];
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
        <Text typo="title1">프로필 편집</Text>
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
          <Input label="닉네임" placeholder="사용자의 닉네임을 입력해주세요"></Input>
          <Input label="반려동물" placeholder="반려동물의 이름을 입력해주세요"></Input>
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
