import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonWarningSvg } from '../svg/CommonWarning.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonWarning = (props: IProps) => {
  return <Icon component={CommonWarningSvg} {...props}></Icon>;
};
export default memo(CommonWarning) as typeof CommonWarning;
