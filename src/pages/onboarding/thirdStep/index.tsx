import {
  inputWrapper,
  inputField,
  styledLabel,
  nextButton,
  textBox,
  welcomeText,
  highlightText,
  pleaseText,
} from './index.styles';

interface ThirdStepProps {
  formData: { petName: string };
  setFormData: (data: { petName: string }) => void;
  onComplete: () => void;
}

export default function ThirdStep({ formData, setFormData, onComplete }: ThirdStepProps) {
  const isStep3Valid = formData.petName;

  return (
    <div css={inputWrapper}>
      <div>
        <div css={textBox}>
          <h1 css={welcomeText}>
            반가워요 <span css={highlightText}>임시언</span> 님!
          </h1>
          <span css={pleaseText}>정보를 입력해주세요</span>
        </div>
        <label css={styledLabel}>강아지 이름</label>
        <input
          type="text"
          css={inputField}
          placeholder="1~8자 이내로 작성해주세요"
          value={formData.petName}
          onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
        />
      </div>
      <button css={nextButton(isStep3Valid)} onClick={onComplete} disabled={!isStep3Valid}>
        다음
      </button>
    </div>
  );
}
