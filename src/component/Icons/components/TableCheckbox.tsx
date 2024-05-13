import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableCheckboxSvg } from '../svg/TableCheckbox.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableCheckbox = (props: IProps) => {
  return <Icon component={TableCheckboxSvg} {...props}></Icon>;
};
export default memo(TableCheckbox) as typeof TableCheckbox;
