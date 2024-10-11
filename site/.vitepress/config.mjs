import { defineConfig } from 'vitepress';
import { mdPlugin } from '../config/plugins';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'dls-map',
  description: 'dls-map',
  head: [
    ['link', { rel: 'icon', href: '/dls-map/favicon.ico' }],
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
        src: 'https://cdn.staticfile.net/cesium/1.106.1/Cesium.js',
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
  base: process.env.NODE_ENV === 'production' ? '/dls-map-doc/' : '/',
  themeConfig: {
    repo: 'kangshuolei',
    docsBranch: 'master',
    docsDir: 'dls-map',
    logo: '/earth.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/layer/map.md' },
    ],
    sidebar: [
      {
        text: '开发指南',
        items: [
          {
            text: '安装',
            link: '/components/developmentGuide/installation.md',
          },
          {
            text: '快速上手',
            link: '/components/developmentGuide/quickStart.md',
          }
        ]
      },
      {
        text: '组件',
        items: [
          {
            text: '影像类',
            items: [
              {
                text: '加载地图',
                link: '/components/layer/map.md',
              },
              {
                text: '加载地形',
                link: '/components/layer/terrain.md',
              },
              {
                text: '加载倾斜摄影',
                link: '/components/layer/photography.md',
              },
            ],
          },
          {
            text: '图形类',
            items: [
              {
                text: '加载图形',
                link: '/components/entity/graphics.md',
              },
            ],
          },
          {
            text: '分析类',
            items: [
              {
                text: '标绘',
                link: '/components/analysis/plot.md',
              },
              {
                text: '测量',
                link: '/components/analysis/measure.md',
              },
              {
                text: '路线轨迹',
                link: '/components/analysis/trajectory.md',
              },
              {
                text: '空间点查询',
                link: '/components/analysis/spacePoint.md',
              },
              {
                text: '缓冲区',
                link: '/components/analysis/bufferArea.md',
              },
            ],
          },
          {
            text: '覆盖类',
            items: [
              {
                text: '热力图',
                link: '/components/coverage/heatMap.md',
              },
              {
                text: 'Echarts图',
                link: '/components/coverage/loadEcharts.md',
              },
              {
                text: '信息面板',
                link: '/components/coverage/panel.md',
              },
              {
                text: '图层覆盖',
                link: '/components/coverage/layers.md',
              },
            ],
          },
          {
            text: '环境类',
            items: [
              {
                text: '下雨',
                link: '/components/environment/rain.md',
              },
              {
                text: '下雪',
                link: '/components/environment/snow.md',
              },
            ],
          },
          {
            text: '工具类',
            items: [
              {
                text: '地图操作工具',
                link: '/components/tools/tools.md',
              },
            ],
          },
          {
            text: '其他'
          }
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/kangshuolei/dls-map' },
    ],
    // 底部版权部分
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present KKK',
    },
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
