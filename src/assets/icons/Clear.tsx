import type { SVGProps } from 'react';
const SvgClear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={8} r={8} fill="#72DACD" />
    <path stroke="#fff" strokeLinejoin="round" d="m3.765 7.53 3.176 2.823 5.294-4.706" />
  </svg>
);
export default SvgClear;
