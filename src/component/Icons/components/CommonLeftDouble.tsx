import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonLeftDoubleSvg } from '../svg/CommonLeftDouble.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonLeftDouble = (props: IProps) => {
  return <Icon component={CommonLeftDoubleSvg} {...props}></Icon>;
};
export default memo(CommonLeftDouble) as typeof CommonLeftDouble;
