import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as NetDiscUploadFolderSvg } from '../svg/NetDiscUploadFolder.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const NetDiscUploadFolder = (props: IProps) => {
  return <Icon component={NetDiscUploadFolderSvg} {...props}></Icon>;
};
export default memo(NetDiscUploadFolder) as typeof NetDiscUploadFolder;
