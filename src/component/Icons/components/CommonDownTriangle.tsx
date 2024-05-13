import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDownTriangleSvg } from '../svg/CommonDownTriangle.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDownTriangle = (props: IProps) => {
  return <Icon component={CommonDownTriangleSvg} {...props}></Icon>;
};
export default memo(CommonDownTriangle) as typeof CommonDownTriangle;
