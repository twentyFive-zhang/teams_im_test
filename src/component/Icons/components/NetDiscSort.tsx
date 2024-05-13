import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscSortSvg } from '../svg/NetDiscSort.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscSort = (props: IProps) => {
  return <Icon component={NetDiscSortSvg} {...props}></Icon>;
};
export default memo(NetDiscSort) as typeof NetDiscSort;
