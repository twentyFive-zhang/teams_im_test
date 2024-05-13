import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCollectSvg } from '../svg/CommonCollect.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCollect = (props: IProps) => {
  return <Icon component={CommonCollectSvg} {...props}></Icon>;
};
export default memo(CommonCollect) as typeof CommonCollect;
