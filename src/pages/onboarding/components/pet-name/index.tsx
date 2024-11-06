import { textBox, buttonWrapper, skipButton, wrapper } from './index.styles';
import { Text, Input, Button } from '@/components';
import theme from '@/styles/theme';
import { UserInfoForm } from '../../types';
import { ChangeEvent, useState } from 'react';

interface PetNameProps {
  formData: UserInfoForm;
  setFormData: (data: UserInfoForm) => void;
  onComplete: () => void;
  onSkip: () => void;
}

export default function PetName({ formData, setFormData, onComplete, onSkip }: PetNameProps) {
  const [isPetNameValid, setIsPetNameVaild] = useState<boolean>(false);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');
  const handlePetNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 20) {
      return;
    }
    if (!value || value.length < 1) {
      setIsPetNameVaild(false);
      setNameErrorMessage('1~20자 이내로 입력해주세요');
    } else {
      setIsPetNameVaild(true);
      setNameErrorMessage('');
    }
    setFormData({ ...formData, petName: value });
  };

  return (
    <div css={wrapper}>
      <div css={textBox}>
        <Text typo="title1" color={theme.colors.green200}>
          반려동물{' '}
          <Text typo="title1" color={theme.colors.black}>
            이름을 알려주세요!
          </Text>
        </Text>
        <Text typo="body4" color={theme.colors.gray300}>
          당신과 함께하는 친구가 궁금해요!
        </Text>
      </div>
      <Input
        type="text"
        label="반려동물 이름"
        placeholder="반려동물의 이름을 입력해주세요."
        value={formData.petName}
        onChange={handlePetNameChange}
        errorMessage={nameErrorMessage}
      ></Input>
      <div css={buttonWrapper}>
        <Button
          size="xl"
          status={isPetNameValid ? 'active' : 'disabled'}
          onClick={onComplete}
          disabled={!isPetNameValid}
        >
          다음
        </Button>
        <div css={skipButton} onClick={onSkip}>
          <Text typo="body1">건너뛰기</Text>
        </div>
      </div>
    </div>
  );
}
