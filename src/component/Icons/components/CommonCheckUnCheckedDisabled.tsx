import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckUnCheckedDisabledSvg } from '../svg/CommonCheckUnCheckedDisabled.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckUnCheckedDisabled = (props: IProps) => {
  return <Icon component={CommonCheckUnCheckedDisabledSvg} {...props}></Icon>;
};
export default memo(
  CommonCheckUnCheckedDisabled,
) as typeof CommonCheckUnCheckedDisabled;
