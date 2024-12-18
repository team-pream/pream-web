import React from 'react';
import {
  titleWrapper,
  titleTop,
  infoWrapper,
  timeInfo,
  infoTitle,
  infoRow,
  wrapper,
  border,
  description,
} from './index.style';
import { Text } from '@/components';
import { ProductsDetailOption } from '@/assets/icons';
import { ProductDetail } from '@/pages/products/pages/detail/types';
import theme from '@/styles/theme';
import { useGetUsersProfileQuery } from '@/queries/users';
import { formatTimeDifference } from '../../utils';

interface Props {
  onOptionClick: () => void;
  product: ProductDetail;
}
const CONDITION_LABELS: { [key: string]: string } = {
  SLIGHTLY_USED: '사용감 적음',
  HEAVILY_USED: '사용감 많음',
  NEW: '새상품',
};
export default function ProductInfo({ onOptionClick, product }: Props) {
  const timeDifference = formatTimeDifference(product.createdAt);
  const { data: user } = useGetUsersProfileQuery();

  return (
    <div css={wrapper}>
      <section css={titleWrapper}>
        <div css={titleTop}>
          <Text typo="subtitle3">{product.title}</Text>
          {user?.id === product.seller.id && (
            <ProductsDetailOption
              onClick={onOptionClick}
              css={{ cursor: 'pointer', width: '24px', height: '24px' }}
            />
          )}
        </div>
        <Text typo="title1">{product.price.toLocaleString()}원</Text> {/* 가격 출력 */}
      </section>

      <section css={infoWrapper}>
        <InfoRow title="판매자" value={product.seller.nickname} /> {/* 판매자 닉네임 출력 */}
        <InfoRow title="상태" value={CONDITION_LABELS[product.condition]} /> {/* 상태 출력 */}
        <InfoRow title="연락처" value={product.seller.contact} />
        <div css={timeInfo}>
          <Text typo="body5" color={theme.colors.gray300}>
            {timeDifference}
          </Text>
        </div>
      </section>

      <div css={border} />

      <div css={titleWrapper}>
        <Text typo="subtitle1">상세 정보</Text>
        <p css={description}>
          {product.description.split('\\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

const InfoRow = ({ title, value }: { title: string; value: React.ReactNode }) => (
  <div css={infoRow}>
    <Text typo="body2" color={theme.colors.gray300} css={infoTitle}>
      {title}
    </Text>
    <Text typo="body5" color={theme.colors.black}>
      {value}
    </Text>
  </div>
);
