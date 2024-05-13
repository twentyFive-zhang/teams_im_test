import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonUpTriangleSvg } from '../svg/CommonUpTriangle.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonUpTriangle = (props: IProps) => {
  return <Icon component={CommonUpTriangleSvg} {...props}></Icon>;
};
export default memo(CommonUpTriangle) as typeof CommonUpTriangle;
