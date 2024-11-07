import type { SVGProps } from 'react';
const SvgNotFound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 85 74"
    {...props}
  >
    <path fill="url(#not_found_svg__a)" d="M0 0h85v74H0z" />
    <defs>
      <pattern id="not_found_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#not_found_svg__b" transform="matrix(.0075 0 0 .00862 -.003 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="not_found_svg__b"
        width={134}
        height={116}
      />
    </defs>
  </svg>
);
export default SvgNotFound;
