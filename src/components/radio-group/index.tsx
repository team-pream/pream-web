import { CSSProperties, ReactNode } from 'react';
import type { SerializedStyles } from '@emotion/react';
import { input, item, wrapper } from './index.styles';

interface RadioGroupProps {
  name?: string;
  options: Array<{
    value: string;
    node: ReactNode;
  }>;
  selectedValue: string;
  onChange?: (value: string) => void;
  css?: SerializedStyles;
  style?: CSSProperties;
}

export const RadioGroup = ({
  name = 'radio-group',
  options,
  selectedValue,
  onChange,
  style,
}: RadioGroupProps) => {
  return (
    <div role="radiogroup" css={wrapper} style={style}>
      {options.map((option) => (
        <label key={option.value} onClick={() => onChange?.(option.value)} css={item}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange?.(option.value)}
            css={input}
          />
          {option.node}
        </label>
      ))}
    </div>
  );
};
