import { useState } from 'react';
import {
  wrapper,
  appBar,
  mainTitleBox,
  mainTitle,
  itemWrapper,
  item,
  content,
  topBox,
  image,
  textBox,
  contentTitle,
  price,
  purchaseInfo,
  date,
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

export default function Purchase() {
  // 각 아이템의 열림 상태를 배열로 관리
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  function handleArrowToggle(index: number) {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  }

  // 더미데이터
  const items = Array.from({ length: 6 }, () => ({
    title: '아이캣유 제품',
    price: '620,000원',
    date: '24.10.24',
  }));

  const navigate = useNavigate();

  return (
    <div css={wrapper}>
      <header css={appBar}>
        <AppBarBack
          width="11"
          height="24"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/mypage')}
        />
      </header>
      <main>
        <div css={mainTitleBox}>
          <span css={mainTitle}>구매내역</span>
        </div>
        {items.map((data, index) => (
          <div css={itemWrapper} key={index}>
            <div css={item}>
              <img src="/images/sampleImage2.png" css={image} />
              <div css={content}>
                <div css={topBox}>
                  <div css={textBox} onClick={() => navigate('/products/:productId')}>
                    <span css={contentTitle}>{data.title}</span>
                    <span css={price}>{data.price}</span>
                  </div>
                  <div css={date}>{data.date}</div>
                </div>
                <button css={button}>
                  <div css={purchaseInfo} onClick={() => handleArrowToggle(index)}>
                    주문 정보 보기
                  </div>
                  <div css={purchaseInfo}>구매 확정</div>
                </button>
              </div>
            </div>
            <div css={hiddenBlock({ isOpen: isOpen[index] || false })}>
              <section css={shipBlock}>
                <div css={blockTitle}>배송 정보</div>
                <div css={info}>
                  <div css={infoTitle}>
                    <span>받는 분</span>
                    <span>주소</span>
                    <span>휴대폰번호</span>
                  </div>
                  <div css={infoContent}>
                    <span>고윤정</span>
                    <span>서울 강남구 선릉로 428 멀티캠퍼스</span>
                    <span>010-0000-0000</span>
                  </div>
                </div>
              </section>
              <section css={paymentBlock}>
                <div css={blockTitle}>결제 정보</div>
                <div css={info}>
                  <div css={infoTitle}>
                    <span>결제 방법</span>
                    <span>결제 금액</span>
                  </div>
                  <div css={infoContent}>
                    <span>토스페이먼츠</span>
                    <span>20,000원</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
