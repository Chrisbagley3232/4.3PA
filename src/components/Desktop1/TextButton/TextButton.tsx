import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { PrimaryColor } from '../PrimaryColor/PrimaryColor';
import classes from './TextButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 2:5 */
export const TextButton: FC<Props> = memo(function TextButton(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>BUTTON</div>}
    </div>
  );
});
