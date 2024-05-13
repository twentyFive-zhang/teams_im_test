import { Input } from 'antd';
import { TextAreaRef } from 'antd/es/input/TextArea';
import classNames from 'classnames';
import React, { useCallback, useRef, useState } from 'react';
import { useAllowDrop } from './_utils';
import ToolLine from './components/ToolLine';

import { useConfigStoreKey } from '../ConfigProvider/context';

export type IChatInputType = {
  /**
   * @default false
   * @description 是否有边框
   */
  bordered?: boolean;
  /**
   * @default false
   * @description 是否是编辑框最大化
   */
  isEditFullScreen?: boolean;

  /**
   * @description 修改编辑框最大化函数
   */
  onEditFullScreenChange?: (isEditFullScreen: boolean) => void;
  wrapperClassName?: string;
  classNames?: {
    root?: string;
    wrapper?: string;
    dropRoot?: string;
    dropWrapper?: string;
    fullScreenRoot?: string;
    fullScreenWrapper?: string;
  };
};

const ChatInput = ({
  // isEditFullScreen = false,
  // onEditFullScreenChange: defaultOnEditFullScreenChange,
  classNames: allClassNames = {},
}: IChatInputType) => {
  const [isEditFullScreen, setIsEditFullScreen] =
    useConfigStoreKey('isEditFullScreen');
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputRef = useRef<TextAreaRef>(null);

  const { isDropping, wrapperRef } = useAllowDrop();

  const onEditFullScreenChange = useCallback((status: boolean) => {
    setIsEditFullScreen?.(status);
    inputRef.current?.focus({ cursor: 'end' });
  }, []);

  const [value, setValue] = useState<string>('');

  const onEmojiChange = useCallback((emoji: string) => {
    setValue((pre) => `${pre}${emoji}`);
  }, []);
  return (
    <>
      <div
        className={classNames(
          ['relative ', allClassNames?.root],
          isEditFullScreen && [
            '!absolute left-0 top-0  !mx-0  h-full w-full rounded-b-none border-0',
            allClassNames?.fullScreenRoot,
          ],
          isDropping && ['border-0 ', allClassNames?.dropRoot],
        )}
        ref={wrapperRef}
      >
        {!isActive && (
          <div
            className="absolute left-0 z-10 h-full w-full cursor-pointer opacity-0"
            onClick={() => {
              setIsActive(true);
              inputRef.current?.focus();
            }}
          ></div>
        )}
        <div
          className={classNames(
            [
              'flex flex-col gap-y-1 rounded-lg border border-solid border-border bg-white px-4 pb-4',
              allClassNames?.wrapper,
            ],
            isEditFullScreen && [
              'absolute left-0 top-16  !mx-0  h-full w-full rounded-b-none border-0',
              allClassNames?.fullScreenWrapper,
            ],

            isDropping && ['border-white ', allClassNames?.dropWrapper],
          )}
        >
          {isDropping && (
            <div
              className={classNames(
                'opacity absolute  left-0  top-0 z-[11]  box-border h-full w-full ',
              )}
            >
              <div
                className={classNames(
                  'flex h-full items-center justify-center rounded border border-solid border-primary  bg-white/90',
                )}
              >
                <div className="text-center text-base font-medium text-text-second">
                  发送文件
                </div>
              </div>
            </div>
          )}
          <ToolLine
            {...{
              isEditFullScreen,
              onEditFullScreenChange,
              onEmojiChange,
            }}
          ></ToolLine>
          <Input.TextArea
            ref={inputRef}
            variant="borderless"
            autoSize={isEditFullScreen ? false : { minRows: 4, maxRows: 6 }}
            className={classNames(
              '!text-sm text-text',
              isEditFullScreen ? '!h-full' : '',
            )}
            styles={{ textarea: { padding: 0, borderRadius: 0 } }}
            onPressEnter={(e) => {
              // e.stopPropagation();
              e.preventDefault();
              const { target } = e;
              const { value } = target as typeof target & { value?: string };
              console.log({ value });
            }}
            onChange={(e) => {
              console.log({ value: e.target.value });
              setValue(e.target.value);
            }}
            value={value}
          ></Input.TextArea>
        </div>
      </div>
    </>
  );
};
export default ChatInput;
