import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonErrorColorSvg } from '../svg/CommonErrorColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonErrorColor = (props: IProps) => {
  return <Icon component={CommonErrorColorSvg} {...props}></Icon>;
};
export default memo(CommonErrorColor) as typeof CommonErrorColor;
