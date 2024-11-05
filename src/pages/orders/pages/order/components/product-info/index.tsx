import { Text } from '@/components';
import { line } from '../../index.styles';
import { productInfoWrapper, innerWrapper, productImg, textWrapperStyle } from './index.styles';

interface productInfoProps {
  product: {
    id: string;
    title: string;
    price: number;
    images: string;
  };
}
export default function ProductInfo({ product }: productInfoProps) {
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
}
