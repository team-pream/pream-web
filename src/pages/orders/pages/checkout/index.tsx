import { useParams, useNavigate } from 'react-router-dom';
import { AppBarBack } from '@/assets/icons';
import { Layout, AppBar, Text, Button } from '@/components';
import { useGetProductsDetailQuery, useGetUsersProfileQuery } from '@/queries';
import { OrderForm } from './components/order-form';
import { title, line, contentsWrapper, wrapper, iconWrapper, textWrapper } from './index.styles';
import SvgNotFound from '@/assets/icons/NotFound';
import { ROUTE_PATHS } from '@/constants/routes';
import theme from '@/styles/theme';

export default function Order() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const { data: user } = useGetUsersProfileQuery();
  const { data: product } = useGetProductsDetailQuery(productId!);

  if (!product || !user) {
    return (
      <Layout>
        <div css={wrapper}>
          <SvgNotFound css={iconWrapper} />
          <div css={textWrapper}>
            <Text typo="title1">로그인이 필요해요</Text>
            <Text typo="body4" color={theme.colors.gray300}>
              로그인을 해주세요
            </Text>
          </div>
          <Button
            size="s"
            onClick={() => {
              navigate(ROUTE_PATHS.LOGIN);
            }}
          >
            로그인
          </Button>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" onClick={() => navigate(-1)} />} />
      <div css={contentsWrapper}>
        <div css={title}>
          <Text typo="title1">구매</Text>
        </div>

        <div css={line} />

        <OrderForm user={user} product={product} />
      </div>
    </Layout>
  );
}
