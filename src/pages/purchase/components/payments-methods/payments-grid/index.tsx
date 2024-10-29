import { miniButton, buttonWrapper } from './index.styles';
interface PaymentsMethodProps {
  id: number;
  name: string;
}

const paymentsMethods: PaymentsMethodProps[] = [
  { id: 1, name: '계좌이체' },
  { id: 2, name: '가상계좌' },
  { id: 3, name: '휴대폰' },
  { id: 4, name: '네이버페이' },
  { id: 5, name: '카카오페이' },
  { id: 6, name: '토스페이' },
];
const PaymentButtonGrid: React.FC = () => {
  return (
    <div css={buttonWrapper}>
      {paymentsMethods.map((method) => (
        <div css={miniButton}>{method.name}</div>
      ))}
      <div></div>
    </div>
  );
};
export default PaymentButtonGrid;
