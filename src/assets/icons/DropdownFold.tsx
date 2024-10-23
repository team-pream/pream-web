import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgDropdownFold = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" {...props}>
    <path
      stroke={props.color ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m1 5 4-4 4 4"
    />
  </svg>
);
export default SvgDropdownFold;
