import type { SVGProps } from 'react';
const SvgToolTip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11" {...props}>
    <circle cx={5.5} cy={5.5} r={5.5} fill="#D9D9D9" />
    <circle cx={5.5} cy={3.5} r={0.5} fill="#fff" />
    <rect width={1} height={3} x={5} y={5} fill="#fff" rx={0.5} />
  </svg>
);
export default SvgToolTip;
