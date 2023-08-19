import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _1pxDivider } from '../_1pxDivider/_1pxDivider';
import { CardBg } from '../CardBg/CardBg';
import { PrimaryColor } from '../PrimaryColor/PrimaryColor';
import { TextButton } from '../TextButton/TextButton';
import classes from './Safari.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:15 */
export const Safari: FC<Props> = memo(function Safari(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <CardBg className={classes.cardBg} />
      <PrimaryColor className={classes.imagePlaceholder} />
      <div className={classes.kangarooValleySafari}>Card title</div>
      <div className={classes.text}>
        It is a long established fact that a reader will be distracted by the readable content of a page...
      </div>
      <TextButton
        className={classes.textButton}
        text={{
          label: <div className={classes.label}>Action 2</div>,
        }}
      />
      <TextButton
        className={classes.textButton2}
        text={{
          label: <div className={classes.label2}>Action 1</div>,
        }}
      />
      <_1pxDivider className={classes._1pxDivider} />
    </div>
  );
});
