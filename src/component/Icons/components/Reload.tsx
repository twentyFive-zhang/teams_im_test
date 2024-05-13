import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as ReloadSvg } from '../svg/Reload.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const Reload = (props: IProps) => {
  return <Icon component={ReloadSvg} {...props}></Icon>;
};
export default memo(Reload) as typeof Reload;
