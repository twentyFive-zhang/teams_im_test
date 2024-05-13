import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileGeneralColorSvg } from '../svg/FileGeneralColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileGeneralColor = (props: IProps) => {
  return <Icon component={FileGeneralColorSvg} {...props}></Icon>;
};
export default memo(FileGeneralColor) as typeof FileGeneralColor;
