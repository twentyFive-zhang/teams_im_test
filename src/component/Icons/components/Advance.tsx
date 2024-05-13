import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as AdvanceSvg } from '../svg/Advance.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const Advance = (props: IProps) => {
  return <Icon component={AdvanceSvg} {...props}></Icon>;
};
export default memo(Advance) as typeof Advance;
