import { Wrapper, KakaoBtn, Existing } from './index.styles';
import Logo from '@/assets/images/logo.svg';

export default function Login() {
  return (
    <div css={Wrapper}>
      <img src={Logo} />
      당신과 댕냥이를 위한 합리적인 소비
      <div css={KakaoBtn}>카카오톡으로 시작하기</div>
      <p css={Existing}>이미 계정이 있으신가요? 로그인하기</p>
    </div>
  );
}
