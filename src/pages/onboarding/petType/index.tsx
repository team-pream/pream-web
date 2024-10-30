import {
  selectContainer,
  selectBox,
  fixedButtonWrapper,
  selectZone,
  textBox,
} from './index.styles';
import { SelectCat, SelectDog } from '@/assets/icons';
import { Text, Button } from '@/components';
import theme from '@/styles/theme';
import { useGetUserNameQuery } from '@/queries/user/userName'; // 추가

interface PetTypeProps {
  formData: { petType: string };
  setFormData: (data: { petType: string }) => void;
  onNext: () => void;
}

export default function PetType({ formData, setFormData, onNext }: PetTypeProps) {
  const { data } = useGetUserNameQuery(); // 데이터 가져오기
  const nickname = data.nickname;

  const isStep2Valid = formData.petType !== '';

  return (
    <div css={selectContainer}>
      <div css={textBox}>
        <Text typo="title1" color={theme.colors.black}>
          반가워요{' '}
          <Text typo="title1" color={theme.colors.green200}>
            {nickname}{' '}
          </Text>
          님!
        </Text>
        <Text typo="body4" color={theme.colors.gray300}>
          당신과 함께하는 친구가 궁금해요!
        </Text>
      </div>
      <Text typo="body4" color={theme.colors.black}>
        어떤 반려동물과 함께 하고 있나요?
      </Text>
      <div css={selectZone}>
        <div
          css={selectBox}
          onClick={() => setFormData({ ...formData, petType: 'dog' })}
          style={{ borderColor: formData.petType === 'dog' ? '#72dacd' : '' }}
        >
          <SelectDog width="120px" /> 강아지
        </div>
        <div
          css={selectBox}
          onClick={() => setFormData({ ...formData, petType: 'cat' })}
          style={{ borderColor: formData.petType === 'cat' ? '#72dacd' : '' }}
        >
          <SelectCat width="120px" /> 고양이
        </div>
      </div>
      <div css={fixedButtonWrapper}>
        <Button
          size="l"
          status={isStep2Valid ? 'active' : 'disabled'}
          onClick={onNext}
          disabled={!isStep2Valid}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
