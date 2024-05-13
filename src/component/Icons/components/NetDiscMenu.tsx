import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscMenuSvg } from '../svg/NetDiscMenu.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscMenu = (props: IProps) => {
  return <Icon component={NetDiscMenuSvg} {...props}></Icon>;
};
export default memo(NetDiscMenu) as typeof NetDiscMenu;
