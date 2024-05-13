import { Button } from 'antd';
import React, { type FC } from 'react';

export type IProps = {
  /**
   * @description 属性描述
   * @default "默认值1"
   */
  title?: string;
};

const Foo: FC<IProps> = (props) => (
  <h4>
    {props.title}
    <Button type="primary" className="block cursor-auto px-3">
      123
    </Button>
  </h4>
);

export default Foo;
