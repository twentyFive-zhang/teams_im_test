import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCheckIndeterminateSvg } from '../svg/CommonCheckIndeterminate.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCheckIndeterminate = (props: IProps) => {
  return <Icon component={CommonCheckIndeterminateSvg} {...props}></Icon>;
};
export default memo(
  CommonCheckIndeterminate,
) as typeof CommonCheckIndeterminate;
