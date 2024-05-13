import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableNumberSvg } from '../svg/TableNumber.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableNumber = (props: IProps) => {
  return <Icon component={TableNumberSvg} {...props}></Icon>;
};
export default memo(TableNumber) as typeof TableNumber;
