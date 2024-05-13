import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscUploadFileSvg } from '../svg/NetDiscUploadFile.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscUploadFile = (props: IProps) => {
  return <Icon component={NetDiscUploadFileSvg} {...props}></Icon>;
};
export default memo(NetDiscUploadFile) as typeof NetDiscUploadFile;
