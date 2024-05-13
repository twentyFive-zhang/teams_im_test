import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCloseLargeSvg } from '../svg/CommonCloseLarge.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCloseLarge = (props: IProps) => {
  return <Icon component={CommonCloseLargeSvg} {...props}></Icon>;
};
export default memo(CommonCloseLarge) as typeof CommonCloseLarge;
