import { useState } from 'react';
import { AppBar, Layout, Text, Input, Button, ActionSheet } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import {
  useGetUsersMeQuery,
  usePatchUsersMeMutation,
  usePostUsersCheckNicknameMutation,
} from '@/queries/users';
import {
  fixBox,
  fixContainer,
  fixInfo,
  line,
  titleContainer,
  fixedButtonWrapper,
  placeholderStyle,
  accountContainer,
} from './index.styles';
import theme from '@/styles/theme';

const ACTION_SHEET_MENUS = [
  { label: '카카오뱅크', value: '카카오뱅크' },
  { label: '토스뱅크', value: '토스뱅크' },
  { label: '국민은행', value: '국민은행' },
  { label: '하나은행', value: '하나은행' },
  { label: '농협은행', value: '농협은행' },
  { label: '우리은행', value: '우리은행' },
  { label: '기업은행', value: '기업은행' },
  { label: '케이뱅크', value: '케이뱅크' },
];

export default function UserProfile() {
  const navigate = useNavigate();
  const { data } = useGetUsersMeQuery();
  const [nickname, setNickname] = useState(data?.nickname || '');
  const [phone, setPhone] = useState(data?.phone || '');
  const [bank, setBank] = useState(data?.bankAccount?.bank || '');
  const [accountNumber, setAccountNumber] = useState(data?.bankAccount?.accountNumber || '');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [nicknameError, setNicknameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');

  const { mutate: patchUsersMe } = usePatchUsersMeMutation(() => {
    alert('프로필이 성공적으로 수정되었습니다.');
    navigate('/');
  });

  const { mutate: checkNicknameMutation } = usePostUsersCheckNicknameMutation(() => {
    setIsNicknameAvailable(true);
  });

  const checkNickname = () => {
    if (nickname.length < 2 || nickname.length > 10) {
      setNicknameError('닉네임은 2자 이상 10자 이하로 입력해주세요.');
      return;
    }
    setNicknameError('');
    checkNicknameMutation(
      { nickname },
      {
        onError: () => {
          setIsNicknameAvailable(false);
        },
      }
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    setPhone(value);
    if (!phoneRegex.test(value)) {
      setPhoneError('휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.');
    } else {
      setPhoneError('');
    }
  };

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const accountNumberRegex = /^[0-9]*$/;
    setAccountNumber(value);
    if (!accountNumberRegex.test(value)) {
      setAccountNumberError('계좌번호는 숫자만 입력 가능합니다.');
    } else {
      setAccountNumberError('');
    }
  };

  const handleCloseSheet = (selectedBank?: string) => {
    if (selectedBank) {
      setBank(selectedBank);
    }
    setIsSheetOpen(false);
  };

  const handleSubmit = () => {
    if (nicknameError || phoneError || accountNumberError) {
      alert('입력값을 확인해주세요.');
      return;
    }
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
          confirmMessage={isNicknameAvailable ? '사용 가능한 닉네임입니다' : false}
          errorMessage={isNicknameAvailable === false ? '이미 존재하는 닉네임입니다' : false}
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
          onChange={handlePhoneChange}
          errorMessage={phoneError}
        />
      </div>
      <hr css={line} />
      <div css={accountContainer}>
        <Text typo="subtitle1" color={theme.colors.black}>
          판매 정산 계좌
        </Text>
        <Input
          type="text"
          label="은행명"
          placeholder="은행을 선택해주세요"
          css={placeholderStyle}
          value={bank}
          onClick={() => setIsSheetOpen(true)}
          readOnly
        />
        <Input
          type="text"
          label="계좌번호"
          placeholder="계좌번호를 입력해주세요"
          css={placeholderStyle}
          value={accountNumber}
          onChange={handleAccountNumberChange}
          errorMessage={accountNumberError}
        />
      </div>
      <div css={fixedButtonWrapper}>
        <Button size="l" onClick={handleSubmit}>
          수정하기
        </Button>
      </div>
      {isSheetOpen && (
        <ActionSheet
          menus={ACTION_SHEET_MENUS}
          onClose={handleCloseSheet}
          onSelect={(menu) => handleCloseSheet(menu.value)}
        />
      )}
    </Layout>
  );
}
