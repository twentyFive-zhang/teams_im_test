import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDownloadSvg } from '../svg/CommonDownload.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDownload = (props: IProps) => {
  return <Icon component={CommonDownloadSvg} {...props}></Icon>;
};
export default memo(CommonDownload) as typeof CommonDownload;
