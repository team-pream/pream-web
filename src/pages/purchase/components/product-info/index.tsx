import { line } from '../../index.styles';
import { productInfoWrapper, innerWrapper, productImg, textWrapperStyle } from './index.styles';
import { Text } from '@/components';
const ProductInfo = () => {
  return (
    <div>
      <div css={line} />
      <div css={productInfoWrapper}>
        <Text typo="subtitle1">주문 상품</Text>
        <div css={innerWrapper}>
          <div css={productImg}></div>
          <div css={textWrapperStyle}>
            <Text typo="body4">판매명</Text>
            <Text typo="subtitle1">22,800원</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
