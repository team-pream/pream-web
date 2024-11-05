import { buttonWrapper, activeButton, inactiveButton } from './index.styles';
import { Text } from '@/components';
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

interface Props {
  selectedPaymentId: number | null;
  onPaymentChange: (id: number) => void;
}

export default function PaymentButtonGrid({ selectedPaymentId, onPaymentChange }: Props) {
  return (
    <div css={buttonWrapper}>
      {paymentsMethods.map((method) => (
        <div
          key={method.id}
          css={selectedPaymentId === method.id ? activeButton : inactiveButton}
          onClick={() => onPaymentChange(method.id)}
        >
          <Text typo="body4">{method.name}</Text>
        </div>
      ))}
    </div>
  );
}
