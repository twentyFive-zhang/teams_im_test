import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableTextMultiSvg } from '../svg/TableTextMulti.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableTextMulti = (props: IProps) => {
  return <Icon component={TableTextMultiSvg} {...props}></Icon>;
};
export default memo(TableTextMulti) as typeof TableTextMulti;
