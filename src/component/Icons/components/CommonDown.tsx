import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDownSvg } from '../svg/CommonDown.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDown = (props: IProps) => {
  return <Icon component={CommonDownSvg} {...props}></Icon>;
};
export default memo(CommonDown) as typeof CommonDown;
