import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonEditSvg } from '../svg/CommonEdit.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonEdit = (props: IProps) => {
  return <Icon component={CommonEditSvg} {...props}></Icon>;
};
export default memo(CommonEdit) as typeof CommonEdit;
