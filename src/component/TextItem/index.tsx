import EmojiPicker, { Emoji, EmojiClickData } from 'emoji-picker-react';
import emojiRegex from 'emoji-regex';
import React, { useState } from 'react';

const encodeEmoji = (str: string) => {
  const regex = emojiRegex();
  return str.replace(regex, (p) => `emoji(${p.codePointAt(0)})`);
};

const deCodeEmoji = (str: string) => {
  const emojiDecodeRegex = /emoji\(\d+\)/g;
  return str.replace(emojiDecodeRegex, (p) => {
    const filterP = p.replace(/[^\d]/g, '');
    return String.fromCodePoint(filterP as unknown as number);
  });
};

type IEmojiProps = Parameters<typeof Emoji>[0];

const EmojiContentReg = /(?<=(<emoji[^>]*?>)).*?(?=(<\/emoji>))/g;

const EmojiReg = new RegExp(`(\\<emoji>.+\\</emoji>)`);
console.log(EmojiReg);

const getEmoji = (props: IEmojiProps) => {
  return <Emoji {...props}></Emoji>;
};

console.log(EmojiContentReg, getEmoji);

export type ITextItemProps = {
  value?: string;
};
const TextItem = ({
  value = '<text>123</text><emoji>{unified:"12 3",}</emoji><text>45 6</text><emoji>{unified:"444",}</emoji><text>789</text>',
}: ITextItemProps) => {
  console.log({ value });
  const [list, setList] = useState<EmojiClickData[]>([]);
  return (
    <>
      <EmojiPicker
        skinTonesDisabled
        searchDisabled
        previewConfig={{ showPreview: false }}
        onEmojiClick={(item) => {
          console.log({ item });
          setList((pre) => [...pre, item]);
        }}
        allowExpandReactions={false}
        reactionsDefaultOpen={false}
        suggestedEmojisMode={undefined}
        // @ts-ignore
        emojiStyle="native"
      />
      <div className="flex gap-x-2">
        {list?.map((item, index) => (
          <Emoji
            key={`${index}-${item.unified}`}
            unified={item.unified}
            // @ts-ignore
            emojiStyle="native"
          ></Emoji>
        ))}
      </div>
      {encodeEmoji(list.map((item) => item.emoji).join(''))}
      {deCodeEmoji(encodeEmoji(list.map((item) => item.emoji).join('')))}
    </>
  );
};
export default TextItem;
