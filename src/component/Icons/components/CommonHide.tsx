import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonHideSvg } from '../svg/CommonHide.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonHide = (props: IProps) => {
  return <Icon component={CommonHideSvg} {...props}></Icon>;
};
export default memo(CommonHide) as typeof CommonHide;
