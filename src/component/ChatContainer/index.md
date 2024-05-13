# ChatContainer

消息框.

```tsx
/**
 * background: 'gray'
 */
import { ChatContainer, ConfigProvider } from '@jiang-liuer/teams_im_ui';

export default () => (
  <ConfigProvider>
    <div style={{ width: '800px', height: '400px' }}>
      <ChatContainer input={{ isEditFullScreen: true }} />
    </div>
  </ConfigProvider>
);
```

```tsx
/**
 * background: 'gray'
 */
import { ChatContainer, ConfigProvider } from '@jiang-liuer/teams_im_ui';

export default () => (
  <div style={{ width: '800px', height: '400px' }}>
    <ChatContainer />
  </div>
);
```

<API id="ChatContainer"></API>
