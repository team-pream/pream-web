import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

      if (needOnboarding === 'true') {
        navigate('/onboarding', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } else {
      console.error('토큰이 전달되지 않았습니다.');
    }
  }, [navigate]);

  return <></>;
}
