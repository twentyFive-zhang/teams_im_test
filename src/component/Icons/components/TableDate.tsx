import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableDateSvg } from '../svg/TableDate.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableDate = (props: IProps) => {
  return <Icon component={TableDateSvg} {...props}></Icon>;
};
export default memo(TableDate) as typeof TableDate;
