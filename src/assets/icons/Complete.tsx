import * as React from 'react';
import type { SVGProps } from 'react';
const SvgComplete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70" {...props}>
    <circle cx={35} cy={35} r={34.5} stroke="#72DACD" />
    <path stroke="#72DACD" strokeLinejoin="round" d="M17 32.8 30.5 46 53 24" />
  </svg>
);
export default SvgComplete;
