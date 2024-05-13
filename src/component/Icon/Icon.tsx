import classNames from 'classnames';
import React, { memo, type CSSProperties } from 'react';
import Icons from '../Icons';
import type { AllIconType } from './iconType';

export type ColorType = 'default' | 'second' | 'primary' | 'ghost';

export type IconType = AllIconType;

export type IconProps = {
  /**
   * @description 属性描述
   * @default "default"
   */
  colorType?: ColorType;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description icon类型
   * @type IconType
   */
  type: IconType;
  /**
   * @description 样式
   */
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * @description icon外层div样式
   */
  wrapperClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  /**
   * @description 设置图标的样式，例如 fontSize 和 color
   */
  style?: CSSProperties;
  onClickItem?: () => void;
  render?: (props: { icon: React.ReactNode }) => React.JSX.Element;
};
export const baseClassName: Record<ColorType, string> = {
  default: 'text-[#595959]',
  second: 'text-[#AEAEAE]',
  primary: 'text-[#007AEB]',
  ghost: 'text-white',
};
const Icon = ({ render, ...props }: IconProps): React.JSX.Element => {
  if (render) {
    return render({ icon: <Icon {...props}></Icon> });
  }
  const {
    type,
    // colorType = 'default',
    // disabled = false,
    className = '',
    // onClickItem,
    wrapperClassName = '',
    ...rest
  } = props;
  const IconComponent = Icons[type];
  if (IconComponent)
    return (
      <div className={classNames('inline-block', wrapperClassName)}>
        <IconComponent
          {...rest}
          className={classNames(
            'block',
            // baseClassName[colorType],
            // disabled
            //   ? 'cursor-not-allowed'
            //   : 'cursor-pointer hover:text-[#3395EF] active:text-[#0062BC]',
            className,
          )}
        />
      </div>
    );
  return <></>;
};
export default memo(Icon);
