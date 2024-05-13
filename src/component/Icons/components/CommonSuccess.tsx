import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonSuccessSvg } from '../svg/CommonSuccess.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonSuccess = (props: IProps) => {
  return <Icon component={CommonSuccessSvg} {...props}></Icon>;
};
export default memo(CommonSuccess) as typeof CommonSuccess;
