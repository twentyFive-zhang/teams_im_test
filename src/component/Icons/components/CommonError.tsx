import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonErrorSvg } from '../svg/CommonError.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonError = (props: IProps) => {
  return <Icon component={CommonErrorSvg} {...props}></Icon>;
};
export default memo(CommonError) as typeof CommonError;
