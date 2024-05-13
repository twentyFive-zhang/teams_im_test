import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscUploadListSvg } from '../svg/NetDiscUploadList.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscUploadList = (props: IProps) => {
  return <Icon component={NetDiscUploadListSvg} {...props}></Icon>;
};
export default memo(NetDiscUploadList) as typeof NetDiscUploadList;
