import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonRightSvg } from '../svg/CommonRight.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonRight = (props: IProps) => {
  return <Icon component={CommonRightSvg} {...props}></Icon>;
};
export default memo(CommonRight) as typeof CommonRight;
