import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonReturnSvg } from '../svg/CommonReturn.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonReturn = (props: IProps) => {
  return <Icon component={CommonReturnSvg} {...props}></Icon>;
};
export default memo(CommonReturn) as typeof CommonReturn;
