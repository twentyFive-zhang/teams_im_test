import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonShowSvg } from '../svg/CommonShow.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonShow = (props: IProps) => {
  return <Icon component={CommonShowSvg} {...props}></Icon>;
};
export default memo(CommonShow) as typeof CommonShow;
