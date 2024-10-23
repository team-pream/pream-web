import { useState } from 'react';
import {
  HighlightText,
  TextBox,
  WelcomeText,
  Wrapper,
  InputWrapper,
  InputField,
  DuplicateCheckButton,
  StyledLabel,
  InputContainer,
  InputFieldWithButton,
  PleaseText,
  NextBtn,
  ProgressBarContainer,
  ProgressBar,
  SelectContainer,
  SelectBox,
} from './index.styles';

export default function OnBoarding() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div css={InputWrapper}>
            <div>
              <label css={StyledLabel}>이메일</label>
              <input type="email" css={InputField} placeholder="이메일을 입력해주세요" />
            </div>
            <div>
              <label css={StyledLabel}>닉네임</label>
              <div css={InputContainer}>
                <input type="text" css={InputFieldWithButton} placeholder="닉네임을 입력해주세요" />
                <button css={DuplicateCheckButton}>중복확인</button>
              </div>
            </div>
            <div>
              <label css={StyledLabel}>휴대폰번호</label>
              <input type="tel" css={InputField} placeholder="휴대폰번호를 입력해주세요" />
            </div>
          </div>
        );
      case 2:
        return (
          <div css={SelectContainer}>
            <div css={SelectBox}>강아지</div>
            <div css={SelectBox}>고양이</div>
          </div>
        );
      case 3:
        return (
          <div css={InputWrapper}>
            <div>
              <label css={StyledLabel}>강아지 이름</label>
              <input type="text" css={InputField} placeholder="1~8자 이내로 작성해주세요" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div css={Wrapper}>
      <div css={ProgressBarContainer}>
        <div css={ProgressBar(step)} />
      </div>

      <div css={TextBox}>
        <h1 css={WelcomeText}>
          반가워요 <span css={HighlightText}>임시언</span> 님!
        </h1>
        <span css={PleaseText}>정보를 입력해주세요</span>
      </div>

      {renderStepContent()}

      <button css={NextBtn} onClick={handleNext}>
        {step < 3 ? '다음' : '완료'}
      </button>
    </div>
  );
}
