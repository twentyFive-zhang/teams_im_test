import InternalEmojiPicker from './Picker';
import Popover from './Popover';

export type { IEmojiPickerProps } from './Picker';

type EmojiPickerType = typeof InternalEmojiPicker;
export interface EmojiPickerInterface extends EmojiPickerType {
  displayName?: string;
  Popover: typeof Popover;
}

const EmojiPicker = InternalEmojiPicker as EmojiPickerInterface;

EmojiPicker.Popover = Popover;

if (process.env.NODE_ENV !== 'production') {
  EmojiPicker.displayName = 'EmojiPicker';
}

export default EmojiPicker;
