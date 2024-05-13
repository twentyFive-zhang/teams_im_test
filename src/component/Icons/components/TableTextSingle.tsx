import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableTextSingleSvg } from '../svg/TableTextSingle.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableTextSingle = (props: IProps) => {
  return <Icon component={TableTextSingleSvg} {...props}></Icon>;
};
export default memo(TableTextSingle) as typeof TableTextSingle;
