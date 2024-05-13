import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as MessageAnnouncementSvg } from '../svg/MessageAnnouncement.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const MessageAnnouncement = (props: IProps) => {
  return <Icon component={MessageAnnouncementSvg} {...props}></Icon>;
};
export default memo(MessageAnnouncement) as typeof MessageAnnouncement;
