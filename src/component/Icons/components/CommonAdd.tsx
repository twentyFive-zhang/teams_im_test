import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonAddSvg } from '../svg/CommonAdd.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonAdd = (props: IProps) => {
  return <Icon component={CommonAddSvg} {...props}></Icon>;
};
export default memo(CommonAdd) as typeof CommonAdd;
