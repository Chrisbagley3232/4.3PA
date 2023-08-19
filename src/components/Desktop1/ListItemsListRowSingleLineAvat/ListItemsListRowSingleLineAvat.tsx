import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { Placeholder } from '../Placeholder/Placeholder';
import { AvatarIcon } from './AvatarIcon.js';
import classes from './ListItemsListRowSingleLineAvat.module.css';

interface Props {
  className?: string;
  classes?: {
    rowBounds?: string;
    root?: string;
    bounds?: string;
    checkbox?: string;
    color?: string;
  };
  swap?: {
    avatar?: ReactNode;
    rowBounds?: ReactNode;
  };
  hide?: {
    placeholder?: boolean;
    checkbox?: boolean;
    off?: boolean;
    on?: boolean;
    secondaryAction?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 2:172 */
export const ListItemsListRowSingleLineAvat: FC<Props> = memo(function ListItemsListRowSingleLineAvat(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.rowBounds || null}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Single-line item</div>}
      <div className={classes.avatar}>{props.swap?.avatar || <AvatarIcon className={classes.icon} />}</div>
      {!props.hide?.placeholder && <Placeholder className={classes.placeholder} />}
      {props.hide?.checkbox === false && (
        <Checkbox
          className={props.classes?.checkbox || ''}
          classes={{ bounds: props.classes?.bounds || '', color: props.classes?.color || '' }}
          hide={{
            off: props.hide?.off,
            on: props.hide?.on,
          }}
        />
      )}
    </div>
  );
});
