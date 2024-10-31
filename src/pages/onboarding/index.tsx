import { useState } from 'react';
import UserInfo from './user-info';
import PetType from './pet-type';
import PetName from './pet-name';
import Completion from './completion';
import { usePostPetProfileMutation } from '@/queries/user/pet-profile';
import { progressBarContainer, progressBar, skipButton } from './index.styles';
import { AppbarBack } from '@/assets/icons';
import { AppBar, Layout } from '@/components';
const STEPS = {
  USER_INFO: 1,
  PET_TYPE: 2,
  PET_NAME: 3,
  COMPLETE: 4,
};

export default function OnBoarding() {
  const [step, setStep] = useState(STEPS.USER_INFO);
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    phone: '',
    petType: '',
    petName: '',
  });

  const { mutate } = usePostPetProfileMutation(() => {
    setStep(STEPS.COMPLETE);
  });

  const handleNextButtonClick = () => {
    if (step === STEPS.PET_NAME) {
      mutate({
        body: { name: formData.petName, petType: formData.petType },
        accessToken: localStorage.getItem('access') || '',
      });
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
          <PetType formData={formData} setFormData={setFormData} onNext={handleNextButtonClick} />
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
      <AppBar prefix={<AppbarBack height="24px" cursor="pointer" />} />
      <div css={progressBarContainer}>
        <div css={progressBar(step === STEPS.COMPLETE ? 3 : step)} />
      </div>
      {renderStep()}
      {(step === STEPS.PET_TYPE || step === STEPS.PET_NAME) && (
        <div css={skipButton} onClick={handleSkipButtonClick}>
          건너뛰기
        </div>
      )}
    </Layout>
  );
}
