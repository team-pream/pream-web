import React from 'react';
import { wrapper, kakaoButton, existing, loginText, descText } from './index.styles';
import { KakaoLogo, Logo } from '@/assets/icons';

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const handleKakaoLoginButtonClick = () => {
    window.location.href = `${API_URL}/auth/kakao`;
  };

  return (
    <div css={wrapper}>
      <Logo width="172px" />
      <h3 css={descText}>당신과 댕냥이를 위한 합리적인 소비</h3>
      <button css={kakaoButton} onClick={handleKakaoLoginButtonClick}>
        <KakaoLogo width="20px" />
        카카오톡으로 시작하기
      </button>
      <p css={existing}>
        이미 계정이 있으신가요? <span css={loginText}>로그인하기</span>
      </p>
    </div>
  );
}

export default Login;
