import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscCommonSvg } from '../svg/NetDiscCommon.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscCommon = (props: IProps) => {
  return <Icon component={NetDiscCommonSvg} {...props}></Icon>;
};
export default memo(NetDiscCommon) as typeof NetDiscCommon;
