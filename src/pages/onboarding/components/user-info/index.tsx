import { useState, ChangeEvent } from 'react';
import { buttonWrapper, formWrapper, textBox, wrapper } from './index.styles';
import { Button, Input, Text } from '@/components';
import { usePatchUsersOnboardingMutation } from '@/queries/users';
import { usePostUsersCheckNicknameMutation } from '@/queries/users';
import { PatchAuthOnboardingBody } from '@/types/users';
import { useGetUsersMeQuery } from '@/queries/users';
import theme from '@/styles/theme';

interface UserInfoProps {
  onNext: () => void;
  setFormData: (data: PatchAuthOnboardingBody) => void;
  formData: PatchAuthOnboardingBody;
}

export default function UserInfo({ onNext, setFormData, formData }: UserInfoProps) {
  //유효성 검사
  const [isValidNickname, setIsValidNickname] = useState<boolean | null>(null);
  const [isVaildPhoneNumber, setIsVaildPhoneNumber] = useState<boolean>(false);
  const [isValidEmail, setIsVaildEmail] = useState<boolean>(false);
  //에러메시지
  const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(''); // 이메일 오류 상태 추가
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState<string>('');

  const isUserInfoValid = isValidNickname && isValidEmail && isVaildPhoneNumber;

  const { mutate: patchUsersOnboarding } = usePatchUsersOnboardingMutation(onNext);
  const checkNicknameMutation = usePostUsersCheckNicknameMutation(() => {
    setIsValidNickname(true);
  });

  const { data } = useGetUsersMeQuery();

  const handleNicknameCheck = async () => {
    if (!formData.nickname) return;

    const nickname = formData.nickname.trim(); //공백 제거
    if (!nickname || nickname.length < 2 || nickname.length > 20) {
      setNicknameErrorMessage('닉네임은 최소 2자, 최대 20자로 입력해주세요.');
      setIsValidNickname(false);
      return;
    }

    try {
      await checkNicknameMutation.mutateAsync({ nickname: formData.nickname });
      setIsValidNickname(true);
    } catch {
      setNicknameErrorMessage('이미 존재하는 닉네임입니다.');
      setIsValidNickname(false);
    }
  };

  const handeleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, nickname: event.target.value });
    setIsValidNickname(null);
    setNicknameErrorMessage('');
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/[^0-9]/g, ''); // 숫자만 남기기

    // 포맷팅: 010-XXXX-XXXX 형식으로 변환
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 8) + '-' + value.slice(8, 12);
    }

    // 유효성 검사
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 형식 검사를 위한 정규식 (010-XXXX-XXXX 형식)

    setFormData({ ...formData, phone: value });

    if (!phoneRegex.test(value)) {
      setIsVaildPhoneNumber(false);
      setPhoneErrorMessage('휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.');
    } else {
      setIsVaildPhoneNumber(true);
      setPhoneErrorMessage('');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setFormData({ ...formData, email });

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsVaildEmail(false);
      setEmailErrorMessage('유효한 이메일 주소를 입력해주세요.');
    } else {
      setIsVaildEmail(true);
      setEmailErrorMessage('');
    }
  };

  const handleNextButtonClick = () => {
    if (isUserInfoValid) {
      patchUsersOnboarding(formData);
    }
  };

  return (
    <div css={wrapper}>
      <div css={textBox}>
        <Text typo="title1" color={theme.colors.black}>
          반가워요{' '}
          <Text typo="title1" color={theme.colors.green200}>
            {data?.username}{' '}
          </Text>
          님!
        </Text>
        <Text typo="body4" color={theme.colors.gray300}>
          정보를 입력해주세요
        </Text>
      </div>
      <div css={formWrapper}>
        <Input
          type="text"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={handleEmailChange} // 이메일 변경 핸들러로 수정
          errorMessage={emailErrorMessage} // 이메일 오류 메시지 추가
        />
        <Input
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          suffix={
            <Button size="xs" onClick={handleNicknameCheck}>
              중복확인
            </Button>
          }
          confirmMessage={isValidNickname ? '사용 가능한 닉네임입니다' : ''}
          errorMessage={!isValidNickname ? nicknameErrorMessage : ''}
          value={formData.nickname}
          onChange={handeleNickNameChange}
        />
        <Input
          type="text"
          label="휴대폰번호"
          placeholder="휴대폰번호를 입력해주세요"
          value={formData.phone} // 변경된 값 저장
          onChange={handlePhoneChange}
          errorMessage={phoneErrorMessage}
        />
      </div>

      <div css={buttonWrapper}>
        <Button
          size="xl"
          status={isUserInfoValid ? 'active' : 'disabled'}
          onClick={handleNextButtonClick}
          disabled={!isUserInfoValid}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
