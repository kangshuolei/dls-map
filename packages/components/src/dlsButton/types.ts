/*
 * @Author: Kang
 * @Date: 2022-09-01 16:47:10
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-09 14:39:42
 */
import { ExtractPropTypes, PropType } from 'vue';

export const ButtonType = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'text',
];

type ButtonTypes =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text';

type ButtonSizes = 'midium' | 'small' | 'mini';

export const ButtonSize = ['midium', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    validator(value: string) {
      return ButtonType.includes(value);
    },
  },
  size: {
    type: String as PropType<ButtonSizes>,
    validator(value: string) {
      return ButtonSize.includes(value);
    },
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
};

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type buttonProps = ExtractPropTypes<typeof buttonProps>;
