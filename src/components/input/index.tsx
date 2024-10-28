import React, { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import { input, wrapper, label as labelCss, infoTextWrapper, inputWrapper } from './index.styles';
import { Text } from '@/components/text';
import theme from '@/styles/theme';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: {
    prefix?: React.ReactElement;
    suffix?: React.ReactElement;
  };
  confirmMessage?: string;
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
    confirmMessage,
    errorMessage,
    ...rest
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <div css={wrapper}>
        {label && (
          <Text typo="subtitle2" css={labelCss}>
            {label}
          </Text>
        )}

        <div
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
              setIsFocused(true);
            }
          }}
          css={inputWrapper({ errorMessage, isFocused })}
        >
          {icon && icon.prefix}
          <input
            ref={inputRef}
            type={type}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            disabled={disabled}
            css={input}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
          {icon && icon.suffix}
        </div>

        {confirmMessage && (
          <div css={infoTextWrapper}>
            <Text typo="body6" color={theme.colors.green200}>
              {confirmMessage}
            </Text>
          </div>
        )}

        {errorMessage && (
          <div css={infoTextWrapper}>
            <Text typo="body6" color={theme.colors.red100}>
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
