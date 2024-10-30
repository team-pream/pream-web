import { selectContainer, selectBox, nextButton } from './index.styles';
import { SelectCat, SelectDog } from '@/assets/icons';

interface SecondStepProps {
  formData: { petType: string };
  setFormData: (data: { petType: string }) => void;
  onNext: () => void;
}

export default function SecondStep({ formData, setFormData, onNext }: SecondStepProps) {
  const isStep2Valid = formData.petType !== '';

  return (
    <div css={selectContainer}>
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
      <button css={nextButton(isStep2Valid)} onClick={onNext} disabled={!isStep2Valid}>
        다음
      </button>
    </div>
  );
}
