import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFabPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#fff"
      d="M10 20q-.607 0-1.017-.411a1.38 1.38 0 0 1-.412-1.018V11.43H1.43q-.608 0-1.019-.412A1.38 1.38 0 0 1 0 10q0-.607.41-1.019.411-.41 1.019-.41H8.57V1.43q0-.608.412-1.019Q9.393 0 10 0t1.019.41q.41.411.41 1.019V8.57h7.142q.607 0 1.018.41Q20 9.393 20 10t-.411 1.017a1.38 1.38 0 0 1-1.018.412H11.43v7.142q0 .607-.41 1.018A1.38 1.38 0 0 1 10 20"
    />
  </svg>
);
export default SvgFabPlus;
