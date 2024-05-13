import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonListSvg } from '../svg/CommonList.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonList = (props: IProps) => {
  return <Icon component={CommonListSvg} {...props}></Icon>;
};
export default memo(CommonList) as typeof CommonList;
