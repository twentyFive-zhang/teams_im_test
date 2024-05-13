import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableCreateTimeSvg } from '../svg/TableCreateTime.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableCreateTime = (props: IProps) => {
  return <Icon component={TableCreateTimeSvg} {...props}></Icon>;
};
export default memo(TableCreateTime) as typeof TableCreateTime;
