import { line } from '../../index.styles';
import { totalOrderWrapper, totalTextStyle, totalTextWrapper } from './index.styles';
import { Button } from '@/components';
import { Text } from '@/components';
const OrderTotal: React.FC = () => {
  return (
    <div>
      <div css={line} />
      <div css={totalOrderWrapper}>
        <Text typo="subtitle1">최종 결제 금액</Text>
        <div css={totalTextWrapper}>
          <div css={totalTextStyle}>
            <Text typo="body5">상품 금액</Text>
            <Text typo="body5">20,000원</Text>
          </div>
          <div css={totalTextStyle}>
            <Text typo="body5">배송비</Text>
            <Text typo="body5">무료</Text>
          </div>
        </div>
        <Button size="xl">20,000원 결제하기</Button>
      </div>
    </div>
  );
};
export default OrderTotal;
