import React from 'react';
import { Wrapper, KakaoBtn, Existing, LoginText, DescText } from './index.styles';
import { KakaoLogo, Logo } from '@/assets/icons';

const API_URL = import.meta.env.VITE_API_URL;

const Login: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = `${API_URL}/auth/kakao`;
  };

  return (
    <div css={Wrapper}>
      <Logo width="172px" />
      <h3 css={DescText}>당신과 댕냥이를 위한 합리적인 소비</h3>
      <button css={KakaoBtn} onClick={handleKakaoLogin}>
        <KakaoLogo width="20px" />
        카카오톡으로 시작하기
      </button>
      <p css={Existing}>
        이미 계정이 있으신가요? <span css={LoginText}>로그인하기</span>
      </p>
    </div>
  );
};

export default Login;
