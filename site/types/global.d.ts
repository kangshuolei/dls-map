/*
 * @Author: Kang
 * @Date: 2024-06-15 16:38:07
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-19 16:30:34
 */

type EmptyObject = {
  [K in never]: never;
};

declare global {
  interface Window {
    default: any;
  }
}

export {};
