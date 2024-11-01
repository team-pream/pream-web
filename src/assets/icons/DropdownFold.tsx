import type { SVGProps } from 'react';
const SvgDropdownFold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m1 5 4-4 4 4"
    />
  </svg>
);
export default SvgDropdownFold;
