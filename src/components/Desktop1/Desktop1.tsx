import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AvatarIcon2 } from './AvatarIcon2.js';
import { AvatarIcon3 } from './AvatarIcon3.js';
import { AvatarIcon4 } from './AvatarIcon4.js';
import { AvatarIcon5 } from './AvatarIcon5.js';
import { AvatarIcon6 } from './AvatarIcon6.js';
import { AvatarIcon } from './AvatarIcon.js';
import classes from './Desktop1.module.css';
import { RowBoundsIcon } from './RowBoundsIcon.js';
import { Safari } from './Safari/Safari';
import { SingleLineAvatar } from './SingleLineAvatar/SingleLineAvatar';
import { TwoLinesAvatar } from './TwoLinesAvatar/TwoLinesAvatar';

interface Props {
  className?: string;
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
}
/* @figmaId 2:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Safari />
      <TwoLinesAvatar />
      <SingleLineAvatar
        className={classes.contacts}
        classes={{
          bounds: classes.bounds,
          checkbox: classes.checkbox,
          bounds2: classes.bounds2,
          checkbox2: classes.checkbox2,
          bounds3: classes.bounds3,
          color: classes.color,
          checkbox3: classes.checkbox3,
        }}
        swap={{
          avatar: <AvatarIcon className={classes.icon} />,
          avatar2: <AvatarIcon2 className={classes.icon2} />,
          rowBounds: <RowBoundsIcon className={classes.icon3} />,
          avatar3: <AvatarIcon3 className={classes.icon4} />,
        }}
        hide={{
          placeholder: true,
          checkbox: false,
          placeholder2: true,
          checkbox2: false,
          placeholder3: true,
          checkbox3: false,
          off: true,
          on: false,
        }}
        text={{
          text: <div className={classes.text}>Randy</div>,
          text2: <div className={classes.text2}>John</div>,
          text3: <div className={classes.text3}>Erika</div>,
        }}
      />
      <SingleLineAvatar
        className={classes.connectionSettings}
        swap={{
          avatar: <AvatarIcon4 className={classes.icon5} />,
          avatar2: <AvatarIcon5 className={classes.icon6} />,
          avatar3: <AvatarIcon6 className={classes.icon7} />,
        }}
        hide={{
          secondaryAction: true,
          secondaryAction2: true,
          secondaryAction3: true,
        }}
        text={{
          text: <div className={classes.text4}>Wi-Fi</div>,
          text2: <div className={classes.text5}>Bluetooth</div>,
          text3: <div className={classes.text6}>Data usage</div>,
        }}
      />
    </div>
  );
});
