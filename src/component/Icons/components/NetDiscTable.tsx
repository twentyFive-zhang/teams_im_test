import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscTableSvg } from '../svg/NetDiscTable.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscTable = (props: IProps) => {
  return <Icon component={NetDiscTableSvg} {...props}></Icon>;
};
export default memo(NetDiscTable) as typeof NetDiscTable;
