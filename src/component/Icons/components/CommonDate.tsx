import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDateSvg } from '../svg/CommonDate.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDate = (props: IProps) => {
  return <Icon component={CommonDateSvg} {...props}></Icon>;
};
export default memo(CommonDate) as typeof CommonDate;
