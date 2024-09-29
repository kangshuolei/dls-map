# 快速开始

`dls-map` 完成了 CesiumJS 的 Vue 组件化，你可以在你的 Vue 项目中使用这个库提供的各个组件。本库本身不含 CesiumJS，所以在引入时通常需要配置 CesiumJS 本身

接下来将介绍如何在使用 Vue3 项目中引入 `dls-map`。

## 全量导入

如果你对打包后的文件大小不是很在乎，那么你可以使用 Vue 的 [插件](https://staging-cn.vuejs.org/guide/reusability/plugins.html) 安装方式配置到全局。

```ts
// main.ts
import { createApp } from 'vue'
import DlsMap from 'dls-map'
import App from './App.vue'


const app = createApp(App)

app.use(DlsMap) 

// 由于Cesium更新可能有破坏性更新，建议在生产环境中锁定 Cesium 版本


app.mount('#app')
```

## 按需导入

`dls-map` 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

例如，你可以在任意单文件组件中使用 dls-map，这里以 `DlsMap` 组件为例。

```html
<template>
  <dls-map
      :mapConfig="{
        id: 'dls-map-layer-map',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @cesium-ready="onCesiumReady"
    />
</template>
<script setup>
  import { DlsMap } from 'dls-map';
  import { onMounted, ref, reactive, watch } from 'vue';

  const dlsMapRef = ref(null);
  const dataM = reactive<any>({
    imageryProvider: {
      url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      layer: 'tdtVecBasicLayer',
      style: 'default',
      format: 'image/png',
      tileMatrixSetID: 'GoogleMapsCompatible',
    },
  });
</script>
```


## 配置 dls-map

在 vue3 项目的 index.html 里加载 cesium的包

```html
<link rel="stylesheet" href="/cesium/Cesium/Widgets/widgets.css" />
<script type="text/javascript" src="https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js"></script>
```

:::tip
如果 cesium.js 是网络地址，如果网络差，加载时间会变大，确保加载完cesium之后再进行业务操作
:::



## TypeScript 及代码智能提示支持

请在 `tsconfig.json` 或者 `jsconfig.json` 文件中 `includes` 中添加如下配置：

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
  },
  "include": ["src/**/*", "node_modules/dls-map/es/types/Cesium.d.ts"]
}
```

以上配置将适配 vscode 的 Volar 插件，并得到 CesiumJS API 提示。

## 如何在 dls-map 中继续使用原生 CesiumJS API 开发？

dls-map 可能并不完全能提供你所需的功能，但是保留了访问由 dls-map 创建的 Cesium 有关实例对象的访问权限。

它的 `ready` 事件回调函数的参数可以解构成 `viewer` 变量，用于原生 Cesium API 开发。

你也可以使用 ref 模板引用在组件生命周期内随时获取这两个变量。

```ts
<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-25 15:05:48
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-layer-map',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @cesium-ready="onCesiumReady"
    />
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from 'dls-map';
import { onMounted, ref, reactive } from 'vue';

const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  console.log('viewer', viewer, Cesium);
};
</script>

```

:::tip
`Cesium` 变量即命名空间，你可以通过它访问 CesiumJS 原生的 API，例如 `Cesium.Cartesian3`；而 `viewer` 参数则是观察者实例，参考 CesiumJS 官方文档即可。
:::

:::tip
实际上 dls-map 是通过动态标签引入 Cesium 的，所以 Cesium 变量其实是全局的。只是它最快需要在 vc-viewer 的 `cesiumReady` 事件之后才成为可访问的全局变量。如果您觉得这样不方便，也可以考虑将其直接写到项目模板文件 index.html 的 `head` 标签中，详见[#155](https://github.com/zouyaoji/vue-cesium/issues/155#issuecomment-1042470701)。一旦这样写，在 Vue for Cesium 在初始化时 Cesium 变量就已经存在了，就不会再去通过动态标签再次引入 Cesium 了。

只是在 JS 项目中，如果配置了 ESLint ，我们需要告诉 ESLint Cesium 已经是全局变量了，而 TS 项目中则需要声明 Cesium 为全局变量或者引入 Cesium.d.ts (推荐后者) ，两者的配置请分别参考[ESLint 配置](https://github.com/zouyaoji/vue-cesium-starter/blob/main/.eslintrc.js#L11) 和 [TS 配置](https://github.com/zouyaoji/vue-cesium-demo/blob/main/tsconfig.json)。
:::

## 如何在其他 Vue 组件中获取 viewer 实例？

不推荐粗暴的直接挂在 window 上，当然调试除外。通常我们需要维护一个全局的 viewer 实例，以方便其他组件（页面）获取到并使用。Vue2 中可以直接挂到 Vue 原型链上 或者 Vuex 中。

Vue3 中在组合式 API 的加持下可以通过 `useVueCesium` 很方便的获取到，这也是我们比较推荐的做法。

```ts
// 开发中。。。
```

:::tip
注 
:::

## 使用模板

### 更喜欢 VueCLI

我们提供了通用的 [VueCLI4 + Vue3Js + Vuex4 + VueRouter4 项目模板](https://gitee.com/kangshuolei/dls-map)，你可以直接下载使用。

### 试试 Vite

另外我们还提供了 [Vite2 + Vue3Ts 模板](https://gitee.com/kangshuolei/dls-map)。

这里还有一个 [Vite2 + Vue3Ts + Vuex4 + VueRouter4 综合案例](https://gitee.com/kangshuolei/dls-map)，同样可下载使用。

### 桌面开发

如果你对桌面应用感兴趣，你可以参考 [Vite2 + Vue3Ts + Electron13 模板](https://gitee.com/kangshuolei/dls-map)。

### 关于 Vue2

dls-map暂时没有vue2版本

## 开始使用

您可以从现在起启动您的项目。

对于每个组件的用法，请参考单个组件对应的文档。
