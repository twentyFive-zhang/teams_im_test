import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDragSvg } from '../svg/CommonDrag.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDrag = (props: IProps) => {
  return <Icon component={CommonDragSvg} {...props}></Icon>;
};
export default memo(CommonDrag) as typeof CommonDrag;
