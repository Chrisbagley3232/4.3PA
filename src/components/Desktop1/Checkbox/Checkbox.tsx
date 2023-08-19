import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PrimaryColor } from '../PrimaryColor/PrimaryColor';
import classes from './Checkbox.module.css';
import { OffIcon } from './OffIcon.js';

interface Props {
  className?: string;
  classes?: {
    bounds?: string;
    root?: string;
    color?: string;
  };
  hide?: {
    off?: boolean;
    on?: boolean;
  };
}
/* @figmaId 2:40 */
export const Checkbox: FC<Props> = memo(function Checkbox(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.off && (
        <div className={classes.off}>
          <OffIcon className={classes.icon} />
        </div>
      )}
      <PrimaryColor className={`${props.classes?.color || ''} ${classes.color}`} />
    </div>
  );
});
