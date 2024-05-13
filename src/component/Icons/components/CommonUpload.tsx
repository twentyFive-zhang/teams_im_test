import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonUploadSvg } from '../svg/CommonUpload.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonUpload = (props: IProps) => {
  return <Icon component={CommonUploadSvg} {...props}></Icon>;
};
export default memo(CommonUpload) as typeof CommonUpload;
