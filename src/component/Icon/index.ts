import InternalIcon from './Icon';
import Line from './Line';

export type { IIconLineProps } from './Line';

type IconType = typeof InternalIcon;
export interface IconInterface extends IconType {
  displayName?: string;
  Line: typeof Line;
}

const Icon = InternalIcon as IconInterface;

Icon.Line = Line;

if (process.env.NODE_ENV !== 'production') {
  Icon.displayName = 'Icon';
}

export default Icon;
