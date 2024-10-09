/*
 * @Author: Kang
 * @Date: 2024-10-08 14:32:24
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-08 16:16:14
 */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const dlsKey = hasSymbol ? Symbol('DlsMap') : 'DlsMap';
export { dlsKey };
