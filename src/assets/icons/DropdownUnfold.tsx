import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDropdownUnfold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" {...props}>
    <path
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 1 5 5 1 1"
    />
  </svg>
);
export default SvgDropdownUnfold;
