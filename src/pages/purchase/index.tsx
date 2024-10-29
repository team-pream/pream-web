import { Wrapper } from '../detail/index.styles';
import { AppBar } from '@/Components';
import { AppBarBack } from '@/assets/icons';
import { title, contentsWrapper, line } from './index.styles';
import AddAddress from './components/address';
import ProductInfo from './components/product-info';
import PaymentMethods from './components/payments-methods';
import OrderTotal from './components/order-total';
const Purchase: React.FC = () => {
  return (
    <div css={Wrapper}>
      <AppBar prefix={<AppBarBack height="17px" cursor="pointer" />} />
      <div css={contentsWrapper}>
        <div css={title}>구매</div>
        <div css={line}></div>
        <AddAddress />
        <ProductInfo />
        <PaymentMethods />
        <OrderTotal />
      </div>
    </div>
  );
};
export default Purchase;
