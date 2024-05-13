import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as FileDesignColorSvg } from '../svg/FileDesignColor.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const FileDesignColor = (props: IProps) => {
  return <Icon component={FileDesignColorSvg} {...props}></Icon>;
};
export default memo(FileDesignColor) as typeof FileDesignColor;
