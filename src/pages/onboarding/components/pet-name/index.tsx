import { textBox, buttonWrapper, skipButton, wrapper } from './index.styles';
import { Text, Input, Button } from '@/components';
import theme from '@/styles/theme';
import { UserInfoForm } from '../../types';
import { ChangeEvent } from 'react';

interface PetNameProps {
  formData: UserInfoForm;
  setFormData: (data: UserInfoForm) => void;
  onComplete: () => void;
  onSkip: () => void;
}

export default function PetName({ formData, setFormData, onComplete, onSkip }: PetNameProps) {
  const isPetNameValid = formData.petName.length >= 2 && formData.petName.length <= 20;
  const handlePetNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, petName: event.target.value });
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
