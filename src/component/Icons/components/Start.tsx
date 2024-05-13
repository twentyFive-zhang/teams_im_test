import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as StartSvg } from '../svg/Start.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const Start = (props: IProps) => {
  return <Icon component={StartSvg} {...props}></Icon>;
};
export default memo(Start) as typeof Start;
