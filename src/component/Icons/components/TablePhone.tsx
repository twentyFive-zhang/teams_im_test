import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TablePhoneSvg } from '../svg/TablePhone.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TablePhone = (props: IProps) => {
  return <Icon component={TablePhoneSvg} {...props}></Icon>;
};
export default memo(TablePhone) as typeof TablePhone;
