import { line } from '../../index.styles';
import { productInfoWrapper, innerWrapper, productImg, textWrapperStyle } from './index.styles';
import { Text } from '@/components';

interface productInfoProps {
  product: {
    id: string;
    title: string;
    price: number;
    images: string;
  };
}
const ProductInfo: React.FC<productInfoProps> = ({ product }) => {
  return (
    <div>
      <div css={line} />
      <div css={productInfoWrapper}>
        <Text typo="subtitle1">주문 상품</Text>
        <div css={innerWrapper}>
          <div css={productImg}>
            <img src={product.images} />
          </div>
          <div css={textWrapperStyle}>
            <Text typo="body4">{product.title}</Text>
            <Text typo="subtitle1">{product.price.toLocaleString()}원</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
