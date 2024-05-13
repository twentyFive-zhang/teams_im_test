import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableLinkSvg } from '../svg/TableLink.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableLink = (props: IProps) => {
  return <Icon component={TableLinkSvg} {...props}></Icon>;
};
export default memo(TableLink) as typeof TableLink;
