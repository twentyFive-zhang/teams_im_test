import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as RetreatSvg } from '../svg/Retreat.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const Retreat = (props: IProps) => {
  return <Icon component={RetreatSvg} {...props}></Icon>;
};
export default memo(Retreat) as typeof Retreat;
