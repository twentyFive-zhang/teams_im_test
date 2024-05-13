import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonFilterSvg } from '../svg/CommonFilter.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonFilter = (props: IProps) => {
  return <Icon component={CommonFilterSvg} {...props}></Icon>;
};
export default memo(CommonFilter) as typeof CommonFilter;
