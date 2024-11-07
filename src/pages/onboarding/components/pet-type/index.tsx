import {
  selectBox,
  selectZone,
  textBox,
  wrapper,
  buttonWrapper,
  skipButton,
  text,
} from './index.styles';
import { SelectCat, SelectDog } from '@/assets/icons';
import { Text, Button } from '@/components';
import { useGetUsersMeQuery } from '@/queries';
import { PET_TYPE, UserInfoForm } from '@/pages/onboarding/types';
import theme from '@/styles/theme';

interface PetTypeProps {
  formData: UserInfoForm;
  setFormData: (data: UserInfoForm) => void;
  onNext: () => void;
  onSkip: () => void;
}

export default function PetType({ formData, setFormData, onNext, onSkip }: PetTypeProps) {
  const { data } = useGetUsersMeQuery({ enabled: true });
  const isPetTypeValid = formData.petType !== null;

  return (
    <div css={wrapper}>
      <div css={textBox}>
        <Text typo="title1" color={theme.colors.black}>
          반가워요{' '}
          <Text typo="title1" color={theme.colors.green200}>
            {data?.nickname}{' '}
          </Text>
          님!
        </Text>
        <Text typo="body4" color={theme.colors.gray300}>
          당신과 함께하는 친구가 궁금해요!
        </Text>
      </div>
      <Text typo="body4" color={theme.colors.black} css={text}>
        어떤 반려동물과 함께 하고 있나요?
      </Text>
      <div css={selectZone}>
        <div
          css={selectBox(formData.petType === PET_TYPE.DOG)}
          onClick={() => setFormData({ ...formData, petType: PET_TYPE.DOG })}
        >
          <SelectDog width="120px" />
          <Text typo="body1">강아지</Text>
        </div>
        <div
          css={selectBox(formData.petType === PET_TYPE.CAT)}
          onClick={() => setFormData({ ...formData, petType: PET_TYPE.CAT })}
        >
          <SelectCat width="120px" />
          <Text typo="body1">고양이</Text>
        </div>
      </div>
      <div css={buttonWrapper}>
        <Button
          size="xl"
          status={isPetTypeValid ? 'active' : 'disabled'}
          onClick={onNext}
          disabled={!isPetTypeValid}
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
