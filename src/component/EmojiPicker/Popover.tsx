import { Popover, type PopoverProps } from 'antd';
import React, { memo } from 'react';
import EmojiPicker, { type IEmojiPickerProps } from './Picker';

export interface IEmojiPickerPopoverProps extends IEmojiPickerProps {
  /**
   * @description children
   */
  children?: React.ReactNode;

  /**
   * @description popoverProps
   * @type popoverProps
   */
  popoverProps?: Omit<PopoverProps, 'children' | 'content'>;
}

const EmojiPickerPopover = ({
  children,
  popoverProps,
  ...rest
}: IEmojiPickerPopoverProps) => {
  console.log({ children });
  return (
    <Popover {...popoverProps} content={<EmojiPicker {...rest} />}>
      {children}
    </Popover>
  );
};
export default memo(EmojiPickerPopover) as typeof EmojiPickerPopover;
