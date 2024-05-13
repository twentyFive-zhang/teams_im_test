import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as MessageTeamsColorSvg } from '../svg/MessageTeamsColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const MessageTeamsColor = (props: IProps) => {
  return <Icon component={MessageTeamsColorSvg} {...props}></Icon>;
};
export default memo(MessageTeamsColor) as typeof MessageTeamsColor;
