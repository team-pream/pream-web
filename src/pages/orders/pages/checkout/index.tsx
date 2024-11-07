import { useParams, useNavigate } from 'react-router-dom';
import { AppBarBack } from '@/assets/icons';
import { Layout, AppBar, Text } from '@/components';
import { useGetProductsDetailQuery, useGetUsersProfileQuery } from '@/queries';
import { OrderForm } from './components/order-form';
import { title, line, contentsWrapper } from './index.styles';

export default function Order() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const { data: user } = useGetUsersProfileQuery();
  const { data: product } = useGetProductsDetailQuery(productId!);

  if (!product || !user) return <div>Loading...</div>;

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
