import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as PauseSvg } from '../svg/Pause.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const Pause = (props: IProps) => {
  return <Icon component={PauseSvg} {...props}></Icon>;
};
export default memo(Pause) as typeof Pause;
