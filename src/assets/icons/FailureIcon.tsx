import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFailureIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70" {...props}>
    <circle cx={35} cy={35} r={34.5} stroke="#FA2626" />
    <path stroke="#FA2626" strokeLinejoin="round" d="m24 46 22-22M24 24l22 22" />
  </svg>
);
export default SvgFailureIcon;
