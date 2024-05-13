import { StoreProvider, useConfigStore } from './context';

// export { ConfigContextProvider, useConfigStore };
type InternalConfigProviderType = typeof StoreProvider;

export interface IConfigProviderInterface extends InternalConfigProviderType {
  useConfigStore: typeof useConfigStore;
  displayName?: string;
}

const ConfigProvider = StoreProvider as IConfigProviderInterface;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = 'ConfigProvider';
}

export default ConfigProvider;
