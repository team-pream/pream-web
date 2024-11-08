import { useState, useEffect } from 'react';
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
import { AppBar, Layout, Text, Dialog } from '@/components';
import { useGetOrdersQuery, usePostPaymentsCancelMutation } from '@/queries';

export default function PurchaseList() {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog 열림 상태 관리
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null); // 취소할 주문 ID
  const [disabledOrders, setDisabledOrders] = useState<string[]>([]); // 취소된 주문 ID 목록

  const { data: orders } = useGetOrdersQuery();
  const { mutate: postPaymentsCancel } = usePostPaymentsCancelMutation();
  const navigate = useNavigate();

  // 페이지 로드 시 저장된 취소된 주문 상태 불러오기
  useEffect(() => {
    const cancelledOrders = JSON.parse(localStorage.getItem('cancelledOrders') || '[]');
    setDisabledOrders(cancelledOrders);
  }, []);

  // 주문 취소 버튼 클릭 시 Dialog 열기
  const handleOrderCancelClick = (orderId: string) => {
    setSelectedOrderId(orderId); // 취소할 주문 ID 설정
    setIsDialogOpen(true); // Dialog 열기
  };

  // Dialog의 '예' 버튼 클릭 시 주문 취소
  const handleDialogConfirm = () => {
    if (selectedOrderId) {
      postPaymentsCancel(
        { orderId: selectedOrderId, body: {} },
        {
          onSuccess: () => {
            // 주문 취소 후 로컬 스토리지에 취소된 주문 ID 추가
            const updatedDisabledOrders = [...disabledOrders, selectedOrderId];
            setDisabledOrders(updatedDisabledOrders);
            localStorage.setItem('cancelledOrders', JSON.stringify(updatedDisabledOrders));
          },
        }
      );
    }
    setIsDialogOpen(false); // Dialog 닫기
  };

  // Dialog의 '아니오' 버튼 클릭 시 Dialog 닫기
  const handleDialogCancel = () => {
    setIsDialogOpen(false); // Dialog 닫기
  };

  const handleArrowToggle = (id: number) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[id] = !newIsOpen[id];
      return newIsOpen;
    });
  };

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
        {orders?.map((order) => (
          <div css={itemWrapper} key={order.id}>
            <div css={item}>
              <img src={order.product.images} css={image} />
              <div css={content}>
                <div css={topBox}>
                  <div css={textBox} onClick={() => navigate(`/products/${order.product.id}`)}>
                    <Text typo="body2" css={title}>
                      {order.product.title}
                    </Text>
                    <Text typo="subtitle1" css={price}>
                      {order.paymentAmount.toLocaleString()}원
                    </Text>
                  </div>
                  <Text typo="body1" css={date}>
                    {order.createdAt.substring(2, 10).replace(/-/g, '.')}
                  </Text>
                </div>
                <div css={buttonContainer}>
                  <button css={button}>
                    <Text
                      typo="body3"
                      css={purchaseInfoButton}
                      onClick={() => handleArrowToggle(order.product.id)}
                    >
                      주문 정보 보기
                    </Text>
                  </button>
                  <button
                    css={button}
                    onClick={() => handleOrderCancelClick(order.id)}
                    disabled={disabledOrders.includes(order.id)} // 주문 취소된 경우 버튼 비활성화
                  >
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
            <div css={hiddenBlock({ isOpen: isOpen[order.product.id] || false })}>
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
                    <Text typo="body4">{order.receiverName}</Text>
                    <Text typo="body4">
                      {order.shippingAddress.roadAddress}
                      {` ${order.shippingAddress.detailAddress}`}
                    </Text>
                    <Text typo="body4">{order.phone}</Text>
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
                    <Text typo="body4">{order.paymentMethod}</Text>
                    <Text typo="body4">{order.paymentAmount.toLocaleString()}원</Text>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}

        {/* 주문 취소 확인 Dialog */}
        {isDialogOpen && (
          <Dialog
            title="정말로 취소하시겠어요?"
            description="이 작업은 되돌릴 수 없습니다."
            primaryActionLabel="예"
            secondaryActionLabel="아니오"
            onPrimaryAction={handleDialogConfirm} // '예' 버튼 클릭 시 취소
            onSecondaryAction={handleDialogCancel} // '아니오' 버튼 클릭 시 닫기
            type="error"
          />
        )}
      </main>
    </Layout>
  );
}
