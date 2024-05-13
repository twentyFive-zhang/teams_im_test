import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as ChatSuccessColorSvg } from '../svg/ChatSuccessColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const ChatSuccessColor = (props: IProps) => {
  return <Icon component={ChatSuccessColorSvg} {...props}></Icon>;
};
export default memo(ChatSuccessColor) as typeof ChatSuccessColor;
