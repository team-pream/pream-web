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
  placeholderStyle,
  accountContainer,
  mainWrapper,
  buttonWrapper,
} from './index.styles';
import theme from '@/styles/theme';

const BANKS = [
  { label: '국민은행', value: 'KB' },
  { label: '하나은행', value: 'HN' },
  { label: '신한은행', value: 'SH' },
  { label: '우리은행', value: 'WR' },
  { label: '기업은행', value: 'IB' },
  { label: '농협은행', value: 'NH' },
  { label: '신협은행', value: 'SHB' },
  { label: '부산은행', value: 'BS' },
  { label: '제주은행', value: 'JJ' },
  { label: '경남은행', value: 'GN' },
  { label: '전북은행', value: 'JB' },
  { label: '광주은행', value: 'GJ' },
  { label: '대구은행', value: 'DG' },
  { label: '수협은행', value: 'SU' },
  { label: '새마을금고', value: 'SM' },
  { label: '우체국', value: 'UC' },
  { label: '케이뱅크', value: 'KB' },
  { label: '카카오뱅크', value: 'KK' },
  { label: '토스뱅크', value: 'TS' },
];

export default function UserProfile() {
  const navigate = useNavigate();
  const { data } = useGetUsersMeQuery(true);
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
    navigate('/mypage', { state: { editSuccess: true } });
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
    setIsNicknameAvailable(null); // 중복 확인 상태 초기화
    checkNicknameMutation(
      { nickname },
      {
        onError: () => {
          setIsNicknameAvailable(false);
        },
      }
    );
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length < 2 || value.length > 20) {
      setNicknameError('닉네임은 2자 이상 20자 이하로 입력해주세요.');
    } else {
      setNicknameError('');
    }

    setNickname(value.slice(0, 20));
    setIsNicknameAvailable(null);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기

    // 010-XXXX-XXXX 형식으로 변환
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 8) + '-' + value.slice(8, 12);
    }

    // 최대 13자리로 제한 (형식 포함: 010-XXXX-XXXX)
    if (value.length > 13) {
      value = value.slice(0, 13);
    }

    setPhone(value); // 상태 업데이트

    // 유효성 검사
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 형식 검사를 위한 정규식
    if (!phoneRegex.test(value)) {
      setPhoneError('휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.');
    } else {
      setPhoneError(''); // 유효성 검사를 통과하면 오류 메시지 초기화
    }
  };

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력 값에서 숫자만 남기기
    const value = e.target.value.replace(/\D/g, '');

    // 유효성 검사
    if (value.length > 20) {
      setAccountNumberError('계좌번호는 최대 20자까지 입력 가능해요.');
    } else {
      setAccountNumberError('');
    }

    setAccountNumber(value.slice(0, 20)); // 20자까지만 허용
  };

  const handleSubmit = () => {
    if (isNicknameAvailable === null) {
      setNicknameError('중복확인을 진행해주세요.');
      return;
    }

    if (nicknameError || phoneError || accountNumberError) {
      alert('입력값을 확인해주세요.');
      return;
    }
    patchUsersMe({ nickname, phone, bankAccount: { bank, accountNumber } });
  };

  const handleBankSelect = (selectedBank: string) => {
    setBank(selectedBank);
    setIsSheetOpen(false);
  };

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor="pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div css={mainWrapper}>
        <div css={titleContainer}>
          <Text typo="title1" color={theme.colors.black}>
            프로필 수정
          </Text>
        </div>
        <hr css={line} />
        <div css={fixContainer}>
          <div css={fixBox}>
            <Text typo="subtitle3" color={theme.colors.black}>
              이름
            </Text>
            <div css={fixInfo}>
              <Text typo="subtitle1" color={theme.colors.gray300}>
                {data?.username}
              </Text>
            </div>
          </div>
          <div css={fixBox}>
            <Text typo="subtitle3" color={theme.colors.black}>
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
            onChange={handleNicknameChange}
            confirmMessage={isNicknameAvailable === true ? '사용 가능한 닉네임입니다' : undefined}
            errorMessage={
              nicknameError ||
              (isNicknameAvailable === false ? '이미 존재하는 닉네임입니다' : undefined)
            }
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

        {isSheetOpen && (
          <ActionSheet
            menus={BANKS.map((bank) => ({
              label: bank.label,
              onClick: () => handleBankSelect(bank.label),
            }))}
            onClose={() => setIsSheetOpen(false)}
          />
        )}
      </div>
      <div css={buttonWrapper}>
        <Button size="xl" onClick={handleSubmit}>
          수정하기
        </Button>
      </div>
    </Layout>
  );
}
