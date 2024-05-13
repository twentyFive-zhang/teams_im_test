import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableTagSvg } from '../svg/TableTag.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableTag = (props: IProps) => {
  return <Icon component={TableTagSvg} {...props}></Icon>;
};
export default memo(TableTag) as typeof TableTag;
