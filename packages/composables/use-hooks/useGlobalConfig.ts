import { inject, ref, computed, getCurrentInstance } from 'vue';
import type { Ref, InjectionKey } from 'vue';

interface ConfigProviderContext {
  [propName: string]: any;
}

const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> =
  Symbol();

const globalConfig = ref<ConfigProviderContext>();

export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K],
>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;

export function useGlobalConfig(): Ref<ConfigProviderContext>;

export function useGlobalConfig(
  key?: keyof ConfigProviderContext,
  defaultValue: any = undefined
) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig;
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue);
  } else {
    return config;
  }
}
