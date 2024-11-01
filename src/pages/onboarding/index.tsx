import { useState } from 'react';
import { useUsersPetMutation } from '@/queries/users';
import { AppBarBack } from '@/assets/icons';
import { AppBar, Layout } from '@/components';
import { Completion, PetName, PetType, UserInfo } from './components';
import { progressBarContainer, progressBar, skipButton, wrapper } from './index.styles';
import { UserInfoForm } from './types';

const STEPS = {
  USER_INFO: 1,
  PET_TYPE: 2,
  PET_NAME: 3,
  COMPLETE: 4,
};

export default function Onboarding() {
  const [step, setStep] = useState(STEPS.USER_INFO);
  const [formData, setFormData] = useState<UserInfoForm>({
    email: '',
    nickname: '',
    phone: '',
    petType: null,
    petName: '',
  });

  const { mutate } = useUsersPetMutation(() => {
    setStep(STEPS.COMPLETE);
  });

  const handleNextButtonClick = () => {
    if (step === STEPS.PET_NAME && formData.petType) {
      mutate({ name: formData.petName, petType: formData.petType });
    } else {
      setStep(step + 1);
    }
  };

  const handleSkipButtonClick = () => {
    if (step === STEPS.PET_TYPE) {
      setStep(STEPS.PET_NAME);
    } else if (step === STEPS.PET_NAME) {
      setStep(STEPS.COMPLETE);
    }
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
          />
        );
      case STEPS.PET_NAME:
        return (
          <PetName
            formData={formData}
            setFormData={setFormData}
            onComplete={handleNextButtonClick}
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
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" />} />
      <section css={wrapper}>
        <div css={progressBarContainer}>
          <div css={progressBar({ step: step === STEPS.COMPLETE ? 3 : step })} />
        </div>

        {renderStep()}

        {(step === STEPS.PET_TYPE || step === STEPS.PET_NAME) && (
          <div css={skipButton} onClick={handleSkipButtonClick}>
            건너뛰기
          </div>
        )}
      </section>
    </Layout>
  );
}
