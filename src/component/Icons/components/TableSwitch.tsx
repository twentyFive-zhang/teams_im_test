import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableSwitchSvg } from '../svg/TableSwitch.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableSwitch = (props: IProps) => {
  return <Icon component={TableSwitchSvg} {...props}></Icon>;
};
export default memo(TableSwitch) as typeof TableSwitch;
