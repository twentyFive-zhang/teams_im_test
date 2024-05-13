import React, { memo } from 'react';
import { type IChatInputType } from '..';
import EmojiPicker from '../../EmojiPicker';
import Icon from '../../Icon';

export interface IToolLineInterface
  extends Pick<IChatInputType, 'isEditFullScreen' | 'onEditFullScreenChange'> {
  children?: React.ReactNode;
  onEmojiChange?: (emoji: string) => void;
}

const ToolLine = ({
  isEditFullScreen,
  onEditFullScreenChange,
  onEmojiChange,
}: IToolLineInterface) => {
  // const onEmojiChange
  return (
    <>
      <div className="flex justify-between gap-x-2 py-1 ">
        <Icon.Line
          iconClassName="text-[32px]"
          list={[
            {
              type: 'CommonEmoji',
              render: ({ icon }) => {
                console.log({ icon });
                return (
                  <EmojiPicker.Popover onClickItem={onEmojiChange}>
                    {icon}
                  </EmojiPicker.Popover>
                );
              },
            },
            { type: 'CommonUploadImage' },
            {
              type: 'ChatUpload',
            },
          ]}
          onClickItem={(type) => {
            console.log(type);
          }}
        ></Icon.Line>
        <Icon.Line
          iconClassName="text-[32px]"
          list={[
            {
              type: !isEditFullScreen ? 'CommonScreenFull' : 'CommonScreenExit',
              onClickItem: () => {
                // console.log(isEditFullScreen, onEditFullScreenChange);
                onEditFullScreenChange?.(!isEditFullScreen);
              },
            },
          ]}
        ></Icon.Line>
      </div>
    </>
  );
};
export default memo(ToolLine) as typeof ToolLine;
