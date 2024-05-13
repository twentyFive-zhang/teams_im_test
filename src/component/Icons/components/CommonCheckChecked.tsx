import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckCheckedSvg } from '../svg/CommonCheckChecked.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckChecked = (props: IProps) => {
  return <Icon component={CommonCheckCheckedSvg} {...props}></Icon>;
};
export default memo(CommonCheckChecked) as typeof CommonCheckChecked;
