import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckUnCheckedSvg } from '../svg/CommonCheckUnChecked.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckUnChecked = (props: IProps) => {
  return <Icon component={CommonCheckUnCheckedSvg} {...props}></Icon>;
};
export default memo(CommonCheckUnChecked) as typeof CommonCheckUnChecked;
