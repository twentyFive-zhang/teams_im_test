import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonExpandSvg } from '../svg/CommonExpand.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonExpand = (props: IProps) => {
  return <Icon component={CommonExpandSvg} {...props}></Icon>;
};
export default memo(CommonExpand) as typeof CommonExpand;
