import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableButtonSvg } from '../svg/TableButton.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableButton = (props: IProps) => {
  return <Icon component={TableButtonSvg} {...props}></Icon>;
};
export default memo(TableButton) as typeof TableButton;
