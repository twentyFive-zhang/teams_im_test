import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscCardSmallSvg } from '../svg/NetDiscCardSmall.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscCardSmall = (props: IProps) => {
  return <Icon component={NetDiscCardSmallSvg} {...props}></Icon>;
};
export default memo(NetDiscCardSmall) as typeof NetDiscCardSmall;
