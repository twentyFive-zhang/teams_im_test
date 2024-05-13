# Icon

This is an example component.

### Icon

```tsx
import { Icon } from '@jiang-liuer/teams_im_ui';

export default () => <Icon type="CommonFilter" />;
```

```tsx
import { Icon } from '@jiang-liuer/teams_im_ui';

export default () => <Icon colorType="primary" type="TableTextMulti" />;
```

<API id="Icon"></API>

### Icon.Line

```tsx
import { Icon } from '@jiang-liuer/teams_im_ui';

export default () => (
  <Icon.Line
    list={[
      { type: 'TableTextMulti', key: 'TableTextMulti' },
      { type: 'FileExcelColor', key: 'FileExcelColor' },
    ]}
  />
);
```

```tsx
import { Icon } from '@jiang-liuer/teams_im_ui';

export default () => (
  <Icon.Line
    bordered
    iconClassName="text-[32px]"
    list={[
      { type: 'CommonAdd' },
      { type: 'CommonCheck' },
      { type: 'CommonCloseLarge' },
    ]}
  />
);
```

<API id="IconLine"></API>
