import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableProgressSvg } from '../svg/TableProgress.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableProgress = (props: IProps) => {
  return <Icon component={TableProgressSvg} {...props}></Icon>;
};
export default memo(TableProgress) as typeof TableProgress;
