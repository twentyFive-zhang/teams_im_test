import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as ChatUploadSvg } from '../svg/ChatUpload.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const ChatUpload = (props: IProps) => {
  return <Icon component={ChatUploadSvg} {...props}></Icon>;
};
export default memo(ChatUpload) as typeof ChatUpload;
