import { useState } from 'react';
import { usePostUsersPetMutation } from '@/queries/users';
import { AppBarBack } from '@/assets/icons';
import { AppBar, Layout } from '@/components';
import { Completion, PetName, PetType, UserInfo } from './components';
import { progressBarContainer, progressBar, wrapper } from './index.styles';
import { UserInfoForm } from './types';
import { useNavigate } from 'react-router-dom';

const STEPS = {
  USER_INFO: 1,
  PET_TYPE: 2,
  PET_NAME: 3,
  COMPLETE: 4,
};

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(STEPS.USER_INFO);
  const [formData, setFormData] = useState<UserInfoForm>({
    email: '',
    nickname: '',
    phone: '',
    petType: null,
    petName: '',
  });

  // Handler to navigate based on the step
  const handleBackNavigation = () => {
    switch (step) {
      case STEPS.PET_TYPE:
        return;
      case STEPS.PET_NAME:
        setStep(STEPS.PET_TYPE);
        break;
      case STEPS.COMPLETE:
        return;
      default:
        navigate(-1);
        return;
    }
  };
  // 버튼의 disabled 상태를 설정하는 조건
  const isBackButtonDisabled = step === STEPS.PET_TYPE || STEPS.COMPLETE;

  const { mutate } = usePostUsersPetMutation(() => {
    setStep(STEPS.COMPLETE);
  });

  const handleNextButtonClick = () => {
    if (step === STEPS.PET_NAME && formData.petType) {
      const form = new FormData();

      form.append('petName', formData.petName);
      form.append('petType', formData.petType);

      mutate(form);
    } else {
      setStep(step + 1);
    }
  };

  const handleSkipButtonClick = () => {
    setStep(STEPS.COMPLETE);
  };

  const renderStep = () => {
    switch (step) {
      case STEPS.USER_INFO:
        return (
          <UserInfo
            formData={{ email: formData.email, nickname: formData.nickname, phone: formData.phone }}
            setFormData={(data) => setFormData({ ...formData, ...data })}
            onNext={handleNextButtonClick}
          />
        );
      case STEPS.PET_TYPE:
        return (
          <PetType
            formData={formData}
            setFormData={(data) => setFormData({ ...formData, ...data })}
            onNext={handleNextButtonClick}
            onSkip={handleSkipButtonClick}
          />
        );
      case STEPS.PET_NAME:
        return (
          <PetName
            formData={formData}
            setFormData={setFormData}
            onComplete={handleNextButtonClick}
            onSkip={handleSkipButtonClick}
          />
        );
      case STEPS.COMPLETE:
        return <Completion />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor={isBackButtonDisabled ? 'not-allowed' : 'pointer'}
            onClick={handleBackNavigation}
          />
        }
      />
      <section css={wrapper}>
        <div css={progressBarContainer}>
          <div css={progressBar({ step: step === STEPS.COMPLETE ? 3 : step })} />
        </div>

        {renderStep()}
      </section>
    </Layout>
  );
}
