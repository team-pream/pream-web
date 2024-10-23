import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgSearch = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill={props.color ?? '#000'}
      d="M7.864 15.62C3.527 15.62 0 12.117 0 7.81S3.527 0 7.864 0s7.863 3.503 7.863 7.81-3.527 7.81-7.863 7.81m0-14.102c-3.493 0-6.335 2.823-6.335 6.292 0 3.47 2.842 6.292 6.335 6.292s6.334-2.823 6.334-6.292c0-3.47-2.841-6.292-6.334-6.292"
    />
    <path
      fill={props.color ?? '#000'}
      d="M19.237 20a.76.76 0 0 1-.543-.225l-6.42-6.382a.753.753 0 0 1 0-1.074.765.765 0 0 1 1.081 0l6.42 6.382c.3.298.3.776 0 1.074a.78.78 0 0 1-.543.225z"
    />
  </svg>
);
export default SvgSearch;
