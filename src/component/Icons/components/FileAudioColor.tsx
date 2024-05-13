import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileAudioColorSvg } from '../svg/FileAudioColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileAudioColor = (props: IProps) => {
  return <Icon component={FileAudioColorSvg} {...props}></Icon>;
};
export default memo(FileAudioColor) as typeof FileAudioColor;
