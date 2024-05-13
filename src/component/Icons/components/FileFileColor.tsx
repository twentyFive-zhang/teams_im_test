import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileFileColorSvg } from '../svg/FileFileColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileFileColor = (props: IProps) => {
  return <Icon component={FileFileColorSvg} {...props}></Icon>;
};
export default memo(FileFileColor) as typeof FileFileColor;
