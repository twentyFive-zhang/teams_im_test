import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as TableRichTextSvg } from '../svg/TableRichText.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const TableRichText = (props: IProps) => {
  return <Icon component={TableRichTextSvg} {...props}></Icon>;
};
export default memo(TableRichText) as typeof TableRichText;
