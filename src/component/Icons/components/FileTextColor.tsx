import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileTextColorSvg } from '../svg/FileTextColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileTextColor = (props: IProps) => {
  return <Icon component={FileTextColorSvg} {...props}></Icon>;
};
export default memo(FileTextColor) as typeof FileTextColor;
