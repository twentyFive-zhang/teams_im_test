import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileExcelColorSvg } from '../svg/FileExcelColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileExcelColor = (props: IProps) => {
  return <Icon component={FileExcelColorSvg} {...props}></Icon>;
};
export default memo(FileExcelColor) as typeof FileExcelColor;
