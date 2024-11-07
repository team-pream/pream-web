import { Button, Layout, Text } from '@/components';
import { iconWrapper, textWrapper, wrapper } from './index.styles';
import theme from '@/styles/theme';
import SvgNotFound from '@/assets/icons/NotFound';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants/routes';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div css={wrapper}>
        <SvgNotFound css={iconWrapper} />
        <div css={textWrapper}>
          <Text typo="title1">페이지를 찾지 못했어요</Text>
          <Text typo="body4" color={theme.colors.gray300}>
            페이지 주소가 정확한지 확인해주세요
          </Text>
        </div>
        <Button
          size="s"
          onClick={() => {
            navigate(ROUTE_PATHS.MAIN);
          }}
        >
          메인으로
        </Button>
      </div>
    </Layout>
  );
}
