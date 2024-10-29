import React, { useState } from 'react';
import { plusSaleText, paymentsWrapper, otherPaymentsWrapper } from './index.styles';
import { line, title } from '../../index.styles';

import PaymentButtonGrid from './payments-grid';
import CardCompanySelector from './cardcompany-selector';
import { activeButton, inactiveButton } from './payments-grid/index.styles';

const PaymentMethods: React.FC = () => {
  const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(null); // 결제 방법 ID 상태
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(''); // 카드사 선택 상태

  const cardCompanies = [
    { id: 'KB', name: '국민' },
    { id: 'shinhan', name: '신한' },
    { id: 'hana', name: '하나' },
    { id: 'woori', name: '우리' },
  ];

  const handlePaymentChange = (id: number) => {
    setSelectedPaymentId(id); // 결제 방법 업데이트
    setSelectedCompanyId(''); // 결제 방법 변경 시 카드사 초기화
  };

  return (
    <div>
      <div css={line} />
      <div css={paymentsWrapper}>
        <div css={title}>결제 방법</div>
        <div css={{ margin: '14px 0' }}>
          {/* 신용 체크카드 버튼 */}
          <div
            css={selectedPaymentId === 0 ? activeButton : inactiveButton}
            onClick={() => handlePaymentChange(0)}
          >
            신용 체크카드
          </div>
          <div css={otherPaymentsWrapper}>
            {/* 결제 방법 그리드 */}
            <PaymentButtonGrid
              selectedPaymentId={selectedPaymentId}
              onPaymentChange={handlePaymentChange}
            />
          </div>
          {/* 카드사 선택 드롭다운 */}
          <CardCompanySelector
            provider={cardCompanies}
            seletedCompanyId={selectedCompanyId} // 선택된 카드사 ID
            onCompanyChange={(id) => setSelectedCompanyId(id)} // 카드사 선택 업데이트
            disabled={selectedPaymentId !== 0} // 신용 체크카드가 선택되지 않으면 비활성화
          />
        </div>
        <div css={plusSaleText}>
          <div>네이버페이 • 5만원 이상 결제시 2천원 할인</div>
          <div>카카오페이 • 1천원 캐시백</div>
          <div>토스페이 • 첫 결제 3천원 캐시백</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;