import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileQuoteColorSvg } from '../svg/FileQuoteColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileQuoteColor = (props: IProps) => {
  return <Icon component={FileQuoteColorSvg} {...props}></Icon>;
};
export default memo(FileQuoteColor) as typeof FileQuoteColor;
