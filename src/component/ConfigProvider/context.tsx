import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { Store } from './store';
import { createStore } from './store';

export function createStoreContext<T extends object>(initState: T) {
  const StoreContext = createContext<Store<T> | null>(null);

  const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<Store<T>>();
    if (!storeRef.current) {
      storeRef.current = createStore(initState);
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  };

  const useStoreKey = function <K extends keyof T>(
    key: K,
  ): [T[K], (p: T[K]) => void] {
    const storeCtx = useContext(StoreContext)!;
    // console.log({ storeCtx });
    const defaultSelectState = storeCtx?.getState()?.[key];

    const [state, setState] = useState<T[K]>(defaultSelectState);

    // add subscribe
    useEffect(() => {
      const unsubscribe = storeCtx?.subscribe((s: T) => {
        setState(s[key]);
      });

      return () => unsubscribe?.();
    }, []);

    const setStateValue = useCallback((value: T[K]) => {
      storeCtx?.setStateKey?.(key, value);
    }, []);

    return [state, setStateValue];
  };

  const useStore = (
    selector?: (state: T) => any,
  ): [Partial<T>, (p: Partial<T>) => void] => {
    const storeCtx = useContext(StoreContext)!;
    console.log({ storeCtx });
    const defaultSelectState = selector
      ? selector?.(storeCtx?.getState())
      : storeCtx?.getState();

    const [state, setState] = useState(defaultSelectState);

    // add subscribe
    useEffect(() => {
      const unsubscribe = storeCtx?.subscribe((s: T) => {
        const selectState = selector ? selector(s) : s;

        setState(selectState);
      });

      return () => unsubscribe?.();
    }, []);

    return [state, storeCtx?.setState];
  };

  return {
    StoreProvider,
    useStore,
    useStoreKey,
    StoreContext,
  };
}

export type IScreenSize = 'mobile' | 'wide';

export type IConfigProviderData = {
  /**
   * @description 编辑框是否全屏
   * @default false
   * @name 编辑框全屏
   */
  isEditFullScreen?: boolean;
  /**
   * @default 'wide'
   * @description 宽度大于400 为 wide, 小于400为 mobile
   * @name 当前聊天框的适配
   * @type IScreenSize
   */
  screenSize?: IScreenSize;
};
const initState = {
  isEditFullScreen: false,
  screenType: 'wide' as IScreenSize,
};

const {
  StoreProvider,
  useStore: useConfigStore,
  useStoreKey: useConfigStoreKey,
} = createStoreContext<IConfigProviderData>(initState);

export { StoreProvider, useConfigStore, useConfigStoreKey };
