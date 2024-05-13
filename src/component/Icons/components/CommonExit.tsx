import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonExitSvg } from '../svg/CommonExit.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonExit = (props: IProps) => {
  return <Icon component={CommonExitSvg} {...props}></Icon>;
};
export default memo(CommonExit) as typeof CommonExit;
