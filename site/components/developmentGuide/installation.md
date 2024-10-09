<!--
 * @Author: Kang
 * @Date: 2024-09-25 10:49:17
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-08 09:20:01
-->
# 环境支持

dls-map 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [WebGL](https://caniuse.com/webgl) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill.

由于 Vue3 及 CesiumJS 1.85+ 不再支持 IE11，所以 dls-map 也不再支持 IE 浏览器。

| ![edge](https://unpkg.com/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://unpkg.com/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://unpkg.com/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://unpkg.com/@browser-logos/safari/safari_32x32.png) |
| :-----------------------------------------------------------: | :--------------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
|                           Edge ≥ 79                           |                              Firefox ≥ 78                              |                             Chrome ≥ 64                             |                             Safari ≥ 12                             |


# 安装

## 使用包管理器安装

我们建议您<span style="color: rgb(66 184 131);"><b>使用包管理器</b></span>（npm，[yarn](https://classic.yarnpkg.com/lang/en/)，[pnpm](https://pnpm.io/zh/)）安装 `dls-map`，然后您就可以使用打包工具，例如 [vite](https://vitejs.dev), [webpack](https://webpack.js.org/)

```shell
# 选择一个你喜欢的包管理器

# npm
$ npm install dls-map --save

# yarn
$ yarn add dls-map

# pnpm
$ pnpm add dls-map
```

如果您的网络环境不好，建议使用 `nrm` 切换所用的包管理器的资源地址，或直接手动更改。

