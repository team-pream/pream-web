import { line, totalOrderWrapper, totalTextStyle, totalTextWrapper } from './index.styles';
import { Text } from '@/components';

interface Props {
  price: number;
}
export function TotalAmount({ price }: Props) {
  return (
    <div>
      <div css={line} />
      <div css={totalOrderWrapper}>
        <Text typo="subtitle1">최종 결제 금액</Text>
        <div css={totalTextWrapper}>
          <div css={totalTextStyle}>
            <Text typo="body5">상품 금액</Text>
            <Text typo="body5">{price.toLocaleString()}원</Text>
          </div>
          <div css={totalTextStyle}>
            <Text typo="body5">배송비</Text>
            <Text typo="body5">무료</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
