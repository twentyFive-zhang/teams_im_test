import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonSearchSvg } from '../svg/CommonSearch.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonSearch = (props: IProps) => {
  return <Icon component={CommonSearchSvg} {...props}></Icon>;
};
export default memo(CommonSearch) as typeof CommonSearch;
