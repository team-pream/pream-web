import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './index.styles';

export default function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('accessToken');
    const refreshToken = queryParams.get('refreshToken');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    } else {
      console.error('토큰이 전달되지 않았습니다.');
    }
  }, [navigate]);

  return (
    <div css={Wrapper}>
      로그인 중임다~
      <h1>로그인 처리 중...</h1>
    </div>
  );
}
