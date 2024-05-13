import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonDeleteSvg } from '../svg/CommonDelete.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonDelete = (props: IProps) => {
  return <Icon component={CommonDeleteSvg} {...props}></Icon>;
};
export default memo(CommonDelete) as typeof CommonDelete;
