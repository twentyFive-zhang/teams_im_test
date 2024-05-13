import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscClearSvg } from '../svg/NetDiscClear.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscClear = (props: IProps) => {
  return <Icon component={NetDiscClearSvg} {...props}></Icon>;
};
export default memo(NetDiscClear) as typeof NetDiscClear;
