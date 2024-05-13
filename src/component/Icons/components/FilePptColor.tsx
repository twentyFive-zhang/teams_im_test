import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FilePptColorSvg } from '../svg/FilePptColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FilePptColor = (props: IProps) => {
  return <Icon component={FilePptColorSvg} {...props}></Icon>;
};
export default memo(FilePptColor) as typeof FilePptColor;
