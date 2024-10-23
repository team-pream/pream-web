import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgGnbHome = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill={props.color ?? '#000'}
      d="M19.237 10.743a.76.76 0 0 1-.543-.226L9.986 1.836l-8.68 8.653A.764.764 0 0 1 .226 9.41L9.441.216a.785.785 0 0 1 1.082 0l9.25 9.223c.301.3.301.779 0 1.078a.77.77 0 0 1-.543.226z"
    />
    <path
      fill={props.color ?? '#000'}
      d="M17.233 20H2.813a.764.764 0 0 1-.765-.762V8.039a.764.764 0 0 1 1.529 0v10.437h12.891V8.039a.764.764 0 0 1 1.529 0v11.199a.764.764 0 0 1-.764.762"
    />
    <path
      fill={props.color ?? '#000'}
      d="M11.962 20a.764.764 0 0 1-.764-.762v-5.419H8.564v5.419a.764.764 0 0 1-1.529 0v-6.18c0-.424.346-.763.764-.763h4.162c.425 0 .764.345.764.762v6.18a.764.764 0 0 1-.764.763"
    />
  </svg>
);
export default SvgGnbHome;
