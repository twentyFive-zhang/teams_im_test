import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscCardSvg } from '../svg/NetDiscCard.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscCard = (props: IProps) => {
  return <Icon component={NetDiscCardSvg} {...props}></Icon>;
};
export default memo(NetDiscCard) as typeof NetDiscCard;
