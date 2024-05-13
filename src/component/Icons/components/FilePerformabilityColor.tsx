import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FilePerformabilityColorSvg } from '../svg/FilePerformabilityColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FilePerformabilityColor = (props: IProps) => {
  return <Icon component={FilePerformabilityColorSvg} {...props}></Icon>;
};
export default memo(FilePerformabilityColor) as typeof FilePerformabilityColor;
