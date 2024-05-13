import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonSuccessColorSvg } from '../svg/CommonSuccessColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonSuccessColor = (props: IProps) => {
  return <Icon component={CommonSuccessColorSvg} {...props}></Icon>;
};
export default memo(CommonSuccessColor) as typeof CommonSuccessColor;
