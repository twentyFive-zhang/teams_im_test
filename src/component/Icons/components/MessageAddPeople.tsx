import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as MessageAddPeopleSvg } from '../svg/MessageAddPeople.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const MessageAddPeople = (props: IProps) => {
  return <Icon component={MessageAddPeopleSvg} {...props}></Icon>;
};
export default memo(MessageAddPeople) as typeof MessageAddPeople;
