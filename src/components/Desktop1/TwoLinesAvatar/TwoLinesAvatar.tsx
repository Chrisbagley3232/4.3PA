import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ListItemsListRow2LineAvatar } from '../ListItemsListRow2LineAvatar/ListItemsListRow2LineAvatar';
import classes from './TwoLinesAvatar.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:54 */
export const TwoLinesAvatar: FC<Props> = memo(function TwoLinesAvatar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <ListItemsListRow2LineAvatar className={classes.listItemsListRow2LineAvatar} classes={{ rowBg: classes.rowBg }} />
      <ListItemsListRow2LineAvatar
        className={classes.listItemsListRow2LineAvatar2}
        classes={{ rowBg: classes.rowBg2 }}
      />
      <ListItemsListRow2LineAvatar
        className={classes.listItemsListRow2LineAvatar3}
        classes={{ rowBg: classes.rowBg3 }}
      />
    </div>
  );
});
