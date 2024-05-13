import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckSvg } from '../svg/CommonCheck.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheck = (props: IProps) => {
  return <Icon component={CommonCheckSvg} {...props}></Icon>;
};
export default memo(CommonCheck) as typeof CommonCheck;
