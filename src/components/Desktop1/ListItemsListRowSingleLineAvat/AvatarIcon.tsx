import { memo, SVGProps } from 'react';

const AvatarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z'
      fill='black'
      fillOpacity={0.24}
    />
  </svg>
);
const Memo = memo(AvatarIcon);
export { Memo as AvatarIcon };
