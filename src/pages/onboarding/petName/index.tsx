import { inputWrapper, textBox, fixedButtonWrapper } from './index.styles';
import { Text, Input, Button } from '@/components';
import theme from '@/styles/theme';

interface PetNameProps {
  formData: { petName: string };
  setFormData: (data: { petName: string }) => void;
  onComplete: () => void;
}

export default function PetName({ formData, setFormData, onComplete }: PetNameProps) {
  const isStep3Valid = formData.petName;

  return (
    <div css={inputWrapper}>
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
        placeholder="1~8자 이내로 작성해주세요"
        value={formData.petName}
        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
      ></Input>
      <div css={fixedButtonWrapper}>
        <Button
          size="l"
          status={isStep3Valid ? 'active' : 'disabled'}
          onClick={onComplete}
          disabled={!isStep3Valid}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
