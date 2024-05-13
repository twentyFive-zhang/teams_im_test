import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonMoreSvg } from '../svg/CommonMore.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonMore = (props: IProps) => {
  return <Icon component={CommonMoreSvg} {...props}></Icon>;
};
export default memo(CommonMore) as typeof CommonMore;
