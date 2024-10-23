import React from 'react';
import { Wrapper, KakaoBtn, Existing } from './index.styles';
import Logo from '@/assets/images/logo.svg';

const API_URL = 'https://port-0-pream-server-m2kkbe2ebf996543.sel4.cloudtype.app';

const Login: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = `${API_URL}/auth/kakao `;
  };

  return (
    <div css={Wrapper}>
      <img src={Logo} alt="로고" />
      당신과 댕냥이를 위한 합리적인 소비
      <button css={KakaoBtn} onClick={handleKakaoLogin}>
        카카오톡으로 시작하기
      </button>
      <p css={Existing}>이미 계정이 있으신가요? 로그인하기</p>
    </div>
  );
};

export default Login;
