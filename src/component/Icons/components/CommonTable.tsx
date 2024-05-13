import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonTableSvg } from '../svg/CommonTable.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonTable = (props: IProps) => {
  return <Icon component={CommonTableSvg} {...props}></Icon>;
};
export default memo(CommonTable) as typeof CommonTable;
