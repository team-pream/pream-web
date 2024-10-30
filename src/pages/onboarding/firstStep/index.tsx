import { useState, useEffect } from 'react';
import {
  inputWrapper,
  inputField,
  duplicateCheckButton,
  styledLabel,
  inputContainer,
  nextButton,
} from './index.styles';
import { Button } from '@/components';
import { usePatchOnboardingMutation } from '@/queries/user/userProfile';
import { usePostCheckNicknameMutation } from '@/queries/user/checkNickname';
import { OnboardingRequestBody, CheckNicknameRequestBody } from '@/types';

interface FirstStepProps {
  onNext: () => void;
  setFormData: (data: OnboardingRequestBody) => void;
  formData: OnboardingRequestBody;
}

export default function FirstStep({ onNext, setFormData, formData }: FirstStepProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(null);
  const isStep1Valid = formData.email && formData.nickname && formData.phone;

  const mutation = usePatchOnboardingMutation(onNext);

  const checkNicknameMutation = usePostCheckNicknameMutation(() => {
    setNicknameAvailable(true);
  });

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleNicknameCheck = async () => {
    if (!accessToken || !formData.nickname) return;

    try {
      await checkNicknameMutation.mutateAsync({
        body: { nickname: formData.nickname } as CheckNicknameRequestBody,
        accessToken,
      });
      setNicknameAvailable(true);
      console.log('Nickname is available');
    } catch {
      setNicknameAvailable(false);
      console.error('Nickname is already taken');
    }
  };

  const handleSubmit = () => {
    if (isStep1Valid && accessToken) {
      mutation.mutate({ body: formData, accessToken });
      console.log('Form successfully submitted!');
    } else {
      console.log('Access token is missing or form data is invalid.');
    }
  };

  return (
    <div css={inputWrapper}>
      <div>
        <label css={styledLabel}>이메일</label>
        <input
          type="email"
          css={inputField}
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label css={styledLabel}>닉네임</label>
        <div css={inputContainer}>
          <input
            type="text"
            css={inputField}
            placeholder="닉네임을 입력해주세요"
            value={formData.nickname}
            onChange={(e) => {
              setFormData({ ...formData, nickname: e.target.value });
              setNicknameAvailable(null);
            }}
          />
          <button css={duplicateCheckButton} onClick={handleNicknameCheck}>
            중복확인
          </button>
        </div>
        {nicknameAvailable === true && <p>사용 가능한 닉네임입니다.</p>}
        {nicknameAvailable === false && <p>이미 존재하는 닉네임입니다.</p>}
      </div>
      <div>
        <label css={styledLabel}>휴대폰번호</label>
        <input
          type="tel"
          css={inputField}
          placeholder="휴대폰번호를 입력해주세요"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <Button
        css={[
          nextButton,
          { bottom: '23px', backgroundColor: isStep1Valid ? '#72dacd' : '#D9D9D9' },
        ]}
        onClick={handleSubmit}
        disabled={!isStep1Valid || !accessToken}
      >
        다음
      </Button>
    </div>
  );
}
