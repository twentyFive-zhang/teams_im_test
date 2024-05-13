import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonTimeSvg } from '../svg/CommonTime.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonTime = (props: IProps) => {
  return <Icon component={CommonTimeSvg} {...props}></Icon>;
};
export default memo(CommonTime) as typeof CommonTime;
