import React, { forwardRef, InputHTMLAttributes, useRef } from 'react';
import { input, wrapper, label as labelCss, error } from './index.styles';
import { Text } from '@/components/text';
import theme from '@/styles/theme';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: {
    prefix?: React.ReactElement;
    suffix?: React.ReactElement;
  };
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({
    type = 'text',
    label,
    disabled,
    spellCheck = false,
    autoComplete = 'off',
    icon,
    errorMessage,
    ...rest
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div css={wrapper}>
        {label && (
          <Text typo="subtitle2" css={labelCss}>
            {label}
          </Text>
        )}

        <div
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
        >
          {icon && icon.prefix}
          <input
            ref={inputRef}
            type={type}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            disabled={disabled}
            css={input({ errorMessage })}
            {...rest}
          />
          {icon && icon.suffix}
        </div>

        {errorMessage && (
          <div css={error}>
            <Text typo="body6" color={theme.colors.red100}>
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
