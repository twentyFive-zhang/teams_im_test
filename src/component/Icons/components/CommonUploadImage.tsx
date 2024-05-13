import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonUploadImageSvg } from '../svg/CommonUploadImage.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonUploadImage = (props: IProps) => {
  return <Icon component={CommonUploadImageSvg} {...props}></Icon>;
};
export default memo(CommonUploadImage) as typeof CommonUploadImage;
