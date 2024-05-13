import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableRadioSvg } from '../svg/TableRadio.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableRadio = (props: IProps) => {
  return <Icon component={TableRadioSvg} {...props}></Icon>;
};
export default memo(TableRadio) as typeof TableRadio;
