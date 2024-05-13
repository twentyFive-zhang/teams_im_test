import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonScreenFullSvg } from '../svg/CommonScreenFull.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonScreenFull = (props: IProps) => {
  return <Icon component={CommonScreenFullSvg} {...props}></Icon>;
};
export default memo(CommonScreenFull) as typeof CommonScreenFull;
