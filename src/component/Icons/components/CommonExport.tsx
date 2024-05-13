import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonExportSvg } from '../svg/CommonExport.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonExport = (props: IProps) => {
  return <Icon component={CommonExportSvg} {...props}></Icon>;
};
export default memo(CommonExport) as typeof CommonExport;
