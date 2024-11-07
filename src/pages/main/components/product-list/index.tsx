import { useNavigate } from 'react-router-dom';
import { Text } from '@/components';
import {
  itemList,
  item,
  imageBox,
  image,
  opacityBox,
  textBox,
  itemTitle,
} from '../../index.styles';
import { ProductsCurationProduct } from '@/types';

interface Props {
  title: string;
  products: ProductsCurationProduct[];
}

export default function ProductList({ products, title }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <Text typo="subtitle1">{title}</Text>
      <div css={itemList}>
        {products?.map((product) => (
          <div key={product.id} css={item} onClick={() => navigate(`/products/${product.id}`)}>
            <div css={imageBox}>
              <div css={opacityBox} />
              <img src={product.images[0]} alt="itemImage" css={image} />
            </div>
            <div css={textBox}>
              <Text typo="body2" css={itemTitle}>
                {product.title}
              </Text>
              <Text typo="subtitle1">{product.price.toLocaleString()}원</Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
