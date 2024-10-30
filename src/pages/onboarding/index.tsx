// src/pages/onboarding/index.tsx
import { useState } from 'react';
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import ThirdStep from './thirdStep';
import CompleteStep from './completeStep';
import { usePostPetProfileMutation } from '@/queries/user/petProfile';
import {
  wrapper,
  progressBarContainer,
  progressBar,
  navBar,
  textBox,
  welcomeText,
  highlightText,
  pleaseText,
  skipButton,
} from './index.styles';
import { AppbarBack } from '@/assets/icons';

export default function OnBoarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    phone: '',
    petType: '',
    petName: '',
  });

  const { mutate } = usePostPetProfileMutation(() => {
    setStep(4);
  });

  function handleNext() {
    if (step === 3) {
      mutate({
        body: { name: formData.petName, petType: formData.petType.toUpperCase() },
        accessToken: localStorage.getItem('access') || '',
      });
    } else {
      setStep(step + 1);
    }
  }

  function handleButtonSkip() {
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstStep
            formData={{ email: formData.email, nickname: formData.nickname, phone: formData.phone }}
            setFormData={(data) => setFormData({ ...formData, ...data })}
            onNext={handleNext}
          />
        );
      case 2:
        return <SecondStep formData={formData} setFormData={setFormData} onNext={handleNext} />;
      case 3:
        return <ThirdStep formData={formData} setFormData={setFormData} onComplete={handleNext} />;
      case 4:
        return <CompleteStep />;
      default:
        return null;
    }
  };

  return (
    <div css={wrapper}>
      <div css={navBar}>
        <AppbarBack width="11px" height="24px" onClick={() => setStep(step - 1)} />
      </div>
      <div css={progressBarContainer}>
        <div css={progressBar(step === 4 ? 3 : step)} />
      </div>
      {step < 3 && (
        <div css={textBox}>
          <h1 css={welcomeText}>
            반가워요 <span css={highlightText}>임시언</span> 님!
          </h1>
          <span css={pleaseText}>정보를 입력해주세요</span>
        </div>
      )}
      {renderStep()}
      {(step === 2 || step === 3) && (
        <button css={skipButton} onClick={handleButtonSkip}>
          건너뛰기
        </button>
      )}
    </div>
  );
}
