import { line } from '../../index.styles';
import { title } from '../address/select-default/index.styles';
import { totalOrderWrapper, totalTextStyle, totalTextWrapper } from './index.styles';
import { Button } from '@/Components';
const OrderTotal: React.FC = () => {
  return (
    <div>
      <div css={line} />
      <div css={totalOrderWrapper}>
        <div css={title}>최종 결제 금액</div>
        <div css={totalTextWrapper}>
          <div css={totalTextStyle}>
            <div>상품 금액</div>
            <div>20,000원</div>
          </div>
          <div css={totalTextStyle}>
            <div>배송비</div>
            <div>무료</div>
          </div>
        </div>
        <Button size="xl">20,000원 결제하기</Button>
      </div>
    </div>
  );
};
export default OrderTotal;
