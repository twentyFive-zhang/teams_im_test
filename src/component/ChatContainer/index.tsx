import React from 'react';
import ChatInput, { type IChatInputType } from '../ChatInput';
// import { useConfigStoreKey } from '../ConfigProvider/context';
import Header from '../Header';

export type IChatContainerType = {
  /**
   * @description 输入框的props
   * @type IChatInputType
   */
  input?: IChatInputType;
};
const ChatContainer = ({ input }: IChatContainerType) => {
  // const [isEditFullScreen, setIsEditFullScreen] =
  //   useConfigStoreKey('isEditFullScreen');

  return (
    <div className="relative flex h-full flex-col bg-bg">
      <Header></Header>
      <div className="flex-auto px-4"></div>
      <ChatInput
        wrapperClassName="mx-4 mb-4"
        bordered
        {...input}
        // isEditFullScreen={isEditFullScreen as unknown as boolean}
        // onEditFullScreenChange={setIsEditFullScreen}
        classNames={{
          root: 'mx-4 mb-4',
          fullScreenRoot: 'bg-black/30',
          fullScreenWrapper: '!h-[calc(100%-64px)]',
        }}
      ></ChatInput>
    </div>
  );
};
export default ChatContainer;
