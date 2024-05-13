import React from 'react';
import Icon from '../Icon';

export type IHeaderProps = {
  size?: 'normal' | 'small' | 'large';
  title?: React.ReactNode | string;
  onClose?: () => void;
};
const Header = ({ size, title, onClose }: IHeaderProps) => {
  console.log({ size });
  return (
    <div className="flex h-16 items-center justify-between rounded-t-lg bg-white px-6">
      <div className="text-base font-medium text-text">{title}</div>
      <Icon
        type="CommonCloseLarge"
        onClickItem={onClose}
        style={{ fontSize: 24 }}
      ></Icon>
    </div>
  );
};
export default Header;
