import { memo, SVGProps } from 'react';

const RowBoundsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 360 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.04} fillRule='evenodd' clipRule='evenodd' d='M0 0V56H360V0H0Z' fill='#1554F6' />
  </svg>
);
const Memo = memo(RowBoundsIcon);
export { Memo as RowBoundsIcon };
