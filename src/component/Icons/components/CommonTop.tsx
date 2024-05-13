import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonTopSvg } from '../svg/CommonTop.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonTop = (props: IProps) => {
  return <Icon component={CommonTopSvg} {...props}></Icon>;
};
export default memo(CommonTop) as typeof CommonTop;
