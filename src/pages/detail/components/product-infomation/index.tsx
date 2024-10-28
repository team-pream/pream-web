import React from 'react';
import option from '@/assets/icons/option.svg';
import {
  productInfoWrapper,
  titleWrapper,
  title,
  titleTop,
  optionIcon,
  titleBottom,
  infoWrapper,
  timeInfo,
  infoTitle,
  infoValue,
} from './index.style';

interface ProductInfoProps {
  onOptionClick: () => void;
  product: {
    name: string;
    price: number;
    status: string;
    condition: string;
    images: string[];
    description: string;
    seller: {
      id: string;
      nickname: string;
    };
    likesCount: number;
    isLiked: boolean;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ onOptionClick, product }) => (
  <div css={productInfoWrapper}>
    <div css={titleWrapper}>
      <div css={titleTop}>
        <div css={title}>{product.name}</div> {/* 상품 이름 출력 */}
        <img onClick={onOptionClick} src={option} css={optionIcon} />
      </div>
      <div css={titleBottom}>{product.price.toLocaleString()}원</div> {/* 가격 출력 */}
    </div>
    <div css={infoWrapper}>
      <InfoRow title="판매자" value={product.seller.nickname} /> {/* 판매자 닉네임 출력 */}
      <InfoRow title="상태" value={product.condition} /> {/* 상태 출력 */}
      <InfoRow title="오픈채팅" value="https://open.kakao.com/o/sn7a8Y" />
      <div css={timeInfo}>
        <span>10분전</span>
        <span css={{ margin: '10px', fontSize: '8px' }}>•</span>
        <span>찜 {product.likesCount}</span> {/* 찜 개수 출력 */}
      </div>
    </div>
    <div css={{ width: '100%', borderBottom: '4px solid #F6F6F6' }} />
    <div css={titleWrapper}>
      <div css={explainTitle}>상세 정보</div>
      <div css={explainProduct}>
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
      </div>
    </div>
  </div>
);

const InfoRow: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
    <div css={infoTitle}>{title}</div>
    <div css={infoValue}>{value}</div>
  </div>
);

export default ProductInfo;
