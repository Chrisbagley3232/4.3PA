import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ListItemsListRowSingleLineAvat } from '../ListItemsListRowSingleLineAvat/ListItemsListRowSingleLineAvat';
import classes from './SingleLineAvatar.module.css';

interface Props {
  className?: string;
  classes?: {
    bounds?: string;
    checkbox?: string;
    bounds2?: string;
    checkbox2?: string;
    bounds3?: string;
    color?: string;
    checkbox3?: string;
    root?: string;
  };
  swap?: {
    avatar?: ReactNode;
    avatar2?: ReactNode;
    rowBounds?: ReactNode;
    avatar3?: ReactNode;
  };
  hide?: {
    placeholder?: boolean;
    checkbox?: boolean;
    placeholder2?: boolean;
    checkbox2?: boolean;
    placeholder3?: boolean;
    checkbox3?: boolean;
    off?: boolean;
    on?: boolean;
    secondaryAction?: boolean;
    secondaryAction2?: boolean;
    secondaryAction3?: boolean;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
  };
}
/* @figmaId 2:168 */
export const SingleLineAvatar: FC<Props> = memo(function SingleLineAvatar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ListItemsListRowSingleLineAvat
        className={classes.listItemsListRowSingleLineAvat}
        classes={{
          rowBounds: classes.rowBounds,
          bounds: props.classes?.bounds || '',
          checkbox: props.classes?.checkbox || '',
        }}
        swap={{
          avatar: props.swap?.avatar,
        }}
        hide={{
          placeholder: props.hide?.placeholder,
          checkbox: props.hide?.checkbox,
          secondaryAction: props.hide?.secondaryAction,
        }}
        text={{
          text: props.text?.text,
        }}
      />
      <ListItemsListRowSingleLineAvat
        className={classes.listItemsListRowSingleLineAvat2}
        classes={{
          rowBounds: classes.rowBounds2,
          bounds: props.classes?.bounds2 || '',
          checkbox: props.classes?.checkbox2 || '',
        }}
        swap={{
          avatar: props.swap?.avatar2,
        }}
        hide={{
          placeholder: props.hide?.placeholder2,
          checkbox: props.hide?.checkbox2,
          secondaryAction: props.hide?.secondaryAction2,
        }}
        text={{
          text: props.text?.text2,
        }}
      />
      <ListItemsListRowSingleLineAvat
        className={classes.listItemsListRowSingleLineAvat3}
        classes={{
          rowBounds: classes.rowBounds3,
          bounds: props.classes?.bounds3 || '',
          color: props.classes?.color || '',
          checkbox: props.classes?.checkbox3 || '',
        }}
        swap={{
          rowBounds: props.swap?.rowBounds,
          avatar: props.swap?.avatar3,
        }}
        hide={{
          placeholder: props.hide?.placeholder3,
          checkbox: props.hide?.checkbox3,
          off: props.hide?.off,
          on: props.hide?.on,
          secondaryAction: props.hide?.secondaryAction3,
        }}
        text={{
          text: props.text?.text3,
        }}
      />
    </div>
  );
});
