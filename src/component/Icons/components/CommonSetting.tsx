import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonSettingSvg } from '../svg/CommonSetting.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonSetting = (props: IProps) => {
  return <Icon component={CommonSettingSvg} {...props}></Icon>;
};
export default memo(CommonSetting) as typeof CommonSetting;
