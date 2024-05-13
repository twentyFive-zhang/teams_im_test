import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableEmailSvg } from '../svg/TableEmail.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableEmail = (props: IProps) => {
  return <Icon component={TableEmailSvg} {...props}></Icon>;
};
export default memo(TableEmail) as typeof TableEmail;
