import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgFabPlus = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke={props.color ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 8h14M8 1v14"
    />
  </svg>
);
export default SvgFabPlus;
