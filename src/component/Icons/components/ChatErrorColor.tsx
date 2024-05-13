import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as ChatErrorColorSvg } from '../svg/ChatErrorColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const ChatErrorColor = (props: IProps) => {
  return <Icon component={ChatErrorColorSvg} {...props}></Icon>;
};
export default memo(ChatErrorColor) as typeof ChatErrorColor;
