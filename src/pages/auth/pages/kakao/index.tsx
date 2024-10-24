import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './index.styles';

export default function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('access');
    const refreshToken = queryParams.get('refresh');
    const needOnboarding = queryParams.get('needOnboarding');

    if (accessToken && refreshToken && needOnboarding) {
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
      localStorage.setItem('needOnboarding', needOnboarding);

      if (needOnboarding === 'true') {
        navigate('/onboarding');
      } else {
        navigate('/');
      }
    } else {
      console.error('토큰이 전달되지 않았습니다.');
    }
  }, [navigate]);

  return <div css={Wrapper}>로그인 중임다~</div>;
}
