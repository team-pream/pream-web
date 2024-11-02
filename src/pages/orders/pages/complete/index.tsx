import { AppBarBack, Complete } from '@/assets/icons';
import { AppBar, Button, Layout, Text } from '@/components';
import {
  blockTitle,
  completeIcon,
  confirmWrapper,
  hr,
  info,
  infoContent,
  infoTitle,
  InnerWrapper,
  orderInfoWrapper,
  paymentBlock,
  productImg,
  productInfoWrapper,
  shipBlock,
  textWrapperStyle,
  wrapper,
} from './index.styles';
import { useNavigate } from 'react-router-dom';

export default function OrderComplete() {
  const navigate = useNavigate();
  return (
    <Layout>
      <AppBar prefix={<AppBarBack height="24px" cursor="pointer" />} />
      <div css={wrapper}>
        <div css={confirmWrapper}>
          <Complete css={completeIcon} />
          <Text typo="title1">구매 완료!</Text>
          <Button
            variant="box"
            size="s"
            onClick={() => {
              navigate('/');
            }}
          >
            메인으로
          </Button>
        </div>
        <hr css={hr} />
        <div css={orderInfoWrapper}>
          <div css={productInfoWrapper}>
            <Text typo="subtitle1">주문 상품 정보</Text>
            <div css={InnerWrapper}>
              <div css={productImg}>
                <img alt="상품사진" />
              </div>
              <div css={textWrapperStyle}>
                <Text typo="body4">판매명</Text>
                <Text typo="subtitle1">22,800원</Text>
              </div>
            </div>
          </div>
          <div css={shipBlock}>
            <Text typo="subtitle1" css={blockTitle}>
              배송 정보
            </Text>
            <div css={info}>
              <div css={infoTitle}>
                <Text typo="subtitle2">받는 분</Text>
                <Text typo="subtitle2">주소</Text>
                <Text typo="subtitle2">휴대폰번호</Text>
              </div>
              <div css={infoContent}>
                <Text typo="body4">고윤정</Text>
                <Text typo="body4">서울 강남구 선릉로 428 멀티캠퍼스</Text>
                <Text typo="body4">010-0000-0000</Text>
              </div>
            </div>
          </div>
          <div css={paymentBlock}>
            <Text typo="subtitle1" css={blockTitle}>
              결제 정보
            </Text>
            <div css={info}>
              <div css={infoTitle}>
                <Text typo="subtitle2">결제 방법</Text>
                <Text typo="subtitle2">결제 금액</Text>
              </div>
              <div css={infoContent}>
                <Text typo="body4">토스페이</Text>
                <Text typo="body4">20,000원</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
