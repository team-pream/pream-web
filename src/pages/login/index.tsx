import { wrapper, kakaoButton, loginText, subtitle } from './index.styles';
import { KakaoLogo, Logo } from '@/assets/icons';
<<<<<<< HEAD
import { Layout, Text } from '@/components';
=======
import { Text } from '@/components';
>>>>>>> a93b084 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
import theme from '@/styles/theme';

export default function Login() {
  const handleKakaoLoginButtonClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/auth/kakao`;
  };

  return (
<<<<<<< HEAD
    <Layout>
      <div css={wrapper}>
        <Logo width="172px" />

        <Text typo="body2" color={theme.colors.black} css={subtitle}>
          당신과 댕냥이를 위한 합리적인 소비
        </Text>

        <button css={kakaoButton} onClick={handleKakaoLoginButtonClick}>
          <KakaoLogo width="20px" />
          <Text typo="body1" color={theme.colors.black}>
            카카오톡으로 시작하기
          </Text>
        </button>

        <Text typo="body6" color={theme.colors.gray300}>
          이미 계정이 있으신가요?{' '}
          <span css={loginText} onClick={handleKakaoLoginButtonClick}>
            로그인하기
          </span>
        </Text>
      </div>
    </Layout>
=======
    <div css={wrapper}>
      <Logo width="172px" />

      <Text typo="body2" color={theme.colors.black} css={subtitle}>
        당신과 댕냥이를 위한 합리적인 소비
      </Text>

      <button css={kakaoButton} onClick={handleKakaoLoginButtonClick}>
        <KakaoLogo width="20px" />
        <Text typo="body1" color={theme.colors.black}>
          카카오톡으로 시작하기
        </Text>
      </button>

      <Text typo="body6" color={theme.colors.gray300}>
        이미 계정이 있으신가요? <span css={loginText}>로그인하기</span>
      </Text>
    </div>
>>>>>>> a93b084 ([PREAM-108] 공통 UI 컴포넌트 적용 (#38))
  );
}
