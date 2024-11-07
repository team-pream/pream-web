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
  title,
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
import { useGetOrdersQuery } from '@/queries';

export default function PurchaseList() {
  // 각 아이템의 열림 상태를 배열로 관리
  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const { data } = useGetOrdersQuery();
  // const { mutate: postOrdersConfirm } = usePostOrdersConfirmMutation(data.);
  // const { mutateAsync: postPaymentsCancel } = usePostPaymentsCancelMutation(orderId);

  const handleArrowToggle = (id: number) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[id] = !newIsOpen[id];
      return newIsOpen;
    });
  };

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
        {data?.map((listData) => (
          <div css={itemWrapper} key={listData.id}>
            <div css={item}>
              <img src={listData.product.images} css={image} />
              <div css={content}>
                <div css={topBox}>
                  <div css={textBox} onClick={() => navigate(`/products/${listData.product.id}`)}>
                    <Text typo="body2" css={title}>
                      {listData.product.title}
                    </Text>
                    <Text typo="subtitle1" css={price}>
                      {listData.paymentAmount.toLocaleString()}원
                    </Text>
                  </div>
                  <Text typo="body1" css={date}>
                    {listData.createdAt.substring(2, 10).replace(/-/g, '.')}
                  </Text>
                </div>
                <div css={buttonContainer}>
                  <button css={button}>
                    <Text
                      typo="body3"
                      css={purchaseInfoButton}
                      onClick={() => handleArrowToggle(listData.product.id)}
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
            <div css={hiddenBlock({ isOpen: isOpen[listData.product.id] || false })}>
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
                    <Text typo="body4">{listData.receiverName}</Text>
                    <Text typo="body4">
                      {listData.shippingAddress.roadAddress}
                      {` ${listData.shippingAddress.detailAddress}`}
                    </Text>
                    <Text typo="body4">{listData.phone}</Text>
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
                    <Text typo="body4">{listData.paymentMethod}</Text>
                    <Text typo="body4">{listData.paymentAmount.toLocaleString()}원</Text>
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
