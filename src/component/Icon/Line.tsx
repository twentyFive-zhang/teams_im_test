import classNames from 'classnames';
import React, { memo } from 'react';
import Icon, { type IconProps } from './Icon';

export interface IIconLineProps {
  /**
   * @description icon列表
   */
  list?: (IconProps & { key?: React.Key })[];
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 外层wrapperClassName
   */
  wrapperClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * @description 图标iconClassName
   */
  iconClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  onClickItem?: (type: IconProps['type'], item: IconProps) => void;
}

const IconLine = ({
  list,
  iconClassName,
  className,
  onClickItem,
  bordered,
}: IIconLineProps) => {
  return (
    <div
      className={classNames(
        'inline-flex rounded',
        bordered ? 'border border-solid border-border' : 'gap-x-1',
        className,
      )}
    >
      {list?.map((item) => (
        <Icon
          {...item}
          wrapperClassName={classNames(
            bordered
              ? 'border-border border-0 border-r border-solid last:border-r-0'
              : '',
          )}
          className={classNames(iconClassName, item.className)}
          key={item.type || item.key}
          onClickItem={
            item.onClickItem ||
            (() => {
              onClickItem?.(item.type, item);
            })
          }
        ></Icon>
      ))}
    </div>
  );
};

export default memo(IconLine) as typeof IconLine;
