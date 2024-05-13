import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableImageSvg } from '../svg/TableImage.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableImage = (props: IProps) => {
  return <Icon component={TableImageSvg} {...props}></Icon>;
};
export default memo(TableImage) as typeof TableImage;
