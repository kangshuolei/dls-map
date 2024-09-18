# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

layer/index

:::

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

当然，这是转换成 Markdown 格式的中文版：

## Button API

### Button 属性

| 名称              | 描述                                                    | 类型                   | 默认值  |
| ----------------- | ------------------------------------------------------- | ---------------------- | ------- |
| size              | 按钮尺寸                                                | `enum`                 | —       |
| type              | 按钮类型                                                | `enum`                 | —       |
| plain             | 是否为朴素按钮                                          | `boolean`              | false   |
| text ^(2.2.0)     | 是否为文字按钮                                          | `boolean`              | false   |
| bg ^(2.2.0)       | 是否始终显示文字按钮的背景色                            | `boolean`              | false   |
| link ^(2.2.1)     | 是否为链接按钮                                          | `boolean`              | false   |
| round             | 是否为圆角按钮                                          | `boolean`              | false   |
| circle            | 是否为圆形按钮                                          | `boolean`              | false   |
| loading           | 是否显示加载状态                                        | `boolean`              | false   |
| loading-icon      | 自定义加载图标组件                                      | `string` / `Component` | Loading |
| disabled          | 是否禁用按钮                                            | `boolean`              | false   |
| icon              | 图标组件                                                | `string` / `Component` | —       |
| autofocus         | 是否自动获取焦点，和原生按钮的 `autofocus` 属性相同     | `boolean`              | false   |
| native-type       | 与原生按钮的 `type` 属性相同                            | `enum`                 | button  |
| auto-insert-space | 是否自动在两个中文字符之间插入空格                      | `boolean`              | —       |
| color             | 自定义按钮颜色，自动计算 `hover` 和 `active` 状态的颜色 | `string`               | —       |
| dark              | 暗色模式，自动将 `color` 转换为暗色模式                 | `boolean`              | false   |
| tag ^(2.3.4)      | 自定义元素标签                                          | `string` / `Component` | button  |

### Button 插槽

| 名称    | 描述           |
| ------- | -------------- |
| default | 自定义默认内容 |
| loading | 自定义加载组件 |
| icon    | 自定义图标组件 |

### Button Exposes

| 名称           | 描述             | 类型                     |
| -------------- | ---------------- | ------------------------ |
| ref            | 按钮 HTML 元素   | `Ref<HTMLButtonElement>` |
| size           | 按钮尺寸         | `ComputedRef<'' \| >`    |
| type           | 按钮类型         | `ComputedRef<'' \| >`    |
| disabled       | 按钮禁用状态     | `ComputedRef<boolean>`   |
| shouldAddSpace | 是否自动添加空格 | `ComputedRef<boolean>`   |

## ButtonGroup API

### ButtonGroup 属性

| 名称 | 描述                     | 类型   | 默认值 |
| ---- | ------------------------ | ------ | ------ |
| size | 控制该按钮组内按钮的尺寸 | `enum` | —      |
| type | 控制该按钮组内按钮的类型 | `enum` | —      |

### ButtonGroup 插槽

| 名称    | 描述               | 子标签 |
| ------- | ------------------ | ------ |
| default | 自定义按钮组的内容 | Button |
