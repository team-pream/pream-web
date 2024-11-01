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
import { useGetUsersMeQuery } from '@/queries/users';
import { PET_TYPE, UserInfoForm } from '../../types';

interface PetTypeProps {
  formData: UserInfoForm;
  setFormData: (data: UserInfoForm) => void;
  onNext: () => void;
}

export default function PetType({ formData, setFormData, onNext }: PetTypeProps) {
  const { data } = useGetUsersMeQuery();
  const isPetTypeValid = formData.petType !== null;

  return (
    <div css={selectContainer}>
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
      <Text typo="body4" color={theme.colors.black}>
        어떤 반려동물과 함께 하고 있나요?
      </Text>
      <div css={selectZone}>
        <div
          css={selectBox(formData.petType === PET_TYPE.DOG)}
          onClick={() => setFormData({ ...formData, petType: PET_TYPE.DOG })}
        >
          <SelectDog width="120px" /> 강아지
        </div>
        <div
          css={selectBox(formData.petType === PET_TYPE.CAT)}
          onClick={() => setFormData({ ...formData, petType: PET_TYPE.CAT })}
        >
          <SelectCat width="120px" /> 고양이
        </div>
      </div>
      <div css={fixedButtonWrapper}>
        <Button
          size="l"
          status={isPetTypeValid ? 'active' : 'disabled'}
          onClick={onNext}
          disabled={!isPetTypeValid}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
