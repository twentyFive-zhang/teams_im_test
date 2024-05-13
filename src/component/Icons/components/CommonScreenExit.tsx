import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonScreenExitSvg } from '../svg/CommonScreenExit.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonScreenExit = (props: IProps) => {
  return <Icon component={CommonScreenExitSvg} {...props}></Icon>;
};
export default memo(CommonScreenExit) as typeof CommonScreenExit;
