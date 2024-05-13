import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableFileSvg } from '../svg/TableFile.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableFile = (props: IProps) => {
  return <Icon component={TableFileSvg} {...props}></Icon>;
};
export default memo(TableFile) as typeof TableFile;
