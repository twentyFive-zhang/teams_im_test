import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckCheckedDisabledSvg } from '../svg/CommonCheckCheckedDisabled.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckCheckedDisabled = (props: IProps) => {
  return <Icon component={CommonCheckCheckedDisabledSvg} {...props}></Icon>;
};
export default memo(
  CommonCheckCheckedDisabled,
) as typeof CommonCheckCheckedDisabled;
