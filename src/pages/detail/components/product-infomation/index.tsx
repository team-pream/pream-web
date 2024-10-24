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
}

const ProductInfo: React.FC<ProductInfoProps> = ({ onOptionClick }) => (
  <div css={productInfoWrapper}>
    <div css={titleWrapper}>
      <div css={titleTop}>
        <div css={title}>파는건 아니고 우리 고양이 사진보러...</div>
        <img onClick={onOptionClick} src={option} css={optionIcon} />
      </div>
      <div css={titleBottom}>99,999원</div>
    </div>
    <div css={infoWrapper}>
      <InfoRow title="판매자" value="판매자" />
      <InfoRow title="상태" value="사용감 없음" />
      <InfoRow title="오픈채팅" value="https://open.kakao.com/o/sn7a8Y" />
      <div css={timeInfo}>
        <span>10분전</span>
        <span css={{ margin: '10px', fontSize: '8px' }}>•</span>
        <span>찜 0</span>
      </div>
    </div>
    <div css={{ width: '100%', borderBottom: '4px solid #F6F6F6' }} />
    <div css={titleWrapper}>
      <div css={title}>상세설명</div>
      <div css={{ fontSize: '12px', marginTop: '28px', whiteSpace: 'pre-line' }}>
        어쩌구 저쩌구...졸려 죽겠다. 어쩌구... 낮잠 자고 싶어.. 아임 쏘 타이어드
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
