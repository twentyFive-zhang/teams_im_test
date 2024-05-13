import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonLeftSvg } from '../svg/CommonLeft.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonLeft = (props: IProps) => {
  return <Icon component={CommonLeftSvg} {...props}></Icon>;
};
export default memo(CommonLeft) as typeof CommonLeft;
