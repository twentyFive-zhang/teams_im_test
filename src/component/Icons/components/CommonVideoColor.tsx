import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonVideoColorSvg } from '../svg/CommonVideoColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonVideoColor = (props: IProps) => {
  return <Icon component={CommonVideoColorSvg} {...props}></Icon>;
};
export default memo(CommonVideoColor) as typeof CommonVideoColor;
