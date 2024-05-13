import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscUserSvg } from '../svg/NetDiscUser.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscUser = (props: IProps) => {
  return <Icon component={NetDiscUserSvg} {...props}></Icon>;
};
export default memo(NetDiscUser) as typeof NetDiscUser;
