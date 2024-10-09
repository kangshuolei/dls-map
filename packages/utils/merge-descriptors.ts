/*
 * @Author: Kang
 * @Date: 2024-10-08 16:07:21
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-08 16:07:38
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

function merge(dest: any, src: any, redefine: any) {
  if (!dest) {
    throw new TypeError('argument dest is required');
  }

  if (!src) {
    throw new TypeError('argument src is required');
  }

  if (redefine === undefined) {
    // Default to true
    redefine = true;
  }

  Object.getOwnPropertyNames(src).forEach(
    function forEachOwnPropertyName(name) {
      if (!redefine && hasOwnProperty.call(dest, name)) {
        // Skip desriptor
        return;
      }

      // Copy descriptor
      const descriptor = Object.getOwnPropertyDescriptor(src, name);
      Object.defineProperty(dest, name, descriptor!);
    }
  );

  return dest;
}

/**
 * @param {...Object} args
 * @returns {Object}
 */
export function mergeDescriptors(...args: any[]): object {
  let redefine: boolean;
  if (typeof args[args.length - 1] !== 'object') {
    redefine = args.pop();
  }

  return args
    .slice(1)
    .reduce((dest, src, i) => merge(dest, src, redefine), args[0]);
}
