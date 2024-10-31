import { inputWrapper, fixedButtonWrapper, textBox } from './index.styles';
import { Button, Input, Text } from '@/components';
import { usePatchUserOnboardingMutation } from '@/queries/user';
import { usePostCheckNicknameMutation } from '@/queries/user';
import { PatchUserOnboardingBody } from '@/types/user';
import theme from '@/styles/theme';
import { useGetUserNameQuery } from '@/queries/user';
import { useState } from 'react';

interface UserInfoProps {
  onNext: () => void;
  setFormData: (data: PatchUserOnboardingBody) => void;
  formData: PatchUserOnboardingBody;
}

export default function UserInfo({ onNext, setFormData, formData }: UserInfoProps) {
  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(null);
  const isUserInfoValid =
    formData.email && formData.nickname && formData.phone && nicknameAvailable;

  const { mutate: patchUserOnboarding } = usePatchUserOnboardingMutation(onNext);
  const checkNicknameMutation = usePostCheckNicknameMutation(() => {
    setNicknameAvailable(true);
  });

  const { data } = useGetUserNameQuery();

  const handleNicknameCheck = async () => {
    if (!formData.nickname) return;

    try {
      await checkNicknameMutation.mutateAsync({ body: { nickname: formData.nickname } });
      setNicknameAvailable(true);
    } catch {
      setNicknameAvailable(false);
    }
  };

  const handleNextButtonClick = () => {
    if (isUserInfoValid) {
      patchUserOnboarding(formData);
    }
  };

  return (
    <div css={inputWrapper}>
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
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
