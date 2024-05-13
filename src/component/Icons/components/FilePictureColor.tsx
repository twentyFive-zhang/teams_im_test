import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FilePictureColorSvg } from '../svg/FilePictureColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FilePictureColor = (props: IProps) => {
  return <Icon component={FilePictureColorSvg} {...props}></Icon>;
};
export default memo(FilePictureColor) as typeof FilePictureColor;
