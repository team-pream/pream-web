import { ROUTE_PATHS } from '@/constants/routes';
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
        navigate(ROUTE_PATHS.ONBOARDING, { replace: true });
      } else {
        navigate(ROUTE_PATHS.MAIN, { replace: true });
      }
    } else {
      console.error('토큰이 전달되지 않았습니다.');
    }
  }, [navigate]);

  return <></>;
}
