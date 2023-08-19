import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { Placeholder } from '../Placeholder/Placeholder';
import { AvatarIcon } from './AvatarIcon.js';
import classes from './ListItemsListRow2LineAvatar.module.css';

interface Props {
  className?: string;
  classes?: {
    rowBg?: string;
    root?: string;
  };
}
/* @figmaId 2:30 */
export const ListItemsListRow2LineAvatar: FC<Props> = memo(function ListItemsListRow2LineAvatar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.text}>Two-line item</div>
      <div className={classes.secondaryText}>Secondary text</div>
      <div className={classes.avatar}>
        <AvatarIcon className={classes.icon} />
      </div>
      <Placeholder className={classes.placeholder} />
    </div>
  );
});
