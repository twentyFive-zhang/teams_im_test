import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileCompressColorSvg } from '../svg/FileCompressColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileCompressColor = (props: IProps) => {
  return <Icon component={FileCompressColorSvg} {...props}></Icon>;
};
export default memo(FileCompressColor) as typeof FileCompressColor;
