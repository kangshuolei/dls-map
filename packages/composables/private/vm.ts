import { AnyFunction, DlsComponentInternalInstance } from '../../utils/types';
import { capitalize } from '@vue/shared';
import { findIndex, camelCase } from 'lodash-unified';

export function getInstanceListener(
  vcInstance: DlsComponentInternalInstance,
  listenerName: string
) {
  const props = vcInstance.vnode.props;
  if (props === null) {
    return undefined;
  }
  const propKeys = Object.keys(props);
  const index = findIndex(propKeys, (o) => {
    return (
      o.includes(`on${capitalize(listenerName)}`) ||
      o.includes(`on${capitalize(camelCase(listenerName))}`)
    );
  });
  const listener = props[propKeys[index]];
  return listener as AnyFunction<any>;
}
