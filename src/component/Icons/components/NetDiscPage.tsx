import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscPageSvg } from '../svg/NetDiscPage.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscPage = (props: IProps) => {
  return <Icon component={NetDiscPageSvg} {...props}></Icon>;
};
export default memo(NetDiscPage) as typeof NetDiscPage;
