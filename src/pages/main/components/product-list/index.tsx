import { useNavigate } from 'react-router-dom';
import { Text } from '@/components';
import {
  itemList,
  item,
  imageBox,
  sampleImage,
  opacityBox,
  textBox,
  itemTitle,
} from '../../index.styles';

interface CurationData {
  id: number;
  title: string;
  price: number;
  status: string;
  images: [];
  categoryId: number;
}

interface Props {
  products: CurationData[];
  title: string;
}

export default function ProductList({ products, title }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <Text typo="subtitle1">{title}</Text>
      <div css={itemList}>
        {products?.map((product) => (
          <div key={product.id} css={item}>
            <div css={imageBox}>
              <div css={opacityBox} />
              <img src={product.images[0]} alt="itemImage" css={sampleImage} />
            </div>
            <div css={textBox} onClick={() => navigate(`/products/:${product.id}`)}>
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
