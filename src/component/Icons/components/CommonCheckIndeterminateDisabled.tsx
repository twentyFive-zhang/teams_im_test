import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckIndeterminateDisabledSvg } from '../svg/CommonCheckIndeterminateDisabled.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckIndeterminateDisabled = (props: IProps) => {
  return (
    <Icon component={CommonCheckIndeterminateDisabledSvg} {...props}></Icon>
  );
};
export default memo(
  CommonCheckIndeterminateDisabled,
) as typeof CommonCheckIndeterminateDisabled;
