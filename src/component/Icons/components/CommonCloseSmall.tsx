import Icon from '@ant-design/icons';
import React, { memo, type CSSProperties } from 'react';
import { ReactComponent as CommonCloseSmallSvg } from '../svg/CommonCloseSmall.svg';
export type IProps = {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
};
const CommonCloseSmall = (props: IProps) => {
  return <Icon component={CommonCloseSmallSvg} {...props}></Icon>;
};
export default memo(CommonCloseSmall) as typeof CommonCloseSmall;
