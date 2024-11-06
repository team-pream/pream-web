import { ButtonHTMLAttributes } from 'react';
import { Text } from '@/components';
import { PAYMENT_METHODS_TYPE } from '@/types';
import { PAYMENT_METHODS_LABEL } from '@/pages/orders/types';
import { button } from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  method: PAYMENT_METHODS_TYPE;
  selected: PAYMENT_METHODS_TYPE | null;
  setSelected: (method: PAYMENT_METHODS_TYPE | null) => void;
}

export function MethodButton({ method, selected, setSelected, ...props }: Props) {
  return (
    <button
      id={method}
      css={button({ isActive: selected === method })}
      onClick={() => setSelected(method)}
      {...props}
    >
      <Text typo="body4">{PAYMENT_METHODS_LABEL[method]}</Text>
    </button>
  );
}
