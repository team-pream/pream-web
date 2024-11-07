import { useState } from 'react';
import {
  mainWrapper,
  mainTitleBox,
  itemWrapper,
  item,
  content,
  topBox,
  image,
  textBox,
  price,
  purchaseInfoButton,
  purchaseButton,
  date,
  buttonContainer,
  button,
  hiddenBlock,
  shipBlock,
  blockTitle,
  infoTitle,
  info,
  infoContent,
  paymentBlock,
} from './index.style';
import { AppBarBack } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import { AppBar, Layout, Text } from '@/components';

export default function PurchaseList() {
  // 각 아이템의 열림 상태를 배열로 관리
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleArrowToggle = (index: number) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  // 더미데이터
  const items = Array.from({ length: 6 }, () => ({
    title: '아이캣유 제품',
    price: '620,000원',
    date: '24.10.24',
  }));

  const navigate = useNavigate();

  return (
    <Layout>
      <AppBar
        prefix={
          <AppBarBack
            width="11"
            height="24"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/mypage')}
          />
        }
      />
      <main css={mainWrapper}>
        <div css={mainTitleBox}>
          <Text typo="title1">구매내역</Text>
        </div>
        {items.map((data, index) => (
          <div css={itemWrapper} key={index}>
            <div css={item}>
              <img src="/images/sampleImage2.png" css={image} />
              <div css={content}>
                <div css={topBox}>
                  <div css={textBox} onClick={() => navigate('/products/:productId')}>
                    <Text typo="body2">{data.title}</Text>
                    <Text typo="subtitle1" css={price}>
                      {data.price}
                    </Text>
                  </div>
                  <Text typo="body1" css={date}>
                    {data.date}
                  </Text>
                </div>
                <div css={buttonContainer}>
                  <button css={button}>
                    <Text
                      typo="body3"
                      css={purchaseInfoButton}
                      onClick={() => handleArrowToggle(index)}
                    >
                      주문 정보 보기
                    </Text>
                  </button>
                  <button css={button}>
                    <Text typo="body3" css={purchaseButton}>
                      주문 취소
                    </Text>
                  </button>
                  <button css={button}>
                    <Text typo="body3" css={purchaseButton}>
                      구매 확정
                    </Text>
                  </button>
                </div>
              </div>
            </div>
            <div css={hiddenBlock({ isOpen: isOpen[index] || false })}>
              <section css={shipBlock}>
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
              </section>
              <section css={paymentBlock}>
                <Text typo="subtitle1" css={blockTitle}>
                  결제 정보
                </Text>
                <div css={info}>
                  <div css={infoTitle}>
                    <Text typo="subtitle2">결제 방법</Text>
                    <Text typo="subtitle2">결제 금액</Text>
                  </div>
                  <div css={infoContent}>
                    <Text typo="body4">토스페이먼츠</Text>
                    <Text typo="body4">20,000원</Text>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
