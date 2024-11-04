import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { input, wrapper, label as labelCss, infoTextWrapper, inputWrapper } from './index.styles';
import { Text } from '@/components/text';
import theme from '@/styles/theme';

export interface InputRef {
  focus: () => void;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  confirmMessage?: string | null;
  errorMessage?: string | null;
}

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      type = 'text',
      label,
      disabled,
      spellCheck = false,
      autoComplete = 'off',
      prefix,
      suffix,
      confirmMessage,
      errorMessage,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          if (inputRef.current) inputRef.current.focus();
        },
      };
    });

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
          {prefix && prefix}
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
          {suffix && suffix}
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
            <Text typo="body6" color={theme.colors.red300}>
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
