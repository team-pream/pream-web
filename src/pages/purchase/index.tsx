import { AppBar } from '@/components';
import { AppBarBack } from '@/assets/icons';
import { title, line } from './index.styles';
import AddAddress from './components/address';
import ProductInfo from './components/product-info';
import PaymentMethods from './components/payments-methods';
import OrderTotal from './components/order-total';
import { Layout } from '@/components';
import { Text } from '@/components';
import { contentsWrapper } from './index.styles';

export const CARD_COMPANIES = [
  { id: 'KB', name: '국민' },
  { id: 'shinhan', name: '신한' },
  { id: 'hana', name: '하나' },
  { id: 'woori', name: '우리' },
];
const Purchase: React.FC = () => {
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" />} />
      <div css={contentsWrapper}>
        <div css={title}>
          <Text typo="title1">구매</Text>
        </div>
        <div css={line}></div>
        <AddAddress />
        <ProductInfo />
        <PaymentMethods />
        <OrderTotal />
      </div>
    </Layout>
  );
};
export default Purchase;
