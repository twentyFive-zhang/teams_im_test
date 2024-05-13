import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FilePdfColorSvg } from '../svg/FilePdfColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FilePdfColor = (props: IProps) => {
  return <Icon component={FilePdfColorSvg} {...props}></Icon>;
};
export default memo(FilePdfColor) as typeof FilePdfColor;
