import { Text } from '@/components';
import { PAYMENT_METHODS_TYPE } from '@/types/orders';
import { PAYMENT_METHODS } from '@/pages/orders/types';
import { MethodButton } from './components/method-button';
import { grid, selectBox, wrapper } from './index.styles';

interface Props {
  selectedPaymentMethod: PAYMENT_METHODS_TYPE | null;
  setSelectedPaymentMethod: (method: PAYMENT_METHODS_TYPE | null) => void;
}

export function PaymentCheckout({ selectedPaymentMethod, setSelectedPaymentMethod }: Props) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle1">결제 방법</Text>

      <div css={grid}>
        <MethodButton
          type="button"
          method={PAYMENT_METHODS.CARD}
          selected={selectedPaymentMethod}
          setSelected={setSelectedPaymentMethod}
        />

        <div css={selectBox}>
          <MethodButton
            type="button"
            method={PAYMENT_METHODS.TRANSFER}
            selected={selectedPaymentMethod}
            setSelected={setSelectedPaymentMethod}
          />
          <MethodButton
            type="button"
            method={PAYMENT_METHODS.VIRTUAL_ACCOUNT}
            selected={selectedPaymentMethod}
            setSelected={setSelectedPaymentMethod}
          />
        </div>

        <div css={selectBox}>
          <MethodButton
            type="button"
            method={PAYMENT_METHODS.MOBILE_PHONE}
            selected={selectedPaymentMethod}
            setSelected={setSelectedPaymentMethod}
          />

          <MethodButton
            type="button"
            method={PAYMENT_METHODS.CULTURE_GIFT_CERTIFICATE}
            selected={selectedPaymentMethod}
            setSelected={setSelectedPaymentMethod}
          />
          <MethodButton
            type="button"
            method={PAYMENT_METHODS.FOREIGN_EASY_PAY}
            selected={selectedPaymentMethod}
            setSelected={setSelectedPaymentMethod}
          />
        </div>
      </div>
    </div>
  );
}
