import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileVideoColorSvg } from '../svg/FileVideoColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileVideoColor = (props: IProps) => {
  return <Icon component={FileVideoColorSvg} {...props}></Icon>;
};
export default memo(FileVideoColor) as typeof FileVideoColor;
