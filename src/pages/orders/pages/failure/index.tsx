import { AppBarBack, FailureIcon } from '@/assets/icons';
import { AppBar, Layout, Text } from '@/components';
import theme from '@/styles/theme';
import { failureIcon, failureWrapper, text } from './index.styles';
import { useNavigate } from 'react-router-dom';

export default function Failure() {
  const navigate = useNavigate();
  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            height="24px"
            cursor="pointer"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div css={failureWrapper}>
        <FailureIcon css={failureIcon} />
        <Text typo="title1" css={text}>
          결제 실패
        </Text>
        <Text typo="body4" color={theme.colors.gray300}>
          이전으로 돌아가서 다시 시도해주세요
        </Text>
      </div>
    </Layout>
  );
}
