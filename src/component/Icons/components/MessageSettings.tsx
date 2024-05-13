import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as MessageSettingsSvg } from '../svg/MessageSettings.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const MessageSettings = (props: IProps) => {
  return <Icon component={MessageSettingsSvg} {...props}></Icon>;
};
export default memo(MessageSettings) as typeof MessageSettings;
