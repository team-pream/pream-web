import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgAppbarBack = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 15" {...props}>
    <path
      fill={props.color ?? '#000'}
      d="M7.303 14.995a.68.68 0 0 1-.496-.213L.205 8.004a.73.73 0 0 1 0-1.014L6.807.21a.683.683 0 0 1 .988 0 .73.73 0 0 1 0 1.014L1.684 7.499l6.11 6.275a.73.73 0 0 1 0 1.014.7.7 0 0 1-.496.212z"
    />
  </svg>
);
export default SvgAppbarBack;
