import EmojiPickerReact, {
  type EmojiClickData,
  type EmojiStyle,
  type PickerProps,
} from 'emoji-picker-react';
import React, { memo, useCallback } from 'react';

export type EmojiItemData = EmojiClickData;

export type IEmojiPickerProps = {
  /**
   * @description pickerProps
   * @type PickerProps
   */
  pickerProps?: PickerProps;
  /**
   * @description 点击单个emoji
   * @type (emoji: EmojiItemData['emoji'], item: EmojiItemData) => void
   */
  onClickItem?: (emoji: EmojiItemData['emoji'], item: EmojiItemData) => void;
};

const EmojiPicker = ({ pickerProps, onClickItem }: IEmojiPickerProps) => {
  const onEmojiClick = useCallback((item: EmojiClickData) => {
    onClickItem?.(item.emoji, item);
  }, []);
  return (
    <EmojiPickerReact
      skinTonesDisabled
      searchDisabled
      previewConfig={{ showPreview: false }}
      allowExpandReactions={false}
      reactionsDefaultOpen={false}
      suggestedEmojisMode={undefined}
      emojiStyle={'native' as EmojiStyle}
      {...pickerProps}
      onEmojiClick={onEmojiClick}
    ></EmojiPickerReact>
  );
};
export default memo(EmojiPicker, () => true) as typeof EmojiPicker;
