import { typography } from '@/styles/typography';
import { line } from '../../index.styles';
import { title } from '../address/select-default/index.styles';
import { productInfoWrapper, InnerWrapper, productImg, textWrapperStyle } from './index.styles';
const ProductInfo: React.FC = () => {
  return (
    <div>
      <div css={line} />
      <div css={productInfoWrapper}>
        <div css={title}>주문 상품</div>
        <div css={InnerWrapper}>
          <div css={productImg}></div>
          <div css={textWrapperStyle}>
            <div
              css={{ fontSize: typography.body4.fontSize, fontWeight: typography.body4.fontWeight }}
            >
              판매명
            </div>
            <div
              css={{
                fontSize: typography.subtitle1.fontSize,
                fontWeight: typography.subtitle1.fontWeight,
              }}
            >
              22,800원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
