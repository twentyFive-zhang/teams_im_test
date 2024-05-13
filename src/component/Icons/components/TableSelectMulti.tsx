import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableSelectMultiSvg } from '../svg/TableSelectMulti.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableSelectMulti = (props: IProps) => {
  return <Icon component={TableSelectMultiSvg} {...props}></Icon>;
};
export default memo(TableSelectMulti) as typeof TableSelectMulti;
