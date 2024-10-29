import { useState } from 'react';
import { line } from '../../index.styles';
import { title } from '../address/select-default/index.styles';
import { plusSaleText, paymentsWrapper, buttonstyle, otherPaymentsWrapper } from './index.styles';
import PaymentButtonGrid from './payments-grid';
import CardCompanySelector from './cardcompany-selector';
const PaymentMethods: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('');
  const cardCompanies = [
    { id: 'KB', name: '국민' },
    { id: 'shinhan', name: '신한' },
    { id: 'hana', name: '하나' },
    { id: 'woori', name: '우리' },
  ];

  const handleCompanyChange = (id: string) => {
    setSelectedCompanyId(id);
  };
  return (
    <div>
      <div css={line} />
      <div css={paymentsWrapper}>
        <div css={title}>결제 방법</div>
        <div css={{ marginBottom: '14px' }}>
          <div css={buttonstyle}>신용 체크카드</div>
          <div css={otherPaymentsWrapper}>
            <PaymentButtonGrid />
          </div>
          <CardCompanySelector
            provider={cardCompanies}
            seletedCompanyId={selectedCompanyId}
            onCompanyChange={handleCompanyChange}
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
