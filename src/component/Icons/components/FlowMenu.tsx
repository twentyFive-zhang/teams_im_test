import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FlowMenuSvg } from '../svg/FlowMenu.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FlowMenu = (props: IProps) => {
  return <Icon component={FlowMenuSvg} {...props}></Icon>;
};
export default memo(FlowMenu) as typeof FlowMenu;
