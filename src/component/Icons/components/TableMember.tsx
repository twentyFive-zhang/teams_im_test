import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableMemberSvg } from '../svg/TableMember.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableMember = (props: IProps) => {
  return <Icon component={TableMemberSvg} {...props}></Icon>;
};
export default memo(TableMember) as typeof TableMember;
