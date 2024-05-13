import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonUpSvg } from '../svg/CommonUp.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonUp = (props: IProps) => {
  return <Icon component={CommonUpSvg} {...props}></Icon>;
};
export default memo(CommonUp) as typeof CommonUp;
