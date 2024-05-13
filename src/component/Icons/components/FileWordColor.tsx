import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileWordColorSvg } from '../svg/FileWordColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileWordColor = (props: IProps) => {
  return <Icon component={FileWordColorSvg} {...props}></Icon>;
};
export default memo(FileWordColor) as typeof FileWordColor;
