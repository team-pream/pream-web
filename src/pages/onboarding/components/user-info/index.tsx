import { useState } from 'react';
import { fixedButtonWrapper, textBox, wrapper } from './index.styles';
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
  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(null);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState(''); // 이메일 오류 상태 추가
  const isUserInfoValid =
    formData.email &&
    formData.nickname &&
    formData.phone &&
    nicknameAvailable &&
    !emailError &&
    !phoneError;

  const { mutate: patchUsersOnboarding } = usePatchUsersOnboardingMutation(onNext);
  const checkNicknameMutation = usePostUsersCheckNicknameMutation(() => {
    setNicknameAvailable(true);
  });

  const { data } = useGetUsersMeQuery();

  const handleNicknameCheck = async () => {
    if (!formData.nickname) return;

    try {
      await checkNicknameMutation.mutateAsync({ nickname: formData.nickname });
      setNicknameAvailable(true);
    } catch {
      setNicknameAvailable(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 유효성 검사
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 형식 검사를 위한 정규식 (010-XXXX-XXXX 형식)

    setFormData({ ...formData, phone: value });

    if (!phoneRegex.test(value)) {
      setPhoneError('휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.');
    } else {
      setPhoneError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
    } else {
      setEmailError('');
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
      <Input
        type="text"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        value={formData.email}
        onChange={handleEmailChange} // 이메일 변경 핸들러로 수정
        errorMessage={emailError} // 이메일 오류 메시지 추가
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
        confirmMessage={nicknameAvailable === true ? '사용 가능한 닉네임입니다' : ''}
        errorMessage={nicknameAvailable === false ? '이미 존재하는 닉네임입니다' : ''}
        value={formData.nickname}
        onChange={(e) => {
          setFormData({ ...formData, nickname: e.target.value });
          setNicknameAvailable(null);
        }}
      />
      <Input
        type="text"
        label="휴대폰번호"
        placeholder="휴대폰번호를 입력해주세요"
        value={formData.phone} // 변경된 값 저장
        onChange={handlePhoneChange}
        errorMessage={phoneError}
      />

      <div css={fixedButtonWrapper}>
        <Button
          size="l"
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
