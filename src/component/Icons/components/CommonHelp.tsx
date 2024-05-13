import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonHelpSvg } from '../svg/CommonHelp.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonHelp = (props: IProps) => {
  return <Icon component={CommonHelpSvg} {...props}></Icon>;
};
export default memo(CommonHelp) as typeof CommonHelp;
