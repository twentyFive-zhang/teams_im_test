import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileFailColorSvg } from '../svg/FileFailColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileFailColor = (props: IProps) => {
  return <Icon component={FileFailColorSvg} {...props}></Icon>;
};
export default memo(FileFailColor) as typeof FileFailColor;
