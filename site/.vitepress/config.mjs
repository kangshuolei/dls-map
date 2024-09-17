import { defineConfig } from 'vitepress';
import { mdPlugin } from '../config/plugins';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'dls-map',
  description: 'dls-map',
  head: [
    ['link', { rel: 'icon', href: '/earth.svg' }],
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://unpkg.com/cesium@latest/Build/Cesium/Widgets/widgets.min.css',
    //   },
    // ],
    [
      'script',
      {
        src: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
      },
    ],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/echarts@4.9.0/dist/echarts.min.js' },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/heatmap.js@2.0.5/build/heatmap.min.js',
      },
    ],
  ],
  base: process.env.NODE_ENV === 'production' ? '/dls-map/' : '/',
  themeConfig: {
    repo: 'kangshuolei',
    docsBranch: 'master',
    docsDir: 'dls-map',
    logo: '/earth.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' },
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          {
            text: '开始',
            items: [
              {
                text: '开始',
                link: '/components/start/index.md',
              },
            ],
          },
          {
            text: '影像类',
            items: [
              {
                text: '加载地图',
                link: '/components/layer/index.md',
              },
            ],
          },
          {
            text: '图形类',
            items: [
              {
                text: 'Markdown Examples',
                link: '/components/entity/index.md',
              },
            ],
          },
          {
            text: '分析类',
            items: [
              {
                text: '标绘',
                link: '/components/analysis/plot/index.md',
              },
            ],
          },
          {
            text: '覆盖类',
            items: [
              {
                text: 'Markdown Examples',
                link: '/components/coverage/index.md',
              },
            ],
          },
          {
            text: '环境类',
            items: [
              {
                text: 'Markdown Examples',
                link: '/components/environment/index.md',
              },
            ],
          },
          {
            text: '工具类',
            items: [
              { text: 'Markdown Examples', link: '/components/tools/index.md' },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/kangshuolei/dls-map' },
    ],
    // 底部版权部分
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2024-present KKK',
    // },
    // markdown: {
    //   // 代码块风格
    //   theme: 'material-theme-palenight',
    //   // theme:'github-light',
    //   // 代码块显示行数
    //   lineNumbers: true,
    // },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
