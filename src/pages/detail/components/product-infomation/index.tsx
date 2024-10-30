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
import { Text } from '@/components';
interface ProductInfoProps {
  onOptionClick: () => void;
  product: {
    title: string;
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
        <div css={title}>{product.title}</div> {/* 상품 이름 출력 */}
        <img onClick={onOptionClick} src={option} css={optionIcon} />
      </div>
      <div css={titleBottom}>{product.price.toLocaleString()}원</div> {/* 가격 출력 */}
    </div>
    <div css={infoWrapper}>
      <InfoRow title="판매자" value={product.seller.nickname} /> {/* 판매자 닉네임 출력 */}
      <InfoRow title="상태" value={product.condition} /> {/* 상태 출력 */}
      {/* <InfoRow title="오픈채팅" value="https://open.kakao.com/o/sn7a8Y" /> */}
      <InfoRow
        title="오픈채팅"
        value={
          <a
            href="https://open.kakao.com/o/sn7a8Y"
            target="_blank"
            rel="noopener noreferrer"
            css={{ textDecoration: 'none', color: '#007bff' }}
          >
            오픈채팅방 열기
          </a>
        }
      />
      <div css={timeInfo}>
        <span>10분전</span>
        <span css={{ margin: '10px', fontSize: '8px' }}>•</span>
        <span>찜 {product.likesCount}</span> {/* 찜 개수 출력 */}
      </div>
    </div>
    <div css={{ width: '100%', borderBottom: '4px solid #F6F6F6' }} />
    <div css={titleWrapper}>
      <Text typo="subtitle1">상세 정보</Text>
      <div css={{ marginTop: '25px' }}>
        <Text typo="body2">
          {product.description.split('\\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Text>
      </div>
    </div>
  </div>
);

const InfoRow: React.FC<{ title: string; value: React.ReactNode }> = ({ title, value }) => (
  <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
    <div css={infoTitle}>{title}</div>
    <div css={infoValue}>{value}</div>
  </div>
);

export default ProductInfo;
