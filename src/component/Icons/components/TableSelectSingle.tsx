import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableSelectSingleSvg } from '../svg/TableSelectSingle.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableSelectSingle = (props: IProps) => {
  return <Icon component={TableSelectSingleSvg} {...props}></Icon>;
};
export default memo(TableSelectSingle) as typeof TableSelectSingle;
