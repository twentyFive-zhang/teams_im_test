import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileUrlColorSvg } from '../svg/FileUrlColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileUrlColor = (props: IProps) => {
  return <Icon component={FileUrlColorSvg} {...props}></Icon>;
};
export default memo(FileUrlColor) as typeof FileUrlColor;
