import { forwardRef, InputHTMLAttributes } from 'react';
import { Search } from '@/assets/icons';
import { input, wrapper } from './index.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const SearchBar = forwardRef<HTMLInputElement, Props>(({ name, ...rest }: Props, ref) => {
  return (
    <div css={wrapper}>
      <input ref={ref} id={name} name={name} css={input} {...rest} />
      <Search width="20px" height="20px" cursor="pointer" />
    </div>
  );
});