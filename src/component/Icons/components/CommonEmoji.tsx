import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonEmojiSvg } from '../svg/CommonEmoji.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonEmoji = (props: IProps) => {
  return <Icon component={CommonEmojiSvg} {...props}></Icon>;
};
export default memo(CommonEmoji) as typeof CommonEmoji;
