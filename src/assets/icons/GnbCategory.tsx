import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SvgGnbCategory = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect
      width={7.389}
      height={7.389}
      x={0.75}
      y={0.75}
      stroke={props.color ?? '#000'}
      strokeWidth={1.5}
      rx={1.25}
    />
    <rect
      width={7.389}
      height={7.389}
      x={0.75}
      y={11.861}
      stroke={props.color ?? '#000'}
      strokeWidth={1.5}
      rx={1.25}
    />
    <rect
      width={7.389}
      height={7.389}
      x={11.861}
      y={0.75}
      stroke={props.color ?? '#000'}
      strokeWidth={1.5}
      rx={1.25}
    />
    <rect
      width={7.389}
      height={7.389}
      x={11.861}
      y={11.861}
      stroke={props.color ?? '#000'}
      strokeWidth={1.5}
      rx={1.25}
    />
  </svg>
);
export default SvgGnbCategory;
