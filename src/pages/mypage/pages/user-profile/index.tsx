import { AppBar, Layout, Text, Input, Button } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import {
  useGetUsersMeQuery,
  usePatchUsersMeMutation,
  usePostUsersCheckNicknameMutation,
} from '@/queries/users';
import { useState } from 'react';
import {
  fixBox,
  fixContainer,
  fixInfo,
  line,
  titleContainer,
  fixedButtonWrapper,
  placeholderStyle,
} from './index.styles';
import theme from '@/styles/theme';

export default function UserProfile() {
  const navigate = useNavigate();
  const { data } = useGetUsersMeQuery();

  const [nickname, setNickname] = useState(data?.nickname || '');
  const [phone, setPhone] = useState(data?.phone || '');
  const [bankAccount, setBankAccount] = useState(
    data?.bankAccount ? `${data.bankAccount.bank} ${data.bankAccount.accountNumber}` : ''
  );
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean | null>(null);

  const { mutate: patchUsersMe } = usePatchUsersMeMutation(() => {
    alert('프로필이 성공적으로 수정되었습니다.');
    navigate('/');
  });

  const { mutate: checkNicknameMutation } = usePostUsersCheckNicknameMutation(() => {
    setIsNicknameAvailable(true);
  });

  const checkNickname = () => {
    checkNicknameMutation(
      { nickname },
      {
        onError: () => {
          setIsNicknameAvailable(false);
        },
      }
    );
  };

  const handleSubmit = () => {
    const [bank, accountNumber] = bankAccount.split(' ');
    patchUsersMe({ nickname, phone, bankAccount: { bank, accountNumber } });
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
      <div css={titleContainer}>
        <Text typo="title1" color={theme.colors.black}>
          프로필 수정
        </Text>
      </div>
      <hr css={line} />
      <div css={fixContainer}>
        <div css={fixBox}>
          <Text typo="subtitle2" color={theme.colors.black}>
            이름
          </Text>
          <div css={fixInfo}>
            <Text typo="subtitle1" color={theme.colors.gray300}>
              {data?.username}
            </Text>
          </div>
        </div>
        <div css={fixBox}>
          <Text typo="subtitle2" color={theme.colors.black}>
            이메일
          </Text>
          <div css={fixInfo}>
            <Text typo="subtitle1" color={theme.colors.gray300}>
              {data?.email}
            </Text>
          </div>
        </div>
        <Input
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          css={placeholderStyle}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          confirmMessage={isNicknameAvailable === true ? '사용 가능한 닉네임입니다' : ''}
          errorMessage={isNicknameAvailable === false ? '이미 존재하는 닉네임입니다' : ''}
          suffix={
            <Button size="xs" onClick={checkNickname}>
              중복확인
            </Button>
          }
        />
        <Input
          type="text"
          label="휴대폰번호"
          placeholder="휴대폰번호를 입력해주세요"
          css={placeholderStyle}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="text"
          label="판매 정산 계좌"
          placeholder="은행명과 계좌번호를 입력해주세요 (예: 우리은행 1234567890)"
          css={placeholderStyle}
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />
      </div>
      <div css={fixedButtonWrapper}>
        <Button size="l" onClick={handleSubmit}>
          수정하기
        </Button>
      </div>
    </Layout>
  );
}
