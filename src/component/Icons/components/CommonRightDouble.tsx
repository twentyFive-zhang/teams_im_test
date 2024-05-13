import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonRightDoubleSvg } from '../svg/CommonRightDouble.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonRightDouble = (props: IProps) => {
  return <Icon component={CommonRightDoubleSvg} {...props}></Icon>;
};
export default memo(CommonRightDouble) as typeof CommonRightDouble;
