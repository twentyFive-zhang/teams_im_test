import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileCodeColorSvg } from '../svg/FileCodeColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileCodeColor = (props: IProps) => {
  return <Icon component={FileCodeColorSvg} {...props}></Icon>;
};
export default memo(FileCodeColor) as typeof FileCodeColor;
