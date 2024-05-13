import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonImportSvg } from '../svg/CommonImport.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonImport = (props: IProps) => {
  return <Icon component={CommonImportSvg} {...props}></Icon>;
};
export default memo(CommonImport) as typeof CommonImport;
