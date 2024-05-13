import React, { memo } from 'react';

export type IAvatarProps = {
  /**
   * @description 右上角的圆形徽标数字
   */
  badge?: number;
  /**
   * @description 名称
   */
  name?: React.ReactNode | string;

  /**
   * @description 头像图片
   */
  url?: string;
};

const Avatar = ({ badge, name = '', url }: IAvatarProps) => {
  return (
    <div className="relative inline-flex h-10 w-10 cursor-pointer items-center rounded bg-primary text-white">
      {name && (
        <div className="w-full text-center text-xs font-medium">{name}</div>
      )}
      {url && (
        <img
          src={url}
          alt=""
          className="block h-full w-full rounded object-contain"
        ></img>
      )}
      {!!badge && (
        <div className="absolute end-0 top-0 origin-top-left -translate-y-1/2 translate-x-1/2 transform rounded-[120px] bg-danger px-[5px] text-xs leading-[18px]">
          {badge}
        </div>
      )}
    </div>
  );
};
export default memo(Avatar) as typeof Avatar;
