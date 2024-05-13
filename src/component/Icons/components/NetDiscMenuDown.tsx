import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscMenuDownSvg } from '../svg/NetDiscMenuDown.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscMenuDown = (props: IProps) => {
  return <Icon component={NetDiscMenuDownSvg} {...props}></Icon>;
};
export default memo(NetDiscMenuDown) as typeof NetDiscMenuDown;
